import path from "path";
import fs from "fs";

const packagePath = path.resolve(__dirname, "../../packages");
const distPath = path.resolve(__dirname, "../../dist/node_modules");

export const resolvePackagePath = (packageName, isDist) => {
  if (isDist) {
    return `${distPath}/${packageName}`;
  } else {
    `${packagePath}/${packageName}`;
  }
};

export const getPackageJSON = (packageName) => {
  // ...包路径
  const path = `${resolvePackagePath(packageName)}.package.json`;
  const string = fs.readFileSync(path, { encoding: "utf-8" });

  return JSON.parse(string);
};

export const getBaseRollupPlugins = () => {
  return;
};
