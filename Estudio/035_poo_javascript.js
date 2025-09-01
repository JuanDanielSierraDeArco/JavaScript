/*
estructura de datos

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
}
    metodos()
*/

const persona = {
    nombre: "juan",
    edad: 30,
    direccion: {
        calle: "calle 19",
        ciudad: "Santa Marta",
        pais: "Colombia"
    },

    saludar () {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
} 

persona.saludar()
console.log(persona)

persona.telefono = "555-555-5555"
console.log(persona.telefono)

persona.despedir = () => {
    console.log("Adios")
}
persona.despedir()

delete persona.telefono;
console.log(persona.telefono)