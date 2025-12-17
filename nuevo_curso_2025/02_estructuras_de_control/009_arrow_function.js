// ===============================
// Arrow Functions en JavaScript
// ===============================

// ----- FUNCIÓN TRADICIONAL -----
function saludar() {
    console.log('hola');
}
saludar(); // Llamada a la función

// ----- FUNCIÓN ANÓNIMA -----
const saludar2 = function () {
    console.log('hola 2');
};
saludar2();

// ----- ARROW FUNCTION (una sola línea) -----
const saludar3 = () => console.log('Hola 3');
saludar3();

// ----- ARROW FUNCTION con bloque -----
const saludar4 = () => {
    console.log('Hola 4');
};
saludar4();

// ----- ARROW FUNCTION con parámetros -----
let nombre = 'Juan';

const saludar5 = (nombre) => {
    console.log(`Hola ${nombre}`);
};
saludar5(nombre);

// Paréntesis opcionales con un solo parámetro
const saludar6 = nombre => console.log(`Hola ${nombre}`);
saludar6(nombre);

// ===============================
// Arrow Functions con retorno
// ===============================

// Función tradicional con return
const sumar = function (a, b) {
    return a + b;
};
console.log(sumar(3, 8));

// Arrow function con return implícito (paréntesis)
const sumar3 = (a, b) => (
    a + b
);
console.log(sumar3(7, 7));

// Arrow function más simplificada
const sumar2 = (a, b) => a + b;
console.log(sumar2(9, 8));

// ===============================
// Arrow Function con varias líneas
// ===============================
const variasLineas = (a, b) => {
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
};
variasLineas();

// ===============================
// Arrow Functions en arrays (forEach)
// ===============================
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Callback con función tradicional
numeros.forEach(function (elemento, index) {
    console.log(`El elemento ${elemento} está en la posición ${index}`);
});

// Callback con arrow function (bloque)
numeros.forEach((elemento, index) => {
    console.log(`El ${elemento} está en la posición ${index}`);
});

// Callback con arrow function simplificada
numeros.forEach((elemento, index) =>
    console.log(`El ${elemento} está en la posición ${index}`),
);

// ===============================
// Diferencia de 'this'
// ===============================

// Función tradicional: this apunta al objeto global
function perro() {
    console.log(this);
}
perro();

// Objeto con métodos
const perroM = {
    nombre: 'Rocky',

    // Método normal: this hace referencia al objeto
    ladrar() {
        console.log(this);
    },

    // Arrow function: NO tiene su propio this
    // Hereda el this del contexto superior (global)
    ladrar2: () => {
        console.log(this);
    },
};

// Llamadas a los métodos
perroM.ladrar();  // Muestra el objeto perroM
perroM.ladrar2(); // Muestra window o undefined
