// call, apply, bind
console.log("Call, Apply y Bind");

// En el navegador, this apunta al objeto global (window)
console.log(this);

// Creamos una propiedad en el contexto global
this.lugar = "Contexto Global";

// Función que depende del valor de `this.lugar`
function saludar(saludo = "", alguien = "") {
  console.log(`${saludo} ${alguien}, estamos en el ${this.lugar}`);
}

// Llamada normal → this = contexto global
saludar();

/* ===============================
   Uso de call y apply
=============================== */

const objeto = {
  lugar: "Contexto Objeto",
};

// call → pasa los argumentos separados
saludar.call(objeto, "Hola", "Juan Daniel");

// apply → pasa los argumentos en un arreglo
saludar.apply(objeto, ["Hola", "Juan Daniel"]);

// Si pasamos null o undefined,
// this vuelve al contexto global (en modo no estricto)
saludar.call(null, "Hola", "Juan Daniel");
saludar.apply(null, ["Hola", "Juan Daniel"]);

/* ===============================
   Ejemplo con métodos de objetos
=============================== */

const persona = {
  nombre: "Juan",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

// Llamada normal → this = persona
persona.saludar();

/* ===============================
   Uso de bind
=============================== */

const otraPersona = {
  nombre: "Pedro",

  // bind NO ejecuta la función
  // devuelve una nueva función con this fijo
  saludar: persona.saludar.bind(persona),
};

// Aunque se llame desde otraPersona,
// this sigue siendo persona
otraPersona.saludar();
