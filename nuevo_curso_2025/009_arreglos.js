/* =========================
ARREGLOS (ARRAYS)
========================= */

// Array vacío
// Se declara con corchetes []
const a = [];
console.log(a); // []

// Array con distintos tipos de datos y arrays anidados
const b = [1, true,'hola', ['a','b','c', ['casa', 'carro', 'moto']]];

console.log(b); // muestra todo el array
console.log(b.length); // número total de elementos (4)
console.log(b[2]); // 'hola'
console.log(b[0]); // 1
console.log(b[3][2]); // 'c'
console.log(b[3][3]); // ['casa', 'carro', 'moto']
console.log(b[3][3][2]); // 'moto'

// Array.of()
// Crea un array con los valores exactos que se pasan
const c = Array.of('x', 'y', 'z', 1, 3);
console.log(c);

// Array() + fill()
// Crea un array con una longitud fija y lo rellena
const d = Array(30).fill(true);
console.log(d);

// new Array()
// Otra forma de crear arrays (no recomendada para principiantes)
const e = new Array(1, 2, 3, 'true', false);
console.log(e);

// Array de colores
const colores = ['rojo', 'verde', 'azul'];
console.log(colores);

// push()
// Agrega un elemento al final del array
colores.push('negro');
console.log(colores);

// pop()
// Elimina el último elemento del array
colores.pop();
console.log(colores);

// pop() otra vez
colores.pop();
console.log(colores);

// push() nuevamente
colores.push('negro');
console.log(colores);

// forEach()
// Recorre el array elemento por elemento
// No devuelve un nuevo array
colores.forEach(function (elemento, index) {
console.log(`<li id='${index}'>${elemento}</li>`);
});