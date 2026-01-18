// Muestra un separador en consola para organizar la salida
console.log("********** Elementos del Documento ***************");

// window.document y document son exactamente lo mismo
// window es el objeto global del navegador
console.log(window.document);

// Forma corta (la más usada)
console.log(document);

// Accede al <head> del documento
// Aquí viven: <meta>, <title>, <link>, <script>, etc.
console.log(document.head);

// Accede al <body>
// Aquí está todo el contenido visible de la página
console.log(document.body);

// Retorna el elemento raíz del documento: <html>
console.log(document.documentElement);

// Retorna el tipo de documento (<!DOCTYPE html>)
console.log(document.doctype);

// Retorna la codificación de caracteres del documento (UTF-8 normalmente)
console.log(document.charset);

// Retorna el contenido de la etiqueta <title>
console.log(document.title);

// Colección HTML de todos los enlaces <a>
console.log(document.links);

// Colección HTML de todas las imágenes <img>
console.log(document.images);

// Colección HTML de todos los formularios <form>
console.log(document.forms);

// Lista de hojas de estilo aplicadas al documento
console.log(document.styleSheets);

// Lista de todos los <script> cargados en la página
console.log(document.scripts);

// Ejecuta una función después de 2 segundos
setTimeout(() => {
  // Obtiene el texto seleccionado por el usuario en la página
  console.log(document.getSelection().toString());
}, 2000);

// Escribe directamente HTML en el documento
// ⚠️ OJO: esto puede sobreescribir todo el DOM si se usa mal
document.write("<h2>Hola Mundo desde el Dom</h2>");
