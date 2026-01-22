// ===============================
// Texto y HTML en el DOM
// ===============================

// Selecciona el párrafo con id "que-es"
const $whatIsDom = document.getElementById("que-es");
console.log($whatIsDom);

// Contenido HTML como string
let text = `
  <p>
    El Modelo de Objetos del Documento
    (<b><i>DOM - Document Object Model</i></b>)
    es una API para documentos HTML y XML.
  </p>
  <p>
    Provee una representación estructural del documento,
    permitiendo modificar su contenido y presentación visual
    mediante código JavaScript.
  </p>
  <p>
    <mark>
      El DOM no es parte de la especificación de JavaScript,
      es una API propia de los navegadores.
    </mark>
  </p>
`;

// -------------------------------
// innerText
// -------------------------------
// Inserta SOLO texto visible (no interpreta HTML)
$whatIsDom.innerText = text;

// -------------------------------
// textContent
// -------------------------------
// Inserta texto plano, ignora estilos y HTML
$whatIsDom.textContent = text;

// -------------------------------
// innerHTML
// -------------------------------
// Inserta HTML y lo interpreta correctamente
$whatIsDom.innerHTML = text;

// -------------------------------
// outerHTML
// -------------------------------
// Reemplaza COMPLETAMENTE el nodo por el HTML proporcionado
$whatIsDom.outerHTML = text;
