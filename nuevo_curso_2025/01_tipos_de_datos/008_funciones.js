// =====================================
// Funciones en JavaScript
// =====================================

/*
Una función es un bloque de código reutilizable
que puede ejecutarse en cualquier momento.

✔ Puede recibir parámetros
✔ Puede devolver un valor
✔ En JavaScript las funciones son ciudadanos
  de primera clase (pueden asignarse a variables,
  pasarse como argumentos y retornarse)
*/

// -------------------------------------
// 1. Función declarada (sin parámetros)
// -------------------------------------

function estaEsUnaFuncion() {
  console.log('Uno');
  console.log('Dos');
  console.log('Tres');
}

// Invocación
estaEsUnaFuncion();

// -------------------------------------
// 2. Función que retorna un valor
// -------------------------------------

function estaEsUnaFuncionQueDevuelveValor() {
  console.log('Uno');
  console.log('Dos');
  console.log('Tres');
  return 'La función ha retornado esto';
}

// Guardamos el valor retornado
let valorDeFuncion = estaEsUnaFuncionQueDevuelveValor();
console.log(valorDeFuncion);

// -------------------------------------
// 3. Función con parámetros y valores
//    por defecto
// -------------------------------------

function saludar(nombre = 'Desconocido', edad = 0) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

// Invocaciones
saludar('Juan', 27);
saludar(); // usa valores por defecto

// -------------------------------------
// 4. Hoisting en funciones declaradas
// -------------------------------------

funcionDeclarada();

function funcionDeclarada() {
  console.log(`
Esto es una función declarada.
Puede ejecutarse antes de su definición
gracias al hoisting.
`);
}

// -------------------------------------
// 5. Función expresada (anónima)
// -------------------------------------

const funcionExpresada = function () {
  console.log(`
Esto es una función expresada.
Se asigna a una variable y NO puede
ejecutarse antes de su definición.
`);
};

// Invocación (solo después de definirla)
funcionExpresada();
