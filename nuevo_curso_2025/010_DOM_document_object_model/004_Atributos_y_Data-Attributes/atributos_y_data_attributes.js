//Atributos y Data-Attributes

console.log(document.documentElement.lang);
// Accede a la propiedad lang del <html>

console.log(document.documentElement.getAttribute("lang"));
// Lee el atributo lang directamente del HTML

console.log(document.querySelector(".link-dom").href);
// Propiedad DOM → devuelve URL ABSOLUTA

console.log(document.querySelector(".link-dom").getAttribute("href"));
// Atributo HTML → devuelve exactamente lo que escribiste


document.documentElement.lang = "en";
// Cambia usando propiedad

document.documentElement.setAttribute("lang", "es-MX");
// Cambia directamente el atributo HTML

console.log(document.documentElement.getAttribute("lang"));

const $linkDom = document.querySelector(".link-dom");
$linkDom.setAttribute("target", "_blank");
$linkDom.setAttribute("rel", "noopener");
$linkDom.setAttribute("href","https://youtube.com/@juandanielsierradearco1064");
console.log($linkDom.getAttribute("href"));
console.log($linkDom.hasAttribute("rel")); // true o false
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

console.log($linkDom.hasAttribute("data-description"));
console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDom.getAttribute("data-description"));
$linkDom.dataset.description = "Suscribete a mi canal de youtube";
console.log($linkDom.dataset.description);


//@juandanielsierradearco1064
