// export default [
//   {
//     rules: {
//       semi: ["error", "always"],
//       "comma-dangle": ["error", "always-multiline"],
//     },
//   },
// ];
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
];
