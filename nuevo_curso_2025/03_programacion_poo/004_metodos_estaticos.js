// ===============================
// MÉTODOS ESTÁTICOS, GETTERS Y SETTERS
// ===============================

// Clase base Animal
class Animal{
    // Constructor: inicializa las propiedades comunes
    constructor(nombre, genero){
        this.nombre = nombre; // Nombre del animal
        this.genero = genero; // Género del animal
    }

    // Método de instancia
    // Se puede usar solo desde un objeto creado con new
    saludar(){
        console.log('Soy un animal');
    }

    // Método de instancia que usa propiedades del objeto
    sonido(){
        console.log(`Mi nombres es ${this.nombre} y soy ${this.genero}`);
    }
}

// Se crea una instancia de Animal
const rousen = new Animal('Rousen', 'Masculino');
console.log(rousen);   // Muestra el objeto Animal
rousen.saludar();      // Llama al método saludar
rousen.sonido();       // Llama al método sonido

// ===============================
// CLASE GATO (HEREDA DE ANIMAL)
// ===============================

class Gato extends Animal {

    // Constructor de la clase Gato
    constructor(nombre, genero, tamanio){
        // Llama al constructor de la clase padre (Animal)
        super(nombre, genero);

        // Propiedad propia de Gato
        this.tamanio = tamanio;

        // Propiedad privada lógica (controlada por getter y setter)
        this.raza = null;
    }

    // Sobrescritura del método saludar
    // Reemplaza el comportamiento heredado de Animal
    saludar(){
        console.log(`Hola Soy ${this.nombre} y soy un gato`);
    }

    // ===============================
    // MÉTODO ESTÁTICO
    // ===============================
    // Pertenece a la clase, no a las instancias
    // Se puede ejecutar sin crear un objeto
    static queEres(){
        console.log(
            "Los gatos son animales que nos ayudan brindándonos su compañía"
        );
    }

    // ===============================
    // GETTER
    // ===============================
    // Permite obtener el valor de la propiedad raza
    // Se usa como si fuera una propiedad
    get getRaza(){
        return this.raza;
    }

    // ===============================
    // SETTER
    // ===============================
    // Permite modificar el valor de raza de forma controlada
    set setRaza(raza){
        this.raza = raza;
    }
}

// Se crea una instancia de Gato
const blanquito = new Gato('Blanquito', 'Masculino', 0.90);
console.log(blanquito);

// Uso de métodos heredados y propios
blanquito.saludar();    // Método sobrescrito
blanquito.sonido();     // Método heredado de Animal

// Uso del getter
console.log(blanquito.getRaza); // null

// Uso del setter
blanquito.setRaza = 'Negrito';

// Se vuelve a obtener el valor con el getter
console.log(blanquito.getRaza);

// Llamada al método estático (desde la clase)
Gato.queEres();
