//Estilos y variables CCS

// Seleccionamos el enlace con la clase .link-dom
const $linkDom = document.querySelector(".link-dom");

// Muestra SOLO los estilos inline del elemento
console.log($linkDom.style);

// Accede a una propiedad inline específica
console.log($linkDom.style.backgroundColor);

// Devuelve el atributo style como texto
console.log($linkDom.getAttribute("style"));

// Obtiene los estilos FINALES aplicados (CSS + inline + navegador)
console.log(getComputedStyle($linkDom).getPropertyValue("color"));
console.log(getComputedStyle($linkDom).getPropertyValue("background-color"));

// Aplicamos estilos inline desde JavaScript
$linkDom.style.setProperty("text-decoration", "none");
$linkDom.style.textAlign = "center";
$linkDom.style.width = "50%";
$linkDom.style.display = "block";

// Centramos horizontalmente
$linkDom.style.setProperty("margin-left", "auto");
$linkDom.style.setProperty("margin-right", "auto");

// Estilos visuales
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = "1rem";
//getComputedStyle($linkDom).setProperty("display", "block");
//$linkDom.getComputedStyle().setProperty("display", "block");
// $linkDom.getComputedStyle().setProperty("display: block");
// // console.log(getComputedStyle($linkDom));

// Referencias al <html> y <body>
const $html = document.documentElement;
const $body = document.body;

// Leemos las variables CSS definidas en :root
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);

// Aplicamos las variables CSS al body
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// Modificamos una variable CSS desde JS
$html.style.setProperty("--dark-color", "#000");

// Volvemos a leer la variable
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

// Reaplicamos el nuevo valor
$body.style.setProperty("background-color", varDarkColor);