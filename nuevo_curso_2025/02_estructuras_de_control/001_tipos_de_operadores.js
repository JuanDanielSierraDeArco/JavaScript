/* =========================
   OPERADORES EN JAVASCRIPT
   ========================= */

/* =========================
   OPERADORES ARITMÉTICOS
   ========================= */

// Suma, resta y multiplicación
// El orden de prioridad es:
// 1. Multiplicación
// 2. Suma y resta
const a = 5 + 5 - 10 * 3;
console.log(a); // -20

// Operador módulo (%)
// Devuelve el residuo de una división
const modulo = 5 % 2;
console.log(modulo); // 1

/* =========================
   OPERADORES RELACIONALES
   ========================= */

const b = 5;
const c = 10;
const d = 7;

// Mayor que (>)
console.log('5 > 10 :', b > c); // false

// Menor que (<)
console.log('10 > 5 :', c > b); // true

console.log('5 < 10 :', b < c); // true
console.log('10 < 5 :', c < b); // false

// Mayor o igual (>=)
console.log('5 >= 10 :', b >= c); // false
console.log('10 >= 5 :', c >= b); // true

// Menor o igual (<=)
console.log('7 < 7 :', d < d);   // false
console.log('7 <= 7 :', d <= d); // true

/* =========================
   OPERADORES DE COMPARACIÓN
   ========================= */

/*
=   → asignación
==  → compara solo el valor
=== → compara valor y tipo de dato (RECOMENDADO)
*/

const e = 8;
const f = 8;
const g = '8';

console.log('8 == 8 :', e == f);      // true
console.log("8 == '8' :", e == g);    // true (convierte tipos)

console.log('8 === 8 :', e === f);    // true
console.log("8 === '8' :", e === g);  // false

/* =========================
   OPERADORES DE ASIGNACIÓN
   ========================= */

let i = 1;
i = i + 2;
console.log(i); // 3

let j = 1;
j += 2;         // j = j + 2
console.log(j); // 3

let h = 9;
h = h - 3;
console.log(h); // 6

let k = 9;
k -= 3;         // k = k - 3
console.log(k); // 6

let l = 9;
l = l / 3;
console.log(l); // 3

let m = 9;
m /= 3;         // m = m / 3
console.log(m); // 3

let n = 9;
n = n * 3;
console.log(n); // 27

let o = 9;
o *= 3;         // o = o * 3
console.log(o); // 27

/* =========================
   OPERADORES UNARIOS
   ========================= */

// Incremento
let p = 1;
p = p + 1;
p += 1;
p++;   // post-incremento
++p;   // pre-incremento
console.log(p); // 5

// Decremento
let q = 5;
q = q - 1;
q -= 1;
q--;   // post-decremento
--q;   // pre-decremento
console.log(q); // 1

/* =========================
   OPERADORES LÓGICOS
   ========================= */

/*
!   → NOT (niega el valor)
||  → OR  (una condición verdadera basta)
&&  → AND (todas deben ser verdaderas)
*/

const r = true;
const s = false;

console.log('r :', r);
console.log('!r :', !r);

console.log(`r:${r} || s:${s} :`, r || s); // true
console.log(`r:${r} && s:${s} :`, r && s); // false