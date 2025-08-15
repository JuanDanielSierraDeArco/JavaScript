/*
Creamos un objeto con países (clave) y sus capitales (valor)
Usamos comillas para valores de tipo texto
*/
const capitales = {
    españa: "Madrid",
    mexico: "Ciudad de México",
    japon: "Tokio",
    colombia: "Bogotá"
};

// Recorremos el objeto con for...in
for (let pais in capitales) {
    // pais es la clave (nombre del país)
    // capitales[pais] es el valor (nombre de la capital)
    console.log(`${pais} --> ${capitales[pais]}`);
}