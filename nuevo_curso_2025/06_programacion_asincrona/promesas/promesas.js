// ================================
// FUNCIÓN: cuadradoPromise
// ================================
// Recibe un valor y retorna una Promesa
// La promesa resuelve el cuadrado del número después de un tiempo aleatorio
// Si el valor no es un número, rechaza la promesa con un mensaje de error

function cuadradoPromise(value) {

    // Validación: si el valor NO es un número
    // Se retorna directamente una promesa rechazada
    if (typeof value !== "number") {
        return Promise.reject(`El valor "${value}" no es un numero`);
    }

    // Retornamos una nueva Promesa
    return new Promise((resolve, reject) => {

        // Simulamos una operación asíncrona con setTimeout
        setTimeout(() => {

            // Si todo sale bien, resolvemos la promesa
            // Enviamos un objeto con el valor original y su cuadrado
            resolve({
                value,
                result: value * value,
            });

        // Tiempo de espera aleatorio entre 0 y 1000 ms
        }, Math.floor(Math.random() * 1000));
    });
}

// ================================
// CONSUMO DE LA PROMESA
// ================================

// Iniciamos la cadena de promesas
cuadradoPromise(0)
    .then(obj => {
        console.log("Inicia Promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        // Retornamos otra promesa para continuar el encadenamiento
        return cuadradoPromise(1);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);

        // Aquí provocamos un error intencional
        // para comprobar el funcionamiento del catch
        //return cuadradoPromise("3");
        return cuadradoPromise(3);
    })
    .then(obj => {
        // Este bloque NO se ejecutará
        // porque la promesa anterior fue rechazada
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log("Fin de la promesa");
    })

    // Captura cualquier error ocurrido en la cadena
    .catch(err => console.error(err));
