/*
Sintaxis del bucle for...in:
for (variable in objeto) {
    // instrucciones a ejecutar
}
*/

// Declaramos un objeto llamado "frutas" con pares clave: valor
// clave = nombre de la fruta, valor = cantidad o precio (en este caso, número)
const frutas = {
    manzana: 500,
    pera: 300,
    guayaba: 700,
    banana: 800,
    aguacate: 500
}

// Recorremos el objeto con for...in
for (fruta in frutas) {
    // "fruta" toma el nombre de cada propiedad del objeto
    // frutas[fruta] accede al valor asociado a esa propiedad
    console.log(`${fruta} : ${frutas[fruta]}`);
}