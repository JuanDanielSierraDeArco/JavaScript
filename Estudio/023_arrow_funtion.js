// Ejemplo de función tradicional
const greeting = function (name){
    return `Hi, ${name}`;
}

// Arrow function con return explícito
const newGreeting = (name) => {
    return `Hi, ${name}`;
}

// Arrow function con return implícito (cuando es una sola línea)
const newGreetingImplicit = (name) => `Hi, ${name}`

// Arrow function con dos parámetros
const newGreetingImplicittwoParameters = (name, lastName) => `Hi, yo soy ${name} ${lastName}`


// Ejemplo de uso de this en funciones tradicionales vs arrow functions
const fictionalCharacter = {
    name: 'Uncle Ben',

    // Función tradicional → el "this" apunta al objeto fictionalCharacter
    messageWithTraditionalFunction: function (message) {
        console.log(`${this.name} says: ${message}`);
    },

    // Arrow function → el "this" NO apunta al objeto, sino que hereda
    // el this del contexto exterior (en este caso, window/undefined en Node.js)
    messageWithArrowFunction: message => {
        console.log(`${this.name} says: ${message}`);
    }
}

// Llamadas a los métodos
fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility');
fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.');