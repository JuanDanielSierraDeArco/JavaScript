// Declaramos una constante llamada PI
// Una constante DEBE tener un valor inicial
const PI = 3.1416;

// ❌ Esto daría error porque una constante no puede declararse sin valor
// const NUEVE;

console.log(PI); // Muestra el valor de PI

// Declaramos una variable con let (se puede declarar sin valor)
let a;

// Asignamos el valor después
a = "kenia";

console.log(a); // Muestra "kenia"

// let objeto = {
//     name: "Juan",
//     edad: 35,
// };

// let colores = ['blanco', 'negro', 'azul'];

//Declaramos un objeto como constante
const objeto = {
  name: "Juan",
  edad: 35,
};

// Declaramos un arreglo como constante
const colores = ['blanco', 'negro', 'azul'];

console.log(objeto);
console.log(colores);

// Añadimos una nueva propiedad al objeto
objeto.correo = 'juandanielsierra@algo.com';

// Añadimos un nuevo elemento al arreglo
colores.push('anaranjado');

console.log(objeto);
console.log(colores);