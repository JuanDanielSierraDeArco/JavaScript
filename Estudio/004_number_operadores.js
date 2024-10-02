// numeros 

// tipo entero 
const entero = 10;
console.log("Tipo de dato =>", typeof(entero));
console.log("El valor del entero es:", entero);

//tipo decimal
const decimal = 10.56;
console.log("Tipo de dato =>", typeof(decimal));
console.log("El valor del decimal es=>", decimal);

//notacion cientifica
const cientifico = 5e3;
console.log("El valor en notación científica es=>", cientifico);

//Infinitos
const infinito = Infinity;
console.log("El valor de infinito es =>", infinito);
console.log("El valor de 1/0 es =>",1 / 0);

// NaN (Not-a-Number) 
const noEsUnNumero = 0 / 0;
console.log("El resultado de una operación inválida es 0/0=>", noEsUnNumero);

//operaciones aritmeticas suma, resta, multiplicacion y division.
const suma = 4 + 6;
const resta = 4 - 6;
const multiplicacion = 4 * 6;
const division = 4 / 6;

console.log("El resultado de la suma es =>", suma);
console.log("El resultado de la resta es =>", resta);
console.log("El resultado de la multiplicación es =>", multiplicacion);
console.log("El resultado de la división es =>", division);

// modulo y exponenciacion
const modulo = 20 % 6;
const exponenciacion = 2 ** 4;
console.log("El resultado 20 módulo 6 es:", modulo);
console.log("El resultado de la exponenciación de 2^4 es => ", exponenciacion);

//presicion
const resultado = 0.1 + 0.2;
console.log("El resultado de 0.1 + 0.2 es:", resultado);
console.log("El resultado redondeado es:", resultado.toFixed(2));
console.log("¿El resultado es igual a 0.3?", resultado === 0.3); 


//operaciones avanzadas 
const raizCuadrada = Math.sqrt(16);
const valorAbosuluto = Math.abs(-7);
const aleatorio = Math.random();

console.log("La raíz cuadrada de 16 es:", raizCuadrada);
console.log("El valor absoluto de -7 es:", valorAbosuluto);
console.log("Un número aleatorio es:", aleatorio);
