// ===============================
// Manejo de clases CSS con classList
// ===============================

// Selecciona la primera tarjeta (.card) del DOM
const $card1 = document.querySelector(".card");

// Muestra el nodo HTML completo
console.log($card1);

// Devuelve las clases como string (forma antigua, poco recomendada)
console.log($card1.className);

// Devuelve un DOMTokenList (forma moderna y recomendada)
console.log($card1.classList);

// ===============================
// Verificación de clases
// ===============================

// Verifica si la tarjeta tiene la clase rotate-45
console.log($card1.classList.contains("rotate-45"));

// Verifica si la tarjeta tiene la clase base card
console.log($card1.classList.contains("card"));

// ===============================
// Agregar y eliminar clases
// ===============================

// Agrega la clase rotate-45
$card1.classList.add("rotate-45");
console.log($card1.classList);
console.log($card1.classList.contains("rotate-45"));

// Elimina la clase rotate-45
$card1.classList.remove("rotate-45");
console.log($card1.classList);
console.log($card1.classList.contains("rotate-45"));

// ===============================
// Toggle: activa o desactiva la clase
// ===============================

$card1.classList.toggle("rotate-45");
console.log($card1.classList);
console.log($card1.classList.contains("rotate-45"));

$card1.classList.toggle("rotate-45");
console.log($card1.classList);
console.log($card1.classList.contains("rotate-45"));

$card1.classList.toggle("rotate-45");
console.log($card1.classList);
console.log($card1.classList.contains("rotate-45"));

// ===============================
// Reemplazo y clases múltiples
// ===============================

// Reemplaza rotate-45 por rotate-135 si existe
$card1.classList.replace("rotate-45", "rotate-135");
console.log($card1.classList);

// Agrega múltiples clases visuales
$card1.classList.add("opacity-80", "sepia");

// Elimina la clase rotate-135
$card1.classList.remove("rotate-135");
console.log($card1.classList);
