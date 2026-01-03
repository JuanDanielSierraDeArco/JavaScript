// 9) Programa una función que obtenga un numero aleatorio entre 
// 501 y 600.

const calcularNumero = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
};
console.log(calcularNumero(501, 600));

// 10) Programa una función que reciba un número y evalúe si es 
// capicúa o no (que se lee igual en un sentido que en otro), 
// pe. miFuncion(2002) devolverá true.

const numeroCapicua = (valor) => {
    if (valor === undefined || valor === null){
        return console.warn("Ingresa un numero");
    };

    if(typeof valor !== "number"){
        console.error(`El ${valor} no es un numero`);
    }

    const numeroInverso = valor.toString().split("").reverse().join("");
    return valor.toString() === numeroInverso;

};

const numeros = [0, "123",121, 123, 3003, 1234, 19.88, 212.212];
numeros.forEach(elemento => {
    console.info(`El numero ${elemento}? es capicua => ${numeroCapicua(elemento)}`);
});

// 11) Programa una función que calcule el factorial de un número
// (El factorial de un entero positivo n, se define como el 
// producto de todos los números enteros positivos desde 1 hasta n), 
// pe. miFuncion(5) devolverá 120.

const calcularFactorial = (valor) => {
    if (valor === undefined || valor === null){
        return console.warn(`El ${valor} no es un numero`);
    };

    if(typeof valor !== "number"){
        return console.error(`El ${valor} no es un numero`);
    }

    if(valor <= 0){
        return console.error(`el factorial de ${valor} no esta definido`);
    }


    let factorial = 1;
    for(let i = 1; i <= valor; i++){
        factorial = factorial * i;
    };
    return console.info(factorial);
};
const numersFactoriales = ["", "3", 0,-5,1,2,3,4,5,6,7];
numersFactoriales.forEach(numero =>{
    calcularFactorial(numero);
});