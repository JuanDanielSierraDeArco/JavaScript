import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Permite JSX
        },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
    },

    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },

    rules: {
      /* ===============================
         Reglas generales JavaScript
      =============================== */

      "no-unused-vars": "warn",
      "no-use-before-define": "error",
      "no-redeclare": "error",
      "no-unreachable": "error",
      eqeqeq: ["error", "always"],

      /* ===============================
         Reglas específicas de React
      =============================== */

      // Ya no es necesario importar React en JSX (React 17+)
      "react/react-in-jsx-scope": "off",

      // Obliga a cerrar correctamente los componentes
      "react/jsx-uses-react": "off",

      // Evita props no tipadas (útil si luego usas PropTypes)
      "react/prop-types": "off",

      /* ===============================
         Reglas de Hooks (MUY IMPORTANTES)
      =============================== */

      // Obliga a usar hooks correctamente
      "react-hooks/rules-of-hooks": "error",

      // Advierte dependencias faltantes en useEffect
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];
