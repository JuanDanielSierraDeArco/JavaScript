
//Programa una función que cuente el número
// de caracteres de una cadena de texto, pe.
// miFuncion("Hola Mundo") devolverá 10.
// const texto = prompt('Ingrese una texto');

// function contarCaracteres(texto = ""){
//     if(!texto){
//         console.warn('No ingresaste ningun valor');

//     }else {
//         console.info(`La cadena ${texto} tiene ${texto.length} carateres`);
//     }
// }

// const contarCaracteres = (texto = "") =>
//     (!texto)
//     ?console.warn('No ingresaste ningun valor')
//     :console.info(`La cadena "${texto}" tiene ${texto.length} carateres`);
// contarCaracteres(texto);

//Programa una función que te devuelva el texto recortado según el número de
//caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// const texto= 'Hola mundo';
// const longitud= 5;

// const recortarTexto = (texto = "", longitud = undefined) => (
//     (!texto)
//     ?console.warn('No ingresaste ningun valor')
//     :(longitud === undefined)
//         ?console.warn('No ingresaste una cantidad a mostrar')
//         :console.info(texto.slice(0,longitud))
// );
// recortarTexto();
// recortarTexto(texto);
// recortarTexto(texto,longitud);

//Programa una función que dada una String te devuelva un Array
//de textos separados por cierto caracter, pe. miFuncion('hola
//que tal', ' ') devolverá ['hola', 'que', 'tal'].
// const texto = "Hola mundo con espacio";

// const separadorDeTexto = (texto = "", seprador = undefined) =>
//     (!texto)
//     ?console.warn('No ingresaste texto')
//     :(seprador === undefined)
//         ?console.warn('No ingesaste un separdor')
//         :console.log(texto.split(seprador));

// separadorDeTexto(texto);
// separadorDeTexto();
// separadorDeTexto(texto, "a");
// separadorDeTexto(texto, " ");
// separadorDeTexto(texto, "m");

//Programa una función que repita un texto X veces,
//pe. miFuncion('Hola Mundo', 3) devolverá Hola 
//Mundo Hola Mundo Hola Mundo.

const multiplicadorTexto= (texto = '', multiplicador = undefined) =>{
    if(!texto) return console.warn("ingresa un texto valido");
    if(multiplicador === undefined) return console.warn("ingresa un numero valido");
    if(multiplicador === 0) return console.error("El repeticiones no puede ser 0");
    if(Math.sign(multiplicador) === -1) return console.error("El numero de repeticiones no puede ser negativo");
    
    for(let i = 1; i <= multiplicador; i++){
        console.info(`${texto} ${i}`);
    }

    // return console.info(texto.repeat(multiplicador));
};





    // (!texto)
    // ?console.warn()
    // :(multiplicador === undefined)
    //     ?console.warn("ingresa un multiplicador valido")
    //     :console.info();

multiplicadorTexto();
multiplicadorTexto("hola mundo");
multiplicadorTexto("hola mundo",0);
multiplicadorTexto("hola mundo",-1);
multiplicadorTexto("hola mundo",8);