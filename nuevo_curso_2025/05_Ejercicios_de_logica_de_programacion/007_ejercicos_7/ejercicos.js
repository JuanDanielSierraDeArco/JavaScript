//21) Programa una función que dado un array numérico devuelve otro 
//array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const functionCuadrados = (numeros = undefined)=>{
    if(numeros === undefined){
        console.warn("No ingresaste un array de numros");
        return;
    }
    if(!(numeros instanceof Array)){
        console.error(`El valor ingresado no es un Array`);
        return;
    };
    if(numeros.length === 0){
        console.warn(`El array esta vacio`);
        return;
    }

    for (const element of numeros) {
        if (typeof element !== "number" ){
            console.error(`El "${element}" ingresado en el array no es un numero`);
            return;
        }
    }

    const newArray = numeros.map(elemento => elemento * elemento);
    return console.info(`Arreglo original => ${numeros}\nArreglo elevado  => ${newArray}`);
};

functionCuadrados();
functionCuadrados("fgh");
functionCuadrados([]);
functionCuadrados([1,"e",5]);
functionCuadrados([1,[],5]);
functionCuadrados([1,4,5]);
console.clear();


//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de 
//dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const calcularExtremos = (numeros = undefined)=>{
    if(numeros === undefined){
        console.warn("No ingresaste un array");
        return;
    }
    if(!Array.isArray(numeros)){
        console.error("El valor ingresado no es un Array");
        return;
    }
    if(numeros.length === 0){
        console.warn("ingresaste un array vacio");
        return;
    };
    for (const element of numeros) {
        if (typeof element !== "number"){
            console.error(`El valor [${element}] en el array no es un numero`);
            return;
        }
    }
    const numeroMayor = Math.max(...numeros);
    const numeroMenor = Math.min(...numeros);
    const resultado = [];
    resultado.push(numeroMayor);
    resultado.push(numeroMenor);

    return console.log(`El array ${numeros} tiene los numeros mayor y menor\n${resultado}`);
};

calcularExtremos();
calcularExtremos("fgh");
calcularExtremos([]);
calcularExtremos([1,"e",5]);
calcularExtremos([1,[],5]);
calcularExtremos([1, 4, 5, 99, -60]);
console.clear();

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos
//en el primero almacena los números pares y en el segundo los impares,
//pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const ArrayParesInPares = (numeros = undefined) =>{
    if(numeros === undefined){
        console.warn("No ingresaste un array");
        return;
    };
    if(!Array.isArray(numeros)){
        console.error("El tipo de dato ingresasdo no corresponde a un array");
        return;
    };
    if(numeros.length === 0){
        console.warn("Ingresas un Array sin elementos");
        return;
    };
    for (const element of numeros) {
        if (typeof element !== "number"){
            console.error(`El [${element}] no es un numero valido`);
            return;
        };
    };
    let pares = [];
    let impares = [];
    for (const element of numeros) {
        if(element % 2 === 0){
            pares.push(element);
        }else{
            impares.push(element);
        }
    }
    const Valores = {
        pares,
        impares,
    };
    return console.info(Valores);
};

ArrayParesInPares();
ArrayParesInPares("fgh");
ArrayParesInPares([]);
ArrayParesInPares([1,"e",5]);
ArrayParesInPares([1,[],5]);
ArrayParesInPares([1,2,3,4,5,6,7,8,9,0]);