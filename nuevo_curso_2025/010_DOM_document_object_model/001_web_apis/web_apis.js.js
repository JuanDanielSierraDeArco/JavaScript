// WEB APIs
// Las Web APIs son interfaces que el navegador expone
// para interactuar con el DOM, audio, video, almacenamiento, red, etc.

// Objeto global del navegador (solo existe en el browser)
console.log(window);

// Representa el DOM (Document Object Model)
// Permite acceder y manipular el HTML
console.log(document);

// Texto que será reproducido por la API de síntesis de voz
let texto =
  'Si buscas tu tesoro con dedicación y constancia, acabarás encontrando tu tesoro. No te rindas.';

// Función que usa la Web API speechSynthesis
// SpeechSynthesisUtterance representa un mensaje de voz
const hablar = (texto) =>
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// IMPORTANTE:
// Las APIs de audio requieren interacción del usuario
// Por eso se ejecuta dentro de un evento "click"
document.getElementById('hablar').addEventListener('click', () => {
  hablar(texto);
});
