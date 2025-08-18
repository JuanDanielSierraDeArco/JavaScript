// Métodos que modifican el array (Mutabilidad)

// ---------------------------------------------------------
// push() --> Añade uno o más elementos al final de un array 
// y devuelve la nueva longitud del array
// ---------------------------------------------------------

const countries = ['Colombia', 'Venezuela', 'Peru', 'Brazil']; // Creamos un array inicial con 4 países
console.log(countries); // Mostramos el array original

const numCountries = countries.push('Ecuador', 'Argentina'); 
// Agregamos "Ecuador" y "Argentina" al final del array
// La función push() devuelve el número total de elementos después de la inserción

console.log(numCountries); // Mostramos la nueva longitud del array (6)
console.log(countries);    // Mostramos el array ya modificado con los 2 nuevos países

// ---------------------------------------------------------
// pop() --> Elimina el último elemento de un array 
// y devuelve el elemento eliminado
// ---------------------------------------------------------

const removeCountries = countries.pop(); 
// Elimina el último país del array (en este caso "Argentina")
// y guarda el valor eliminado en la variable removeCountries

console.log(removeCountries); // Mostramos el país eliminado ("Argentina")
console.log(countries);       // Mostramos el array actualizado sin "Argentina"