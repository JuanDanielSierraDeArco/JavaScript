// Definición de cadenas (strings)
let string1 = 'Hola, Mundo'; // Cadena básica usando comillas simples
let string2 = "JavaScript es genial"; // Cadena básica usando comillas dobles
let string3 = `${string1} feliz :)`; // Template literal que concatena string1 y un texto adicional
let string4 = string1 + ' ' + string2; // Concatenación de dos cadenas usando el operador '+'

console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

// Manipulación de la cadena 'frase'
let frase = 'JavaScript es Extremadamente genial'; // Definición de una nueva cadena

// Método .length: Devuelve la longitud de la cadena (número de caracteres)
console.log('La frase tiene :', frase.length);

// Método .toLowerCase(): Convierte todos los caracteres de la cadena a minúsculas
console.log('La frase sin mayúsculas es :', frase.toLowerCase());

// Método .toUpperCase(): Convierte todos los caracteres de la cadena a mayúsculas
console.log('La frase en mayúsculas es :', frase.toLocaleUpperCase());

// Método .substring(): Extrae una porción de la cadena desde el índice 0 al 10
console.log('Una parte de la frase es :', frase.substring(0, 10));

// Método .indexOf(): Busca la posición en la cadena donde aparece la palabra 'genial'
console.log(frase.indexOf('genial'));

// Método .includes(): Verifica si la palabra 'genial' está en la cadena
console.log(frase.includes('genial'));

// Método .replace(): Reemplaza 'genial' por 'fantástico' en la cadena
console.log(frase.replace('genial', 'fantástico'));

// Método .split(): Divide la cadena en un array de palabras separadas por espacios
console.log(frase.split(' '));