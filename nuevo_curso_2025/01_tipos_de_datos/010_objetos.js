/* =========================
   OBJETOS EN JAVASCRIPT
   ========================= */

/*
Un objeto es una colección de pares
clave : valor.

- Las variables dentro de un objeto se llaman
  PROPIEDADES o ATRIBUTOS.
- Las funciones dentro de un objeto se llaman
  MÉTODOS.
*/

// Objeto vacío usando la notación literal
const b = {};
console.log(b); // {}

// Objeto vacío usando el constructor Object
// (menos usado actualmente)
const c = new Object();
console.log(c);

/* =========================
   OBJETO PERSONA
   ========================= */

const persona = {

    // Propiedades simples (datos)
    nombre: 'Juan Daniel',
    apellido: 'Sierra De Arco',
    edad: 35,

    // Propiedad que contiene un array
    pasatiempos: [
        'correr',
        'ejercicio',
        'estudiar',
    ],

    // Propiedad que contiene otro objeto (objeto anidado)
    contacto: {
        email: 'juandaniel@algo.com',
        twitter: '@juandaaalgo',
    },

    // Método: función dentro del objeto
    saludar: function () {
        console.log('Hola');
    },

    /*
    Método que usa "this"
    "this" hace referencia al objeto actual (persona)
    */
    decirMiNombre: function () {
        console.log(
            `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    },
};

/* =========================
   ACCESO AL OBJETO
   ========================= */

// Mostrar el objeto completo
console.log(persona);

// Acceder a una propiedad usando corchetes
console.log(persona['nombre']);

// Mostrar la referencia a la función (NO la ejecuta)
console.log(persona.saludar);

// Ejecutar el método
console.log(persona.saludar());

// Acceder a una propiedad de un objeto anidado
console.log(persona.contacto.twitter);

// Ejecutar métodos del objeto
persona.saludar();
persona.decirMiNombre();

/* =========================
   MÉTODOS DEL OBJETO Object
   ========================= */

// Devuelve un arreglo con las claves del objeto
console.log(Object.keys(persona));

// Devuelve un arreglo con los valores del objeto
console.log(Object.values(persona));

// Devuelve un arreglo de pares [clave, valor]
console.log(Object.entries(persona));
