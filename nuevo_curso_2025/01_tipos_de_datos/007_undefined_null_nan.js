// =====================================
// undefined, null y NaN
// =====================================

// -----------------------------
// undefined
// -----------------------------
// Indica que una variable fue declarada
// pero NO inicializada

let indefinida;
console.log(indefinida); // undefined

// -----------------------------
// null
// -----------------------------
// Valor intencional que indica ausencia
// de un valor

let nulo = null;
console.log(nulo); // null

// -----------------------------
// NaN (Not a Number)
// -----------------------------
// Resultado de una operación matemática inválida

let noEsUnNumero = 'hola' * 3.17;
console.log(noEsUnNumero); // NaN
