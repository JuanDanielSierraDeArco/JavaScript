// ===============================
// OBJETO CONSOLE
// ===============================

// Limpia completamente la consola del navegador
console.clear();

// Muestra el objeto console completo
console.log(console);

// Muestra un mensaje de error (en rojo)
console.error('Esto es un error de prueba');

// Muestra una advertencia (en amarillo)
console.warn('Esto es una warn');

// Muestra un mensaje informativo
console.info('Esto es un mensaje informativo');

// ===============================
// VARIABLES
// ===============================

let nombre = 'Juan';
let apellido = 'Sierra';
let edad = 27;

// Mostrar variables individualmente
console.log(nombre);
console.log(apellido);
console.log(edad);

// Mostrar varias variables juntas
console.log(nombre, apellido, edad);

// Uso de template strings (forma moderna)
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

// Uso de formato clásico (%s string, %d number)
console.log(
  'Hola mi nombre es %s %s y tengo %d años',
  nombre,
  apellido,
  edad,
);

// ===============================
// OBJETOS GLOBALES DEL NAVEGADOR
// ===============================

// Objeto global del navegador
console.log(window);

// Documento HTML (DOM)
console.log(document);

// Muestra las propiedades del documento como objeto
console.dir(document);

// ===============================
// AGRUPACIÓN DE MENSAJES
// ===============================

// Agrupa mensajes relacionados
console.group('Los cursos de estudio de Juan');
console.log('Curso de JavaScript');
console.log('Curso de Reactjs');
console.groupEnd();

// ===============================
// TABLAS EN CONSOLA
// ===============================

// Muestra el objeto console como tabla ordenada
console.table(Object.entries(console).sort());

// Arrays de ejemplo
const numeros = [1, 2, 3, 4, 5];
const vocales = ['A', 'E', 'I', 'O', 'U'];

// Mostrar arrays en formato tabla
console.table(numeros);
console.table(vocales);

// Objeto de ejemplo
const gato = {
    nombre: 'Blanquito',
    color: 'negro',
    edad: 3,
};

// Mostrar objeto como tabla
console.table(gato);

// ===============================
// MEDIR TIEMPO DE EJECUCIÓN
// ===============================

// Inicia el conteo de tiempo
console.time('Cuanto tarda mi codigo');

const arreglo = Array(1000);

// Llenar el arreglo con un bucle
for (let index = 0; index < arreglo.length; index++) {
    arreglo[index] = index;
    console.log(arreglo[index]);
}

// Finaliza el conteo de tiempo
console.timeEnd('Cuanto tarda mi codigo');

// ===============================
// CONTADOR DE EJECUCIONES
// ===============================

for (let i = 0; i < 100; i++) {
    // Cuenta cuántas veces se ejecuta este bloque
    console.count('codigo for');
    console.log(i);
}

// ===============================
// ASSERT (VALIDACIÓN)
// ===============================

let x = 1;
let y = 2;
let pruebaxy = 'se espera que x sea menor que y';

// Muestra un error solo si la condición es falsa
console.assert(x < y, { x, y, pruebaxy });
