// ===============================
// Objetos literales en JavaScript
// ===============================

// Variables base
let nombre = 'Juan Daniel';
let edad = 7;

// ----- Objeto literal (forma tradicional) -----
const perro = {
    nombre: nombre,   // asignación clásica
    edad: edad,
    ladrar: function () {
        console.log('guau guau guau');
    },
};

// Muestra el objeto completo
console.log(perro);

// Llama al método del objeto
perro.ladrar();

// ----- Objeto literal usando SHORTHAND -----
const dog = {
    nombre,           // equivalente a nombre: nombre
    edad,             // equivalente a edad: edad
    raza: 'callejero',

    // Método con sintaxis tradicional
    ladrar: function () {
        console.log('guau guau');
    },

    // Método con sintaxis moderna
    sonido() {
        console.log('grr grr grr');
    },
};

// Muestra el objeto completo
console.log(dog);

// Llamada a métodos
dog.ladrar();
dog.sonido();
