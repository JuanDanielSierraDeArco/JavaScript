/*Los operadores de comparacion se utilizan para comparar dos valores y determinar si son iguales, diferentes, mayores o menores que el otro.
En JavaScript. hay seis operadores de comparacion principales*/

/* Igualdad (==): compara si dos valores son iguales en valor, sin importar su tipo de dato.*/

let numero1 = 5;
let numero2 = '5';

console.log(numero1 == numero2); // true

let nombre1 = 'Juan';
let nombre2 = 'Juan';       

console.log(nombre1 == nombre2); // true

/* igualdad estricta (===): compara si dos valores son iguales en valor y tipo de dato.*/

console.log(numero1 === numero2); // false, porque son de tipos diferentes (number vs string)
console.log(nombre1 === nombre2); // true, porque son del mismo tipo y valor

/* Desigualdad (!=): compara si dos valores son diferentes en valor, sin importar su tipo de dato.*/

console.log(numero1 != numero2); // false, porque son iguales en valor
console.log(nombre1 != nombre2); // false, porque son iguales en valor

/* Desigualdad estricta (!==): compara si dos valores son diferentes en valor o tipo de dato.*/

console.log(numero1 !== numero2); // true, porque son de tipos diferentes (number vs string)
console.log(nombre1 !== nombre2); // false, porque son del mismo tipo y valor

/* Mayor que (>), menor que (<), mayor o igual que (>=), menor o igual que (<=) */

console.log(numero1 > 3); // true, porque 5 es mayor que 3
console.log(numero1 < 10); // true, porque 5 es menor que 10
console.log(numero1 >= 5); // true, porque 5 es mayor o igual que 5
console.log(numero1 <= 4); // false, porque 5 no es menor o igual que 4\

let palabra1 = 'adios'
let palabra2 = 'hola'

console.log(palabra1 > palabra2); // true, porque 'adios' es mayor que 'hola' en orden lexicográfico

console.log(palabra1 && palabra2); // 'adios', porque el operador && devuelve el primer valor que es verdadero (truthy) en una evaluación lógica 
console.log(palabra1 || palabra2); // 'adios', porque el operador || devuelve el primer valor que es verdadero (truthy) en una evaluación lógica
console.log(!palabra1); // false, porque 'adios' es un valor truthy y el operador ! lo convierte en falso
