const $figure = document.createElement("figure");
const $imge = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animal");
const $cards = document.querySelector(".cards");
const $figure2 = document.createElement("figure");

$imge.setAttribute("src","https://picsum.photos/id/219/200/200");
$imge.setAttribute("alt","Animal");
$figure.appendChild($imge);
$figcaption.appendChild($figcaptionText);
$figure.appendChild($figcaption);
$figure.classList.add("card");
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://picsum.photos/id/342/200/200" alt="Personas">
<figcaption>Personas</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["primavera", "Verano", "Otoño", "Invierno"];
const $ul = document.createElement("ul");
const $body = document.querySelector("body");
const $text = document.createElement("h3");
$text.style.textAlign = "center";
$text.textContent = "Estaciones del año";
$body.appendChild($text);
$body.appendChild($ul);

estaciones.forEach((el) => {
 const $li = document.createElement("li");
 $li.textContent = el;
 $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"];
const $ul2 = document.createElement("ul");
const $text2 = document.createElement("h3");
$text2.textContent = "continentes del mundo";
$text2.style.textAlign = "center";
$body.appendChild($text2);
$body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach(el => {
  $ul2.innerHTML += `<li>${el}</li>`;
});

const mesesDelAnio = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];
 const $ul3 = document.createElement("ul");
 const $fragment = document.createDocumentFragment();

mesesDelAnio.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});
const $text3 = document.createElement("h3");
$text3.textContent = "Meses del año";
$text3.style.textAlign = "center";
$body.appendChild($text3);
$body.appendChild($ul3);
$ul3.appendChild($fragment);

const cardsElement = [
  {url: "https://picsum.photos/id/0/200/200", tipo: "Tecnologia"},
  {url: "https://picsum.photos/id/237/200/200", tipo: "Animal"},
  {url: "https://picsum.photos/id/122/200/200", tipo: "Arte"},
  {url: "https://picsum.photos/id/192/200/200", tipo: "personas"},
  {url: "https://picsum.photos/id/200/200/200", tipo: "Naturaleza"}
];

const $text4 = document.createElement("h3");
const $section = document.createElement("section");
const $fragment2 = document.createDocumentFragment();
$text4.textContent = "Nueva galeria";
$text4.style.textAlign = "center";
$body.appendChild($text4);
$section.classList.add("cards");
$body.appendChild($section);

cardsElement.forEach((el) =>{
  const $figure2 = document.createElement("figure");
  const $imge = document.createElement("img");
  const $figcation2 = document.createElement("figcaption");

  $imge.setAttribute("src",el.url);
  $imge.setAttribute("alt",el.tipo);
  $figure2.appendChild($imge);
  $figcation2.textContent = el.tipo;
  $figure2.appendChild($figcation2);

  $figure2.classList.add("card");
  $fragment2.appendChild($figure2);

});

$section.appendChild($fragment2);