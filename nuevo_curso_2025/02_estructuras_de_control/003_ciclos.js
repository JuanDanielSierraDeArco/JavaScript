/* =========================
   CICLOS (LOOPS) EN JAVASCRIPT
   ========================= */

/* =========================
   WHILE
   ========================= */

// El ciclo while se ejecuta MIENTRAS la condición sea verdadera
let contador = 0;

while (contador < 10) {
    console.log('while :', contador);
    contador++; // IMPORTANTE: evita bucles infinitos
}

/* =========================
   DO WHILE
   ========================= */

// El do while se ejecuta AL MENOS UNA VEZ,
// aunque la condición sea falsa
let contador2 = 0;

do {
    console.log('Do while :', contador2);
    contador2++;
} while (contador2 < 10);

/* =========================
   FOR CLÁSICO
   ========================= */

// El for es el más usado cuando conocemos
// cuántas veces queremos iterar
for (let index = 0; index < 10; index++) {
    console.log('for :', index);
}

/* =========================
   FOR CON ARRAYS
   ========================= */

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < numeros.length; i++) {
    console.log('for =>', numeros[i]);
}

/* =========================
   FOR IN (OBJETOS)
   ========================= */

const persona = {
    nombre: 'Juan Daniel',
    apellido: 'Sierra De Arco',
    edad: 35,
    pasatiempos: [
        'correr',
        'ejercicio',
        'estudiar',
    ],
    contacto: {
        email: 'juandaniel@algo.com',
        twitter: '@juandaaalgo',
    },
    saludar: function () {
        console.log('Hola');
    },
    decirMiNombre: function () {
        console.log(
            `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
    },
};

// for...in recorre las PROPIEDADES de un objeto
for (const key in persona) {
    console.log('key:', key, '=>', persona[key]);
}

/* =========================
   FOR OF (ARRAYS / STRINGS)
   ========================= */

// for...of recorre los VALORES de un iterable
for (const element of numeros) {
    console.log(element);
}

// También funciona con strings
const letras = 'Hola Juan';

for (const element of letras) {
    console.log(element);
}
/**
 
| Ciclo      | Cuándo usarlo               |
| ---------- | --------------------------- |
| `while`    | No sabes cuántas veces      |
| `do while` | Se ejecuta al menos una vez |
| `for`      | Sabes cuántas veces         |
| `for...in` | Objetos                     |
| `for...of` | Arrays, strings             |

 */