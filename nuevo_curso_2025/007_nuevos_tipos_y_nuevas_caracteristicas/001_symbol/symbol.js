// =======================
// SYMBOL
// =======================

// Con strings, dos valores iguales son iguales
let id = "hola";
let id2 = "hola";
console.log(id === id2); // true

// Con Symbol, aunque la descripción sea igual, SIEMPRE son distintos
let id3 = Symbol("id3");
let id4 = Symbol("id4");
console.log(id3 === id4); // false

// Tipo de dato
console.log(typeof id3, typeof id4); // symbol symbol

// =======================
// SYMBOL COMO PROPIEDAD DE OBJETO
// =======================

// Definimos Symbols para usarlos como claves
const NOMBRE = Symbol("NOMBRE");
const SALUDAR = Symbol("SALUDAR");

// Objeto con una propiedad Symbol
const Persona = {
    [NOMBRE]: "Juan",
};

console.log(Persona);

// Esto NO modifica la propiedad Symbol
// Solo crea una propiedad normal llamada "NOMBRE"
Persona.NOMBRE = "Juan Daniel";
console.log(Persona);

// Acceso correcto a la propiedad Symbol
console.log(Persona[NOMBRE]); // Juan

// =======================
// MÉTODO CON SYMBOL
// =======================

// Agregamos un método usando Symbol
Persona[SALUDAR] = function () {
    console.log("Hola");
};

console.log(Persona);

// Llamada correcta al método Symbol
Persona[SALUDAR]();

// =======================
// ITERACIÓN
// =======================

// for...in NO muestra propiedades Symbol
for (const propiedad in Persona) {
    console.log(propiedad);           // solo claves string
    console.log(Persona[propiedad]);
}

// Para obtener Symbols del objeto
console.log(Object.getOwnPropertySymbols(Persona));
