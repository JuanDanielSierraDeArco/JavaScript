// ===============================
// OBJETO MATH
// ===============================

// Muestra todas las propiedades y métodos del objeto Math
console.log(Math);

// ===============================
// CONSTANTES
// ===============================

// Constante PI (π)
console.log(Math.PI);

// ===============================
// VALORES ABSOLUTOS
// ===============================

// Devuelve el valor absoluto de un número
console.log(Math.abs(-4)); // 4

// ===============================
// REDONDEOS
// ===============================

// Redondea hacia arriba
console.log(Math.ceil(8.5)); // 9

// Redondea hacia abajo
console.log(Math.floor(8.5)); // 8

// Redondea al entero más cercano
console.log(Math.round(8.5)); // 9

// ===============================
// RAÍZ CUADRADA
// ===============================

// Raíz cuadrada de un número
console.log(Math.sqrt(2));
console.log(Math.sqrt(81)); // 9

// ===============================
// POTENCIAS
// ===============================

// Eleva un número a una potencia
console.log(Math.pow(2, 5)); // 32

// ===============================
// SIGNO DEL NÚMERO
// ===============================

// Devuelve:
// -1 si es negativo
//  0 si es cero
//  1 si es positivo
console.log(Math.sign(-8)); // -1
console.log(Math.sign(8));  // 1

// ===============================
// NÚMEROS ALEATORIOS
// ===============================

// Número aleatorio entre 0 (incluido) y 1 (excluido)
console.log(Math.random());

// Número aleatorio entero entre 0 y 1000
console.log(Math.round(Math.random() * 1000));

// Número entero entre min y max
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}