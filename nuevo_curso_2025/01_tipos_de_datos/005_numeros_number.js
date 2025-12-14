// ==============================
// Numbers (Números en JavaScript)
// ==============================

// Declaración de números
let a = 2;                 // Número entero
let b = new Number(5);    // Objeto Number (NO recomendado)
let c = 7.19;             // Número decimal
let d = "5.6";            // String (no es número)

// Mostrar valores
console.log(a, b);

// ==============================
// Métodos de números
// ==============================

// toFixed() formatea decimales (devuelve STRING)
console.log(c.toFixed(1)); // "7.2"
console.log(c.toFixed(5)); // "7.19000"

// ==============================
// Conversión de números
// ==============================

// Convierte a entero
console.log(parseInt(c)); // 7

// Convierte a decimal
console.log(parseFloat(c)); // 7.19

// ==============================
// Tipos de datos
// ==============================
console.log(typeof a, typeof d); // "number", "string"

// ==============================
// Operaciones
// ==============================

// Suma de números
console.log(a + b); // 7

// Concatenación (number + string)
console.log(c + d); // "7.195.6"

// Suma correcta convirtiendo el string
console.log(c + parseInt(d));   // 7.19 + 5 = 12.19
console.log(c + parseFloat(d)); // 7.19 + 5.6 = 12.79
