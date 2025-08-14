/*
Estructura switch

switch (expresion) {
    case valor1:
        // Código a ejecutar si expresion === valor1
        break;
    case valor2:
        // Código a ejecutar si expresion === valor2
        break;
    default:
        // Código a ejecutar si expresion no coincide con ningún valor
}
*/

let expre = 'melocoton';

switch (expre) {
    case 'yuca':
        console.log('la yuca tiene un valor de $1500 el kilo');
        break;
    
    case 'papa':
        console.log('La papa tiene un valor de $3000 el kilo');
        break;
    case 'papaya':
    case 'mango':
        console.log('la papaya y el mango tienel un valor de $2500 el kilo');
        break
    default:
    console.log(`Lo sentimos, no tenemos ${expre} disponible hasta la otra semana`);
}

console.log('los prouctos llegan los dias lunes');