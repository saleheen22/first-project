import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
    },
    ignores: ["**/node_modules/**", "**/dist/**"], // Ignore these directories
    rules: {
      "no-unused-vars": "error", // Add the no-unused-vars rule here
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
      "prettier/prettier": "error", // Add Prettier as a rule
    },
    globals: {
      process: "readonly",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig, // Disable ESLint rules conflicting with Prettier
  {
    plugins: {
      prettier: prettierPlugin, // Add the Prettier plugin
    },
  },
];
