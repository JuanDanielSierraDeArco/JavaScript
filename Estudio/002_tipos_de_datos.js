// Primitivos

let nombre = "Juan"; // string: Representa una cadena de caracteres (texto)

let edad = 26; // number: Representa un valor numérico, ya sea entero o decimal

let esMayorDeEdad = true; // boolean: Representa un valor verdadero (true) o falso (false)

let noHayValor = null; // null: Representa la ausencia intencional de cualquier valor (valor nulo)

let noDefinido = undefined; // undefined: Representa una variable que ha sido declarada pero no tiene un valor asignado

let simboloUnico = Symbol('unico'); // symbol: Representa un valor único que es utilizado para identificadores únicos

let numeroGrande = 2n; // bigint: Representa números enteros muy grandes que no pueden ser representados con el tipo "number"

// Complejos 

// Object: Representa una colección de propiedades clave-valor
let carro = {
    marca: 'Tesla',
    modelo: 'Model S' // Cada propiedad tiene una clave (marca, modelo) y un valor
};

// Array: Representa una lista de elementos ordenados, donde cada elemento tiene un índice
let frutas = ['manzana', 'banana', 'uvas']; // Cada elemento de la lista es un string y el array puede contener múltiples tipos de datos

// Function: Un bloque de código que puede ser ejecutado cuando se llama
function saludar(){
    console.log("Hola!"); // Función simple que imprime un mensaje
}