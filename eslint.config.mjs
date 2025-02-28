import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/self-closing-comp": "error",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "semi": ["error", "always"], 
      "quotes": ["error", "double"], 
      "eqeqeq": ["error", "always"],
      "no-unused-vars": "warn" 
    }
  }
];