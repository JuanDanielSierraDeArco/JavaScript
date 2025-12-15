/* =========================
   CONDICIONALES EN JAVASCRIPT
   ========================= */

/* =========================
   IF / ELSE
   ========================= */

// Variable que representa la edad
let edad = 14;

// Condición simple
// Si la edad es mayor a 17
if (edad > 17) {
    console.log('Eres mayor de edad');
} else {
    // Se ejecuta si la condición es falsa
    console.log('Eres menor de edad');
}

// Uso correcto y más claro
// Mayor o igual a 18
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}

// Operador ternario
// Forma corta de escribir un if/else
console.log('Eres',(edad >= 18) ? 'mayor de edad' : 'menor de edad');

/* =========================
   IF - ELSE IF - ELSE
   ========================= */

/*
Rangos de horas:
0  - 5  → Déjame dormir
6  - 11 → Buenos días
12 - 18 → Buenas tardes
19 - 23 → Buenas noches
*/

let horas = 22;

// Validación por rangos usando operadores lógicos
if (horas >= 0 && horas < 6) {
    console.log('Déjame dormir');
} else if (horas >= 6 && horas < 12) {
    console.log('Buenos días');
} else if (horas >= 12 && horas < 19) {
    console.log('Buenas tardes');
} else if (horas >= 19 && horas <= 23) {
    console.log('Buenas noches');
} else {
    // Se ejecuta si la hora no está en el rango válido
    console.log('Esta hora no existe');
}

/* =========================
   SWITCH / CASE
   ========================= */

/*
Días de la semana:
0 → Domingo
1 → Lunes
2 → Martes
3 → Miércoles
4 → Jueves
5 → Viernes
6 → Sábado
*/

let dia = 6;

console.log('Días de la semana');

// switch evalúa el valor de "dia"
switch (dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miércoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('No es un día válido');
        break;
}

/* =========================
   ALTERNATIVA MODERNA AL SWITCH
   ========================= */

// Objeto como diccionario
const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
};

// Acceso dinámic
