// ===============================
// ALERT, CONFIRM Y PROMPT
// ===============================

// window es el objeto global del navegador
// Estos métodos pertenecen a window, aunque se pueden usar sin escribirlo

// console.log(window);

// ===============================
// ALERT
// ===============================

// Muestra una alerta al usuario
// Solo tiene un botón "Aceptar"
// NO devuelve ningún valor (undefined)
let alerta = alert('Hola, esto es una alerta');
console.log(alerta); // undefined

// ===============================
// CONFIRM
// ===============================

// Muestra una ventana de confirmación
// Aceptar  -> true
// Cancelar -> false
let confirmacion = confirm('Hola esto es una confirmacion');
console.log(confirmacion);

// ===============================
// PROMPT
// ===============================

// Muestra una ventana con un campo de texto
// Devuelve:
// - El valor ingresado (string)
// - null si el usuario cancela
let aviso = prompt(
    'Hola es un prompt y le permite al usuario ingresar un valor',
);
console.log(aviso);
