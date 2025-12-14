// ==============================
// Cadenas de texto (Strings)
// ==============================

// Formas de declarar cadenas
let nombre = 'Juan';                 // Comillas simples
let apellido = "Sierra";             // Comillas dobles
let saludo = new String('Hola soy Juan'); // Objeto String (poco usado)

// Template string (permite saltos de línea)
let lorem = `
Lorem ipsum dolor sit amet,
consectetur adipisicing elit.
`;

// Mostrar valores
console.log(nombre, apellido, saludo);

// ==============================
// Propiedad length
// Devuelve la cantidad de caracteres
// ==============================
console.log(
  nombre.length,
  apellido.length,
  saludo.length);

// ==============================
// Métodos de strings
// ==============================

// Cambiar mayúsculas y minúsculas
console.log(
  nombre.toUpperCase(),      // Convierte a MAYÚSCULAS
  apellido.toLowerCase());     // Convierte a minúsculas


// ==============================
// Búsqueda dentro de cadenas
// ==============================

// includes() devuelve true o false
console.log(lorem.includes("dolor")); // true
console.log(lorem.includes("juan"));  // false

// ==============================
// Limpieza de texto
// ==============================

// trim() elimina espacios en blanco al inicio y final
console.log(lorem.trim());

// ==============================
// Convertir string en arreglo
// ==============================

// split() divide el texto usando un separador
console.log(lorem.split(" "));
