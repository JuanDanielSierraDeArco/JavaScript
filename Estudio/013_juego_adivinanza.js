// Genera un número aleatorio entero entre 1 y 10
// Math.random() -> decimal entre 0 y 1
// * 10 -> escala a rango 0–10
// + 1 -> mueve el rango a 1–11 (sin llegar a 11)
// Math.floor() -> redondea hacia abajo para obtener un entero
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

// Pide al usuario que ingrese un número y lo convierte a entero con parseInt
// ⚠ Esta línea solo funciona en navegadores, no en Node.js
const numeroJugador = parseInt(prompt('Adivina el numero secreto del 1 al 10'));

// Muestra el número con el que va a jugar el usuario
console.log(`Este es el numero con el que juegas ${numeroJugador}`);

// Compara el número del jugador con el número secreto
if (numeroJugador === numeroSecreto) {
    // Si son iguales → el jugador gana
    console.log(`¡Felicidades! adivinaste el numero secreto ${numeroSecreto}`);
} else if (numeroJugador > numeroSecreto) {
    // Si el número del jugador es mayor → avisa que se pasó
    console.log(`El numero del jugador ${numeroJugador} es mayor que el numero secreto ${numeroSecreto}`);
} else {
    // Si el número del jugador es menor → avisa que le falta
    console.log(`El numero del jugador ${numeroJugador} es menor que el numero secreto ${numeroSecreto}`);
}

