//24) Programa una función que dado un arreglo de números devuelva 
//un objeto con dos arreglos, el primero tendrá los numeros 
// ordenados en forma ascendente y el segundo de forma descendiente, 
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ordenarNumeros = (numeros = undefined)=> {
    if(numeros === undefined){
        console.warn("No ingresaste valores");
        return;
    };
    if(!Array.isArray(numeros)){
        console.error("El valor ingresado no es valido");
        return;
    };
    if(numeros.length === 0){
        console.warn("Ingresaste un array sin elementos");
        return;
    };
    for (const element of numeros) {
        if( typeof element !== "number") {
            console.error(`El valor [${element}] ingresado no es un numero`);
            return;
        }
    }
    const asc = numeros.map(el => el).sort((a,b) => a-b);
    const desc = numeros.map(el => el).sort((a,b) => b-a).reverse();
    const valoresordenados = {
        asc,
        desc,
    };
    console.log(valoresordenados);
    return valoresordenados;
    
};
ordenarNumeros();
ordenarNumeros([]);
ordenarNumeros({});
ordenarNumeros([1,2,3,4,5,6,"4"]);
ordenarNumeros([1,9,8,4,6,5,2,3]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].\

const quitarDuplicados = (elementos = undefined) => {
    if(elementos === undefined){
        console.warn("No ingresaste un arreglo de elementos");
        return;
    }
    if(!(elementos instanceof Array)){
        console.error("El valor ingresado no corresponde a un arreglo");
        return;
    }
    if(elementos.length ===0){
        console.warn("El arreglo ingresado esta vacio");
        return;
    }
    if(elementos.length === 1){
        console.warn("El arreglo ingresado debe tener como minimo 2 elementos");
        return;
    }

    // const valoes = {
    //     original:elementos,
    //     ValoresSinDuplicados: elementos.filter((value,index,self)=> self.indexOf(value) === index),
    // };
    const valoes = {
        original:elementos,
        ValoresSinDuplicados: [...new Set(elementos)],
    };
    return console.log(valoes);
    
};
quitarDuplicados();
quitarDuplicados({});
quitarDuplicados([]);
quitarDuplicados([true]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);
console.clear();
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. 
// promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const calcularPromedio = (valores = undefined) =>{
    if(valores === undefined){
        console.warn("No ingresaste un arreglo");
        return;
    }
    if(!(valores instanceof Array)){
        console.error("El tipo de dato ingresado no es un arreglo");
        return;
    }
    if(valores.length === 0){
        console.warn("Ingresaste un arreglo vacio");
        return;
    }
    for (const element of valores) {
        if (typeof element !== "number"){
            console.error(`El valor [${element}] no es un numero`);
            return;
        }
    }
    return console.info(
        valores.reduce((acumulador,numero,index,arr) =>{
        acumulador += numero;
        if(index === arr.length - 1){
           return `El promedio de ${arr.join(" + ")} es ${acumulador/arr.length}`;
        }else{
            return acumulador;
        };
    }));

};
calcularPromedio();
calcularPromedio(true);
calcularPromedio([]);
calcularPromedio([1,2,3,4,5, true]);
calcularPromedio([9,8,7,6,5,4,3,2,1,0]);