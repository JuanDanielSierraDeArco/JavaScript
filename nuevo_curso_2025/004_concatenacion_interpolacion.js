// ===================================
// Concatenación e interpolación
// ===================================

// Variables base
let nombre = 'Juan Daniel';
let apellido = 'Sierra';

// -----------------------------------
// 1. Concatenación (forma antigua)
// -----------------------------------

// Unimos strings usando el operador +
let saludo = 'Hola mi nombre es' + ' ' + nombre + ' ' + apellido;
console.log(saludo);

// -----------------------------------
// 2. Interpolación (forma moderna)
// Template Strings
// -----------------------------------

// Usamos backticks ` y ${}
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo2);

// -----------------------------------
// 3. HTML en una sola línea
// (poco legible)
// -----------------------------------

let ul = '<ul><li>1</li><li>2</li><li>3</li></ul>';
console.log(ul);

// -----------------------------------
// 4. HTML con Template String
// (MUY recomendado)
// -----------------------------------

let ul2 = `
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
`;
console.log(ul2);

// -----------------------------------
// 5. Concatenación progresiva
// (evitar en código moderno)
// -----------------------------------

let ul3 = '<ul>';
ul3 += '<li>1</li>';
ul3 += '<li>2</li>';
ul3 += '<li>3</li>';
ul3 += '</ul>';

console.log(ul3);
