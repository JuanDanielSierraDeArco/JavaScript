// JSON
console.log("======= JSON =======");

// Objeto JavaScript normal (NO es JSON aún)
const json = {
  cadena: "Juan Daniel",
  numeros: 35,
  boolean: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@juandaniel",
    email: "juandaniel@gmail.com",
  },
  nulo: null,
};

console.log(json); // Objeto JS
console.log(JSON); // Objeto global JSON con métodos parse y stringify

/* ===============================
   JSON.parse()
   Convierte TEXTO JSON → Objeto JS
=============================== */

console.log(JSON.parse("{}"));          // {}
console.log(JSON.parse("[1,2,4,4]"));   // Array
console.log(JSON.parse("true"));        // boolean
console.log(JSON.parse("false"));       // boolean
console.log(JSON.parse("19"));          // number
console.log(JSON.parse("null"));        // null

// ❌ Error: no es un JSON válido
// console.log(JSON.parse("Hola Mundo"));

/* ===============================
   JSON.stringify()
   Convierte Objeto JS → TEXTO JSON
=============================== */

console.log(JSON.stringify({}));               // "{}"
console.log(JSON.stringify([1, 2, 4, 5, 6]));  // "[1,2,4,5,6]"
console.log(JSON.stringify(true));             // "true"
console.log(JSON.stringify(false));            // "false"
console.log(JSON.stringify(null));              // "null"

// ❌ undefined NO existe en JSON
console.log(JSON.stringify(undefined));        // undefined

console.log(JSON.stringify({ x: 2, y: 3 }));   // '{"x":2,"y":3}'
console.log(JSON.stringify(json));             // Objeto convertido a JSON

/* ===============================
   JSON como texto real
=============================== */

// Convierte un string JSON en otro string JSON (no cambia nada)
console.log(
  JSON.stringify(
    '{"cadena":"Juan Daniel","numeros":"35","boolean":"true"}'
  )
);

// Convierte TEXTO JSON válido en objeto JS
console.log(
  JSON.parse(
    '{"cadena":"Juan Daniel","numeros":"35","boolean":"true","arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@juandaniel","email":"juandaniel@gmail.com"},"nulo":null}'
  )
);