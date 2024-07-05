import {
  resolvePackagePath,
  getPackageJSON,
  getBaseRollupPlugins,
} from "./utils.js";
import generatePackageJson from "rollup-plugin-generate-package-json";

const { name, module } = getPackageJSON("react");
// react包的路径
const packagePath = resolvePackagePath(name);
// react产物路径
const distPackagePath = resolvePackagePath(name, true);

export default [
  // react
  {
    input: `${packagePath}/${module}`,
    output: {
      file: `${distPackagePath}/index.js`,
      name: "index.js",
      format: "es",
    },
    plugins: [
      ...getBaseRollupPlugins({}),
      generatePackageJson({
        inputFolder: packagePath,
        outputFolder: distPackagePath,
        baseContents: ({ name, description, version }) => ({
          name,
          description,
          version,
          main: "index.js",
        }),
      }),
    ],
  },
  // jsx-runtime
  {
    input: `${packagePath}/src/jsx.ts`,
    output: [
      // jsx-runtime
      {
        file: `${distPackagePath}/jsx-runtime.js`,
        name: "jsx-runtime.js",
        format: "es",
      },
      // jsx-dev-runtime
      {
        file: `${distPackagePath}/jsx-dev-runtime.js`,
        name: "jsx-dev-runtime.js",
        format: "es",
      },
    ],
    plugins: getBaseRollupPlugins({}),
  },
];
