/*
Sintaxis del bucle do...while:
do {
    // código a ejecutar
} while (condición);
*/

// Inicializamos la variable contador en 0
let contador = 0;

// El bloque dentro de "do" se ejecuta al menos una vez,
// incluso si la condición es falsa desde el principio.
do {
    // Mostramos el valor actual del contador
    console.log(contador);
    // Incrementamos el contador en 1
    contador++;
} while (contador <= 20); // Se repite mientras contador sea menor o igual a 20