/*
Sintaxis del bucle while:
while (condicion) {
    // instrucciones
}
*/

// Inicializamos una variable contador en 0
let contador = 0;

// Mientras contador sea menor que 10, se repite el bloque
while (contador < 10) {
    // Mostramos el valor actual de contador
    console.log(contador);
    // Incrementamos contador en 1 para evitar un bucle infinito
    contador++;
}