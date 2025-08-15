/*
Reto:
Usa un bucle do...while para pedir al usuario que escriba una contraseña.
El programa debe repetirse hasta que la contraseña ingresada sea "secreto".
Cuando el usuario acierte, muestra en consola "Acceso concedido".
*/

// Genera un número aleatorio entre 1 y 5
const numeroAleatorio = Math.floor(Math.random() * 5) + 1;

let numeroUsuario; // Declaramos fuera para poder usarla en el while

do {
    // Pedimos al usuario que adivine
    numeroUsuario = parseInt(prompt("Adivina el número (1-5) para ingresar"));

    // Si falla, le avisamos
    if (numeroUsuario !== numeroAleatorio) {
        console.log("Número incorrecto, intenta de nuevo");
    }

} while (numeroAleatorio !== numeroUsuario); // Se repite hasta acertar

// Mensaje cuando acierta
console.log("🎉 Felicidades, buen acierto");