//Objetos console
console.clear();
console.log(console);
console.error('Esto es un error de prueba');
console.warn('Esto es una warn');
console.info('Esto es un mensaje informativo');

let nombre = 'Juan';
let apellido = 'Sierra';
let edad = 27;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log('Hola mi nombre es %s %s y tengo %d años', nombre, apellido, edad);

console.log(window);
console.log(document);
console.dir(document);

console.group('Los curso de estudio de juan');
console.log('Curso de JavaScript');
console.log('Curso de Reactjs');
console.groupEnd();
console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5];
const vocales = ['A', 'E', 'I', 'O', 'U'];
console.table(numeros);
console.table(vocales);

const gato = {
    nombre: 'Blanquito',
    color: 'negro',
    edad: 3,
};
console.table(gato);
console.time('Cuanto tarda mi codigo');
const arreglo = Array(1000);
for (let index = 0; index < arreglo.length; index++) {
    arreglo[index] = index;
    console.log(arreglo[index]);
}
console.timeEnd('Cuanto tarda mi codigo');

for (let i= 0; i < 100; i++) {
    console.count('codigo for');
    console.log(i);
};

let x = 1;
let y = 2;
let pruebaxy = 'se espera que x sea menor que y';
console.assert(x<y,{x,y,pruebaxy});
