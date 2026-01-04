/*Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) 
devolverá true.*/

// const evaluarNumeros = (numero = undefined) =>{

//     if (numero === undefined){
//         console.warn("No ingresaste ningun numero");
//         return false;
//     };

//     if ( typeof numero !== "number" || numero < 2){
//         console.info(`El valor ${numero} no es valido`);
//         return false;
//     };

//     if ( typeof numero === "number"){
//         let contar =0;
//         for (let i = 1; i <= numero;i++){
//             if (numero % i ===0){
//                 contar++;
//             }
//         }
//         return console.info(`El numero ${numero} es primo? => ${contar === 2}`);
//     };
// };
// const evaluarNumeros = (numero = undefined) => {
//     if(numero === undefined){
//         return console.warn("No ingresaste un numero");
//     };
    
//     if(typeof numero !== "number" ){
//         return console.warn("ingresa un valor valido");
//     };

//     if(numero === 0 || numero === 1){
//         return console.warn(`numero no puede ser ${numero}`);
//     }
    
//     if( Math.sign(numero) ===-1){
//         return console.warn(`numero no puede ser negativo`);
//     }
//     let divisible = false;
//     for(let i = 2; i < numero;i++){
//         if((numero % i) === 0){
//             divisible = true;
//             break;
//         }
//     }
//     return (divisible)?console.log(`El numero ${numero} No es primo`):console.log(`El numero ${numero} es primo`);
// };
// evaluarNumeros();
// const numeros = ["", 0,"a",1,-5,2,3,4,5,6,7,8,9,10,11];
// numeros.forEach(elemento => {
//     evaluarNumeros(elemento);
// });
/**********************************************************************************/
// Programa una función que determine si un número es par o impar, pe. miFuncion(29)
// devolverá Impar.

// const evaluarNumeroPar = (numero = undefined) =>{
//     if(numero === undefined){
//         return console.warn("No ingresaste un numero");
//     }
//     if(typeof numero !== "number"){
//         return console.error("Ingresa un valor valido");
//     }
//     if(numero % 2 === 0){
//         return console.log(`El numero ${numero} es un numero par`);
//     }else{
//         return console.log(`El numero ${numero} es un numero impar`);
//     }
// };

// evaluarNumeroPar();
// const numeros = ["", 0,"a",1,-5,2,3,4,5,6,7,8,9,10,11,29];
// numeros.forEach(elemento => {
//     evaluarNumeroPar(elemento);
// });

// Programa una función para convertir grados Celsius a Fahrenheit y 
// viceversa, pe. miFuncion(0,"C") devolverá 32°F.
console.info("ingresa c para convertir a grados celcios");
console.info("ingresa f para convertir a grados Fahrenheit");
const convertirTemperatura = (valor = undefined, operacion = "") =>{
    if(valor === undefined){
        return console.warn("No ingresaste un valor de temperatura");
    }
    if(operacion === ""){
        return console.warn("No ingresaste un tipo de conversion");
    }
    if(typeof valor !== "number"){
        return console.error(`El ${valor} no es un numero valido`);
    }
    if(typeof operacion !== "string"){
        return console.error(`El ${valor} debe ser un texto`);
    }
    if (operacion.toLocaleLowerCase() !== "c" && operacion.toLocaleLowerCase() !== "f"){
        return console.error("Operación no válida, usa 'c' o 'f'");
    }

    if(operacion.toLocaleLowerCase() === "c"){
        const conversion = (valor - 32)/1.8;
        return console.info(`${valor}F equivalen a ${conversion}C`);
    }
    if(operacion.toLocaleLowerCase() === "f"){
        const conversion = (9/5) * valor + 32;
        return console.info(`${valor}C equivalen a ${conversion}F`);
    }
};
const pruebasTemperatura = [
    [],                 // sin argumentos
    [undefined, ""],     // ambos vacíos
    [undefined, "c"],    // valor indefinido
    [10, ""],            // sin operación
    ["20", "c"],         // valor no numérico
    [20, 5],             // operación no string
    [20, "x"],           // operación inválida
    [20, "C"],           // válido: F → C
    [0, "c"],            // borde: 32F → 0C
    [32, "c"],           // válido: F → C
    [0, "f"],            // válido: C → F
    [-40, "c"],          // caso especial (mismo valor)
    [100, "f"],          // válido: C → F
];
pruebasTemperatura.forEach(elemento => {
    convertirTemperatura(...elemento);
});