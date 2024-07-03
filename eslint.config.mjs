import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { files: ["packages/**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
