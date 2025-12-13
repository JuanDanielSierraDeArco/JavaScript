// ==============================
// Tipo de dato Boolean
// ==============================

// Valores booleanos explícitos
let verdadero = true;
let falso = false;

// Tipo de dato
console.log(typeof verdadero, typeof falso); // "boolean", "boolean"

// Mostrar valores
console.log(verdadero, falso);

// ==============================
// Conversión a Boolean
// ==============================

// Valores falsy
console.log(Boolean(0));      // false
console.log(Boolean(""));     // false

// Valores truthy
console.log(Boolean(7));      // true
console.log(Boolean(-7));     // true
console.log(Boolean(" "));    // true (string con espacio)
