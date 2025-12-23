// ===============================
// HERENCIA PROTOTIPAL
// ===============================

// Función constructora Animal
// Define las propiedades básicas que tendrán todos los animales
function Animal(nombre, genero){
    this.nombre = nombre;   // Nombre del animal
    this.genero = genero;   // Género del animal
};

// Método sonido agregado al prototipo de Animal
// Todos los animales podrán usar este método
Animal.prototype.sonido = function (){
    console.log('Hago sonidos porque estoy vivo');
};

// Método saludar agregado al prototipo de Animal
// Usa las propiedades del objeto que lo invoque
Animal.prototype.saludar = function (){
    console.log(`Hola soy ${this.nombre} y soy de genero ${this.genero}`);
};

// Se crea una instancia de Animal
const rousen = new Animal('rousen', 'masculino');
console.log(rousen);   // Muestra el objeto Animal creado
rousen.saludar();      // Llama al método heredado del prototipo

// ===============================
// HERENCIA PROTOTÍPICA CON PERRO
// ===============================

// Función constructora Perro
// Recibe los mismos parámetros que Animal más uno adicional
function Perro(nombre, genero, tamanio){
    // Se guarda una referencia al constructor Animal
    this.super = Animal;

    // Se llama al constructor padre para inicializar
    // nombre y genero dentro del objeto Perro
    this.super(nombre, genero);

    // Propiedad propia de Perro
    this.tamano = tamanio;
};

// Se establece la herencia
// Perro hereda las propiedades y métodos de Animal
Perro.prototype = new Animal();

// Se corrige la referencia del constructor
// Esto es importante para mantener coherencia
Perro.prototype.constructor = Perro;

// Sobrescritura del método sonido
// Este método reemplaza al del padre (Animal)
Perro.prototype.sonido = function(){
    console.log('El sonido de un perro es un ladrido');
};

// Método exclusivo de Perro
// No existe en Animal
Perro.prototype.ladrar = function(){
    console.log('gua gua gua gua');
};

// Se crea una instancia de Perro
const firulais = new Perro('Firulasi', 'Masculino', 1.45);
console.log(firulais);

// Métodos heredados y propios
firulais.saludar(); // Método heredado de Animal
firulais.sonido();  // Método sobrescrito en Perro
firulais.ladrar();  // Método propio de Perro

// ===============================
// NUEVA INSTANCIA DE ANIMAL
// ===============================

// Se crea otro Animal para comprobar que
// no se ve afectado por los cambios en Perro
const gato = new Animal('gato', 'Masculino');
gato.sonido();   // Usa el método original de Animal
gato.saludar();  // Saludo desde Animal
