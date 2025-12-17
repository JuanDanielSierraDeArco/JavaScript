// ===============================
// Ejemplo de uso de break y continue
// ===============================

// Array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ----- USO DE break CON for CLÁSICO -----
for (let i = 0; i < numeros.length; i++) {
    
    // Si el índice es 5, se detiene completamente el bucle
    if (i === 5) {
        break;
    }

    // Imprime el valor correspondiente al índice actual
    console.log(numeros[i]);
}

console.log("=============================");

// ----- USO DE break CON for...of -----
for (const element of numeros) {
    
    // Si el valor es 5, se sale del bucle
    if (element === 5) {
        break;
    }

    // Imprime el valor actual
    console.log(element);
}

console.log("=============================");

// Nuevo array de números
const numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ----- USO DE continue CON for CLÁSICO -----
for (let i = 0; i < numeros1.length; i++) {
    
    // Si el índice es 5, se salta esta iteración
    if (i === 5) {
        continue;
    }

    // Imprime el valor, excepto cuando i === 5
    console.log(numeros1[i]);
}

console.log("=============================");

// ----- USO DE continue CON for...of -----
for (const element of numeros1) {
    
    // Si el valor es 5, se omite y continúa el bucle
    if (element === 5) {
        continue;
    }

    // Imprime todos los valores excepto el 5
    console.log(element);
}
