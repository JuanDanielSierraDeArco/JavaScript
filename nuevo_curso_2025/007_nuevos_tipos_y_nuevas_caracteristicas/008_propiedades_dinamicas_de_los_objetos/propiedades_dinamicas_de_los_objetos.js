// PROPIEDADES DINÁMICAS DE LOS OBJETOS
// Permiten crear o acceder a propiedades cuyo nombre
// se calcula en tiempo de ejecución

const usuario = {
    // Se usa un computed property name
    // El nombre de la propiedad se genera dinámicamente
    [`id_${Math.round(Math.random() * 100) + 4}`]: "rousen",
};
console.log(usuario);

// Arreglo con nombres de usuarios
const nombresUsuarios = ['juan', 'daniel', 'ana', 'alicia'];

// Recorremos el arreglo y agregamos propiedades dinámicas al objeto
nombresUsuarios.forEach((nombre, index) => {
    // Se crean propiedades como:
    // id_0, id_1, id_2, id_3
    usuario[`id_${index}`] = nombre;
});
console.log(usuario);