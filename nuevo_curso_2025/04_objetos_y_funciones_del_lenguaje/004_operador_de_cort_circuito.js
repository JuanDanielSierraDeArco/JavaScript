// ===============================
// OPERADOR DE CORTO CIRCUITO
// ===============================

/*
CORTO CIRCUITO OR (||)
Si el valor de la izquierda es TRUE (truthy),
ese valor se devuelve y NO se evalúa la derecha.
*/

/*
CORTO CIRCUITO AND (&&)
Si el valor de la izquierda es FALSE (falsy),
ese valor se devuelve y NO se evalúa la derecha.
*/

// ===============================
// EJEMPLO PRÁCTICO
// ===============================

function saludar(nombre){
    // Si nombre es falsy, se asigna "Desconocido"
    nombre = nombre || "Desconocido";
    console.log(`hola ${nombre}`);
}

saludar('Juan'); // hola Juan
saludar();       // hola Desconocido

// ===============================
// CORTO CIRCUITO OR (||)
// ===============================

console.log('--------Corto circuito OR----------');

// Devuelve el primer valor truthy
console.log("cadena" || "Valor de la derecha");     // "cadena"
console.log(19 || "Valor de la derecha");           // 19
console.log(true || "Valor de la derecha");         // true
console.log([] || "Valor de la derecha");           // []
console.log(null || "Valor de la derecha");         // "Valor de la derecha"
console.log(false || "Valor de la derecha");        // "Valor de la derecha"
console.log(undefined || "Valor de la derecha");    // "Valor de la derecha"
console.log("" || "Valor de la derecha");           // "Valor de la derecha"
console.log(-2 || "Valor de la derecha");           // -2
console.log(0 || "Valor de la derecha");            // "Valor de la derecha"

// ===============================
// CORTO CIRCUITO AND (&&)
// ===============================

console.log('--------Corto circuito AND----------');

// Devuelve el primer valor falsy o el último si todos son truthy
console.log("cadena" && "Valor de la derecha");     // "Valor de la derecha"
console.log(19 && "Valor de la derecha");           // "Valor de la derecha"
console.log(true && "Valor de la derecha");         // "Valor de la derecha"
console.log([] && "Valor de la derecha");           // "Valor de la derecha"
console.log(null && "Valor de la derecha");         // null
console.log(false && "Valor de la derecha");        // false
console.log(undefined && "Valor de la derecha");    // undefined
console.log("" && "Valor de la derecha");           // ""
console.log(-2 && "Valor de la derecha");           // "Valor de la derecha"
console.log(0 && "Valor de la derecha");            // 0
