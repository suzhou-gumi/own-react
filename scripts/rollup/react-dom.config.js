import {
  resolvePackagePath,
  getPackageJSON,
  getBaseRollupPlugins,
} from "./utils.js";
import generatePackageJson from "rollup-plugin-generate-package-json";
import alias from "@rollup/plugin-alias";

const { name, module, peerDependencies } = getPackageJSON("react-dom");
// react包的路径
const packagePath = resolvePackagePath(name);
// react产物路径
const distPackagePath = resolvePackagePath(name, true);

export default [
  // react-dom
  {
    input: `${packagePath}/${module}`,
    output: [
      {
        file: `${distPackagePath}/index.js`,
        name: "index.js",
        format: "es",
      },
      {
        file: `${distPackagePath}/client.js`,
        name: "client.js",
        format: "es",
      },
    ],
    external: [...Object.keys(peerDependencies)],
    plugins: [
      ...getBaseRollupPlugins({}),
      // webpack resolve alias
      alias({
        entries: {
          hostConfig: `${packagePath}/src/hostConfig.ts`,
        },
      }),
      generatePackageJson({
        inputFolder: packagePath,
        outputFolder: distPackagePath,
        baseContents: ({ name, description, version }) => ({
          name,
          description,
          version,
          peerDependencies: {
            react: version,
          },
          main: "index.js",
        }),
      }),
    ],
  },
];
