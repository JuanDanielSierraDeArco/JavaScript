// Métodos que iteran sobre un array
// Métodos que NO modifican el array original (inmutabilidad)

// ---------------------------------------------------------
// map() --> Crea un NUEVO array aplicando una función
// a cada elemento del array original
// ---------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
// Creamos un array de números del 1 al 10

const squareNumbers = numbers.map(num => num * num); 
// Con map() recorremos cada elemento del array
// y devolvemos su cuadrado (num * num)
// El resultado es un NUEVO array con los números elevados al cuadrado

console.log(numbers);       // Mostramos el array original (NO cambia)
console.log(squareNumbers); // Mostramos el array con los números al cuadrado

// ---------------------------------------------------------
// forEach() --> Recorre cada elemento del array y ejecuta
// una acción, pero NO devuelve un nuevo array
// ---------------------------------------------------------

const colors = ['red', 'pink', 'blue', 'azul']; 
// Creamos un array de colores

const iteratedColors = colors.forEach(color => console.log(color)); 
// forEach() recorre cada elemento del array y lo imprime en consola
// Importante: forEach() no devuelve nada (undefined)

// Por eso:
console.log(colors);          // El array original sigue igual
console.log(iteratedColors);  // Será "undefined" porque forEach() no retorna un array