//Conversión de tipos: Type Casting y Coerción

//Explicit Type Casting (Conversión de tipos explícita)


// Convertir string a entero
const string = '42'; // Cadena de texto
const integer = parseInt(string); // Convierte la cadena a un número entero
console.log(integer, typeof integer); // Muestra el valor convertido (42) y su tipo ('number')

// Convertir string a decimal
const stringDecimal = '3.14'; // Cadena de texto con un número decimal
const decimal = parseFloat(stringDecimal); // Convierte la cadena a un número decimal (float)
console.log(decimal, typeof decimal); // Muestra el valor convertido (3.14) y su tipo ('number')

// Convertir de binario a decimal
const binary = '1010'; // Cadena de texto que representa un número binario
const decimalBinary = parseInt(binary, 2); // Convierte la cadena binaria a número decimal, el segundo argumento (2) indica que es binario
console.log(decimalBinary, typeof decimalBinary); // Muestra el valor convertido (10) y su tipo ('number')

//Implicit Type Casting (Conversión de tipos implícita)

// Sumar string con un entero
const sum = '5' + 3; // El número 3 se convierte implícitamente a string y se concatena con '5'
console.log(sum); // Muestra '53' porque se hace una concatenación de cadenas

// Sumar un string con un booleano
const sumaboolenaNumber = '5' + true; // El booleano true se convierte implícitamente a 'true' y se concatena con '5'
console.log(sumaboolenaNumber); // Muestra '5true', concatenación de string

// Sumar un entero con un booleano
const sumaboolenaNumberNumber = 5 + true; // El booleano true se convierte implícitamente a 1 y se suma con 5
console.log(sumaboolenaNumberNumber); // Muestra 6 (5 + 1)

// Sumar un valor nulo con un NaN (Not a Number)
const sumNulls = null + NaN; // null se convierte a 0 y NaN permanece como NaN
console.log(sumNulls); // Muestra NaN, cualquier operación con NaN da como resultado NaN

const stringvalue = '10';
const numvalue = 10;
const booleanvalue = true;
console.log(stringvalue + stringvalue); //concatena
console.log(stringvalue + numvalue); //concatena
console.log(stringvalue + booleanvalue); //concatena
console.log(numvalue + stringvalue); //concatena
console.log(numvalue + numvalue); //suma
console.log(numvalue + booleanvalue); //suma
console.log(booleanvalue + stringvalue); //concatena
console.log(booleanvalue + numvalue); // suma
console.log(booleanvalue + booleanvalue); // suma