// ===============================
// Desestructuración de ARRAYS
// ===============================

// Array de números
const numeros = [1, 2, 3];

// ----- Sin desestructuración -----
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

// Imprime los valores obtenidos manualmente
console.log(uno, dos, tres);

// ----- Con desestructuración -----
const [one, two, three] = numeros;

// Imprime los valores usando desestructuración
console.log(one, two, three);

// ===============================
// Desestructuración de OBJETOS
// ===============================

// Objeto persona
const persona = {
    nombre: 'Juan Daniel',
    apellido: 'Sierra De Arco',
    edad: 27,
};

// Extrae las propiedades del objeto
const { apellido, nombre, edad } = persona;

// Imprime los valores desestructurados
console.log(nombre, apellido, edad);
