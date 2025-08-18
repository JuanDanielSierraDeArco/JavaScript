// Métodos que iteran sobre arrays
// Estos métodos NO modifican el array original (inmutabilidad)

// ---------- MÉTODO find() ----------
// find() devuelve el PRIMER elemento del array que cumpla
// con la condición (función de prueba) especificada.

const numbers = [5, 15, 25, 35, 8, 86, 99];

// Busca el primer número mayor que 10
const firstNumberGreaterThan10 = numbers.find(number => number > 10);

console.log(firstNumberGreaterThan10); 
// Resultado: 15  → porque es el primer número mayor que 10 en el array
//---------------------------------------------------------------


// ---------- MÉTODO findIndex() ----------
// findIndex() devuelve el ÍNDICE del primer elemento que cumpla
// con la condición especificada.

const numbers2 = [5, 15, 25, 35, 8, 86, 99];

// Busca el índice del primer número mayor que 50
const indexNumber = numbers2.findIndex(number => number > 50);

console.log(indexNumber); 
// Resultado: 5  → porque numbers2[5] = 86 es el primer número > 50
//---------------------------------------------------------------
