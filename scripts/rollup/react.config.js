import { resolvePackagePath, getPackageJSON } from "./utils";

const { name, module } = getPackageJSON("react");
// react包的路径
const packagePath = resolvePackagePath(name);
// react产物路径
const distPackagePath = resolvePackagePath(name, true);

export default [
  {
    input: `${packagePath}/${module}`,
    outpust: {
      file: `${distPackagePath}/index.js`,
      name: "index.js",
      format: "umd",
    },
    plugins: [],
  },
];
