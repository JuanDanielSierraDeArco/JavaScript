
// Se define una clase base llamada "Animal"
class Animal {
    constructor(name, tipo) {
        // Cada animal tiene un nombre y un tipo (ej: perro, gato, etc.)
        this.name = name;
        this.tipo = tipo;
    }

    // Método que muestra un saludo en consola
    saludo() {
        console.log(`El animal ${this.name} te está saludando`);
    }

    // Método genérico para el sonido que hace cualquier animal
    sonido() {
        console.log("El animal emite un sonido");
    }
}

// Se crea una clase "Perro" que hereda de "Animal"
class Perro extends Animal {
    constructor(name, tipo, raza) {
        // super() llama al constructor de la clase padre (Animal)
        super(name, tipo);
        // Además de nombre y tipo, el perro tiene una raza
        this.raza = raza;
    }

    // Sobrescribimos el método sonido() para que el perro ladre
    sonido() {
        console.log(`El perro ${this.name} ladra`);
    }
}
// Se crea un objeto perro1 de la clase Perro
const perro1 = new Perro("Rocky", "Perro", "Dóberman");

// Se llaman a los métodos
perro1.saludo(); // → "El animal Rocky te está saludando"
perro1.sonido(); // → "El perro Rocky ladra"

perro1.nuevoMetodo = function () {
    console.log('nuevo metodo');
}

Perro.prototype.segundoNuevometodo = function () {
    console.log("Hola sgundo metodo saludando");
}

perro1.segundoNuevometodo();