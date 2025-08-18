//Funciones puras

// Side Effects
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulacion de DOM
// 6. obtener la hora actual


// Funcion pura
function sum (a, b) {
    return a + b;
}


//funcion impura
function sum (a, b) {
    console.log(a);
    console.log(b);
    return a + b;
}


let total = 0;

function sunWithSideEfect (a) {
    total += a
    return total;
} 

function square (x) {
    return x*x;
}

function addten (y) {
    return y + 10;
}

const number = 5;
const finalResult = addten(square(number))
console.log(finalResult)