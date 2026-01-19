//Nodos, Elementos y Selectores

// Selecciona TODOS los <li>
// Retorna un HTMLCollection (NO es array)
console.log(document.getElementsByTagName("li"));

// Selecciona elementos por clase
// También retorna HTMLCollection
console.log(document.getElementsByClassName("card"));

// Selecciona elementos por atributo name=""
console.log(document.getElementsByName("nombre"));

// Selecciona UN elemento por id
console.log(document.getElementById("menu"));

// Selector CSS (#menu)
console.log(document.querySelector("#menu"));

// Retorna SOLO el primer <a> que encuentre
console.log(document.querySelector("a"));

document.querySelectorAll("[name='nombre']");

// Selecciona todos los <a> dentro de #menu
console.log(document.querySelectorAll("#menu a").length);

// Accede al tercer elemento con clase .card (index inicia en 0)
console.log(document.querySelectorAll(".card")[2]);

document.querySelectorAll("#menu a").forEach(el => console.log(el));
