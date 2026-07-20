import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",      // Advierte sobre variables no utilizadas
      "no-console": "off",           // Permite el uso de console.log para el servidor
      "eqeqeq": "error",             // Exige el uso de === y !==
      "curly": "error",              // Exige llaves en todas las estructuras de control
      "semi": ["error", "always"],   // Exige punto y coma al final de las sentencias
    },
    languageOptions: {
      globals: {
        node: true, // Define el entorno de Node.js
        jest: true  // Define el entorno de Jest para evitar errores en los tests
      }
    }
  }
];