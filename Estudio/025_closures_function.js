// Ejemplo 1: Funciones anidadas y closure básico
function outerFunction () {
    let outerVariable = "I am from outer function"; // Variable local de outerFunction

    function innerFunction () {
        // innerFunction puede acceder a outerVariable porque está dentro de su alcance (scope)
        console.log(outerVariable);
    }

    return innerFunction; // Se retorna la función interna (no su ejecución)
} 

const closureExample = outerFunction(); // closureExample guarda la referencia a innerFunction
closureExample(); // Imprime: "I am from outer function"
// Esto funciona gracias al closure: la función interna recuerda el entorno donde fue creada.


// Ejemplo 2: Contador con closure
function createCounter () {
    let count = 0; // Variable privada, accesible solo dentro de createCounter

    return function () {
        count++; // Incrementa la variable cada vez que se llama
        console.log(count);
    }
}

const counterA = createCounter();
counterA(); // 1
counterA(); // 2

const counterB = createCounter();
counterB(); // 1 (cada closure tiene su propia "caja" de variables)

counterA(); // 3 (continúa desde el último valor de counterA)


// Ejemplo 3: Personalizando funciones con closures
function outer () {
    let message = "Hello, "; // Variable capturada por la función interna

    function inner (name) {
        // inner recuerda el valor de message aunque outer ya terminó
        console.log(message + name);
    }

    return inner;
}

const closureA = outer();
closureA("Juan Daniel Sierra"); // Imprime: "Hello, Juan Daniel Sierra"

const closureB = outer(); // Nueva ejecución → nueva copia de "message"
closureB("Ana Alicia"); // Imprime: "Hello, Ana Alicia"