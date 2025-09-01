// Definimos una clase llamada Persona
class Persona {
    // El constructor inicializa las propiedades del objeto
    constructor(name, age) {
        this.name = name; // Propiedad 'name'
        this.age = age;   // Propiedad 'age'
    }

    // Método saludar: muestra un mensaje en la consola
    saludar() {
        console.log(`Hola, mi nombre es: ${this.name} y tengo ${this.age} años`);
    }
}

// Creamos una nueva instancia (objeto) de la clase Persona
const persona1 = new Persona("Juan Daniel", 27);

// Llamamos al método 'saludar'
persona1.saludar();