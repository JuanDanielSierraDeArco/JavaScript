// Iterables
// Array, String, Map, Set son estructuras ITERABLES

// Ejemplos de iterables (solo uno activo a la vez)
// const iterable = [1,2,3,4,5,6,7,8,10];
// const iterable = "Hola mundo";
// const iterable = new Set([1,2,2,2,3,4,5]);

// Map es iterable y devuelve pares [key, value]
const iterable = new Map([
    ["nombre", "Juan Daniel"],
    ["edad", 27],
]);

console.log(iterable);

// Un iterable NO es un iterador
// Para recorrerlo manualmente obtenemos el iterador
const iterador = iterable[Symbol.iterator]();

// next() devuelve un objeto:
// { value: ..., done: false }
let next = iterador.next();
console.log(iterador);

// Mientras no se haya terminado el iterable
while (!next.done) {
    // En Map, value es un array: [clave, valor]
    console.log(next.value);

    // Avanzamos al siguiente elemento
    next = iterador.next();
}
