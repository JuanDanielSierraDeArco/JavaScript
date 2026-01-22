// ===============================
// DOM Traversing: recorriendo el DOM
// ===============================

// Selecciona el elemento <section class="cards">
const $cards = document.querySelector(".cards");

// Muestra el elemento completo
console.log($cards);

// -------------------------------
// HIJOS
// -------------------------------

// Devuelve solo los hijos ELEMENTO (HTMLCollection)
console.log($cards.children);

// Accede a un hijo específico por índice (base 0)
// En este caso, el cuarto <figure class="card">
console.log($cards.children[3]);

// -------------------------------
// PADRE
// -------------------------------

// Devuelve el elemento padre (recomendado)
console.log($cards.parentElement);

// Devuelve el nodo padre (puede ser elemento, documento, etc.)
console.log($cards.parentNode);

// -------------------------------
// PRIMER HIJO
// -------------------------------

// Puede devolver un nodo de texto (saltos de línea, espacios)
console.log($cards.firstChild);

// Devuelve el primer hijo ELEMENTO (recomendado)
console.log($cards.firstElementChild);

// -------------------------------
// ÚLTIMO HIJO
// -------------------------------

// Devuelve el último hijo ELEMENTO
console.log($cards.lastElementChild);

// -------------------------------
// HERMANOS
// -------------------------------

// Elemento hermano anterior
console.log($cards.previousElementSibling);

// Elemento hermano siguiente
console.log($cards.nextElementSibling);

// -------------------------------
// ANCESTROS (closest)
// -------------------------------

// Busca el ancestro más cercano que sea un <div>
// Si no existe, devuelve null
console.log($cards.closest("div"));

// Desde un hijo, busca el <section> más cercano
console.log($cards.children[3].closest("section"));
