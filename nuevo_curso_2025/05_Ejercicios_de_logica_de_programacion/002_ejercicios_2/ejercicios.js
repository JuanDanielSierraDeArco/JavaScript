// 5) Programa una función que invierta las palabras de una cadena de texto, pe.
// miFuncion("Hola Mundo") devolverá "odnuM aloH".


// const invertirCadena = (texto = "") => {
//     if(!texto) {
//         return console.warn('Ingresa una cadena de texto');
//     }

//     let newText = "";
//     for (let i = texto.length - 1; i >=0;i--){
//         newText += texto[i];
//     }
//     return console.log(newText);
// };
// const invertirCadena = (texto = "") =>
//     (!texto)
//     ?console.warn('Ingresa una cadena de texto')
//     :console.info(texto.split("").reverse().join(""));

// invertirCadena();
// invertirCadena(texto);
//-------------------------------------------------------------------------------------------
// 6) Programa una función para contar el número de veces que se repite 
// una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// const contarPalabras = (texto = "", palabra = "") =>{
//     if(!texto) {
//         return console.warn('Ingresa una cadena de texto');
//     }
//     if(!palabra) {
//         return console.warn('Ingresa una palabra valida');
//     }
    
    // let contar = 0;
    // for (const element of texto.split(" ")) {
    //     if (element === palabra) {
    //         contar++;
    //     }
    // }
//     let i = 0;
//     let contar = 0;
//     while(i !== -1){
//         i = texto.indexOf(palabra, i);
//         console.log(i);

//         if(i !== -1){
//             i++;
//             contar++;
//         }
//     }
//     return contar;

// };
// console.info(contarPalabras());
// console.info(contarPalabras('hola mundo adios mundo'));
// console.info(contarPalabras('hola mundo adios mundo', "mundo"));
//-------------------------------------------------------------------------------------------
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

// const palabraPalindroma = (palabra = "") =>{
//     if(!palabra) {
//         return console.warn('Ingresa una cadena de texto');
//     }
//     palabra = palabra.toLowerCase();
//     let palabraInvertida = palabra.split("").reverse().join("");

//     // for (let i = 0; i < palabra.length; i++){
//     //     if(palabra[i] !== palabraInvertida[i]){
//     //         return false;
//     //     }
//     // }
//     // return true;
//     return (palabra === palabraInvertida);
// };
// palabraPalindroma();
// console.log(palabraPalindroma('Salas'));
// console.log(palabraPalindroma('casa'));

// console.log(palabraPalindroma('ana'));

//-------------------------------------------------------------------------------------------
// 8) Programa una función que elimine cierto patrón de caracteres de un texto 
// dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const remplazotexto = (texto="", valor="")=>{
    // if(!texto) {
    //     return console.warn('Ingresa una cadena de texto');
    // }
    // if(!valor) {
    //     return console.warn('Ingresa una palabra valida');
    // }
    
    // let frase =  texto.replaceAll(valor,"");
    // return (console.info(frase));
    (!texto)
    ?  console.warn('Ingresa una cadena de texto')
    :(!valor)
    ? console.warn('Ingresa un patron')
    : console.info(texto.replace(new RegExp(valor,"ig"),""));
};

remplazotexto();
remplazotexto("xyz");
remplazotexto("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");