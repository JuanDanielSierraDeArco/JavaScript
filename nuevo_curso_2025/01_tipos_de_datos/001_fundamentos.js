var hola = "Hola mundo";
let hello = "Hello world";
console.log(hola);
console.log(window);

if (true) {
  var a = 3;
}
console.log("========================= var ==================");
var musica = "rock";
console.log(musica);

{
    var musica = "pop";
    console.log("variable musica dentro del boque =>", musica);
}

console.log("variablemusica fuera del bloque =>", musica);


console.log("========================= let ==================");
let musica_let = "rock";
console.log(musica_let);

{
    let musica_let = "pop";
    console.log("variable musica dentro del boque =>", musica_let);
}

console.log("variablemusica fuera del bloque =>", musica_let);