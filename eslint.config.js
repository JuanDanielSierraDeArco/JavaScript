import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly",
        window: "readonly",
        document: "readonly",

        //web APIs (Speech API)
        speechSynthesis: "readonly",
        SpeechSynthesisUtterance: "readonly",
      },
    },

    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "warn",
    },
  },
];
