/*
const persona = {
    name: "Juan",
    apellido: "Sierra",
    edad: 27
}
*/
function Persona (name, apellido, edad) {
    this.name = name;
    this.apellido = apellido;
    this.edad = edad;
}


const persona1 = new Persona("Juan", "Sierra", 27)

const persona2 = new Persona("Daniel", "De Arco", 27)

console.log(persona1)
console.log(persona2)

Persona.prototype.telefono = "555-555-5555"


console.log(persona1)
console.log(persona2)

const persona3 = new Persona("Daniel", "De Arco", 27, "555-555-5252")
console.log(persona3)

persona1.nacionalidad = "mexica"
console.log(persona1)


Persona.prototype.saludar = function () {
    console.log(`Hola mi nombre es ${this.name} y tengo ${this.edad}`)
}

persona1.saludar()
persona2.saludar()