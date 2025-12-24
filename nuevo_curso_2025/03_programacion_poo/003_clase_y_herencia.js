// ===============================
// CLASES Y HERENCIA EN JAVASCRIPT
// ===============================

// Clase base Animal
// Representa un animal genérico con propiedades y métodos comunes
class Animal{

    // Constructor de la clase Animal
    // Se ejecuta al crear una nueva instancia con "new"
    constructor(nombre, genero){
        this.nombre = nombre; // Nombre del animal
        this.genero = genero; // Género del animal
    }

    // Método sonar
    // Comportamiento común a todos los animales
    sonar(){
        console.log('hago sonidos porque estoy vivo');
    }

    // Método saludar
    // Muestra un mensaje usando las propiedades del objeto
    saludar(){
        console.log(`Hola soy un animal me llamo ${this.nombre} y soy ${this.genero}`);
    }
}

// ===============================
// USO DE LA CLASE ANIMAL
// ===============================

// Se crea una instancia de la clase Animal
const rousen = new Animal('Rousen', 'Masculino');
console.log(rousen);  // Muestra el objeto creado
rousen.sonar();       // Llama al método sonar
rousen.saludar();     // Llama al método saludar

// ===============================
// CLASE PERRO (HEREDA DE ANIMAL)
// ===============================

// La clase Perro hereda de Animal usando "extends"
class Perro extends Animal{

    // Constructor de la clase Perro
    // Recibe los atributos de Animal y uno adicional
    constructor(nombre, genero, tamanio){

        // Llama al constructor de la clase padre (Animal)
        // Es obligatorio llamar a super() antes de usar this
        super(nombre, genero);

        // Propiedad exclusiva de la clase Perro
        this.tamanio = tamanio;
    }

    // Sobrescritura del método sonar
    // Reemplaza el comportamiento heredado de Animal
    sonar(){
        console.log('Soy un perro y mi sonido es un ladrido');
    }

    // Método propio de la clase Perro
    // No existe en la clase Animal
    ladrar(){
        console.log('guau guau guau');
    }
}

// ===============================
// USO DE LA CLASE PERRO
// ===============================

// Se crea una instancia de la clase Perro
const blanquito = new Perro('Blanquito', 'Masculino', 0.90);
console.log(blanquito);  // Muestra el objeto Perro

// Métodos heredados y propios
blanquito.saludar(); // Método heredado de Animal
blanquito.sonar();   // Método sobrescrito en Perro
blanquito.ladrar();  // Método exclusivo de Perro