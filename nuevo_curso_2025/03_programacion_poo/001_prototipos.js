//Programacion Orientada a Objetos  

//clases - modelo a seguir 
/*Objetos: un objeto es una instancia de una clase
-Atributos: es una caracteristica o pripiedad del objeto
(son variables dentro de un objeto).
-Metodos: son las accines que un objeto puede ralizar
(son funciones dentro de un objeto).

prototipos: es un mecanismo por el cual un objeto puede
heredar objeto padre atributos y metodos.

la herencia en java script seda mediante l acadena de prottipos
*/

const animal = {
    nombre: 'Rousen',
    sonar(){
        console.log('Hago sonidos porque estoy vivo');
    },
};

const animal2 = {
    nombre: 'Blanquito',
    sonar(){
        console.log('Hago sonidos porque estoy vivo');
    },
};

console.log(animal);
console.log(animal2);

//funcion constructora v1
// function Animal(nombre, genero){
//     //atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     //metodo
//     this.sonar = function(){
//         console('Hago sonidos porque estoy vivo');
//     };

//     this.saludar = function (){
//         console.log(`Hola soy ${nombre}`);
//     };
// };

//funcion constructora v2 donde asignamos los metodos al prototipo no a la instancia 
function Animal(nombre, genero){
    //atributos
    this.nombre = nombre;
    this.genero = genero;

};

//metodos asignados al prototipo de la funcion
Animal.prototype.sonar = function(){
    console.log('Hago sonidos porque estoy vivo');
};

Animal.prototype.saludar = function (){
    console.log(`Hola soy ${this.nombre}`);
};

const rousen = new Animal('rousen','masculino');
console.log(rousen);
rousen.sonar();
rousen.saludar();

const blanquito = new Animal('Blanquito', 'masculino');
console.log(blanquito);
blanquito.sonar();
blanquito.saludar();
