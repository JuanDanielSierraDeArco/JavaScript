/* 
Sintaxis del bucle for...of:
for (variable of objetoIterable) {
    // instrucciones a ejecutar
}
*/

// Declaramos un array llamado "canasta" con 4 frutas
let canasta = ['manzana', 'pera', 'papaya', 'patilla'];

// Usamos for...of para recorrer directamente los valores del array
for (fruta of canasta) {
    // En cada iteración, la variable "fruta" contiene un elemento del array
    console.log(fruta); // Mostramos el valor en la consola
}