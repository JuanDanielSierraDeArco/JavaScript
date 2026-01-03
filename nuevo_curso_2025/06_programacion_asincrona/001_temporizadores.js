// Temporizadores

console.log("Inicio");

// setTimeout se ejecuta UNA SOLA VEZ
// Recibe una función callback que se ejecutará
// después del tiempo indicado (en milisegundos)
const temporizador = setTimeout(() => {
    console.log("Hola desde un setTimeout");
}, 1500);

// clearTimeout cancela la ejecución del setTimeout
// Si se ejecuta antes de que pase el tiempo,
// el callback nunca se ejecutará
clearTimeout(temporizador);


// setInterval se ejecuta de forma repetida
// cada cierto intervalo de tiempo (en milisegundos)
// hasta que se cancele con clearInterval
const temporizadorInterval = setInterval(() => {
    const tiempo = new Date().toLocaleTimeString();
    console.log(tiempo);
}, 1000);

// clearInterval cancela la ejecución del setInterval
// En este caso se cancela inmediatamente,
// por eso no llega a mostrarse nada
clearInterval(temporizadorInterval);
