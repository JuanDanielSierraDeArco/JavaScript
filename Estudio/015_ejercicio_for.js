/* 
Crea un array con los nombres de cinco ciudades y usa un bucle for para mostrarlas en consola, pero esta vez indicando también su número de orden
*/

// Creamos un array con 5 ciudades
const ciudades = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Berlin']

// recorremos el array con un bucle for
for (let i = 0; i < ciudades.length; i++) {
    console.log((i+1) + '. ' + ciudades[i])
}