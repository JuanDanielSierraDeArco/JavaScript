// ===============================
// Parámetros REST y operador SPREAD
// ===============================

// ----- PARÁMETROS REST -----
// REST agrupa los argumentos restantes en un array
function sumar(a, b, ...c) {

    // Se inicializa el resultado sumando los dos primeros valores
    let resultado = a + b;

    // Se recorren los valores adicionales almacenados en el array "c"
    c.forEach(function (n) {
        resultado += n; // Se va acumulando la suma
    });

    // Se devuelve el resultado final
    return resultado;
}

// Llamada a la función con varios argumentos
console.log(sumar(5, 8, 4, 6, 8)); // Resultado: 31

// ===============================
// OPERADOR SPREAD
// ===============================

// Primer array
const arreglo1 = [1, 2, 3, 4, 5];

// Segundo array
const arreglo2 = [6, 7, 8, 9, 10];

// SPREAD expande los elementos de los arrays dentro de uno nuevo
const arreglo3 = [...arreglo1, ...arreglo2];

// Se imprimen los arrays originales
console.log(arreglo1, arreglo2);

// Se imprime el nuevo array combinado
console.log(arreglo3);
