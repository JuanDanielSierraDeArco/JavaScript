import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },

    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "warn",
    },
  },
];
