//ejercicos

//Programa una función para convertir números de base binaria a decimal y
//viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirnumero = (numero = undefined, formato = undefined) => {

    if (numero === undefined){
        return console.warn("Ingresa un numero");
    }
    if (formato === undefined){
        return console.warn("Ingresa un formato base 2 o base 10");
    }
    if(typeof numero !== "number"){
        return console.error(`Ingrese un numero, ${numero} no es un valor correcto`);
    }
    if(typeof formato !== "number"){
        return console.error(`Ingrese un formato valido, ${formato} no es un valor correcto`);
    }
    if(formato !== 10 && formato !== 2){
        return console.error("Ingresa un formato valido debe ser base 2 o base 10");
    }
    if(formato === 2){
        return console.info(`El ${numero} en base ${formato} es igual ${parseInt(numero,2)} en base 10`);
    }
    if(formato === 10){
        return console.info(`El ${numero} en base ${formato} es igual ${(numero.toString(2))} en base 2`);
    }

};

const numerosprueba =[
    [],
    [23],
    ["23",10],
    [100,2],
    [23,4],
    [100,2],
    [101,2],
    [4,10],
];

numerosprueba.forEach((elemento) => {
    convertirnumero(...elemento);
});


/*Programa una función que devuelva el monto final después de aplicar un descuento
a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const descuento = (precio = undefined, porcentaje = 0) => {
    if(precio === undefined){
        return console.warn("No ingresaste el precio");
    };

    if(typeof precio !== "number"){
        return console.error("El tipo de dato para el precio no es valido");
    };

    if (precio === 0){
        return console.error("El precio no debe ser cero");
    }

    if (precio < 0){
        return console.error("El precio debe ser un numero positivo");
    }

    if(typeof porcentaje !== "number"){
        return console.error("El tipo de dato para el porcentaje no es valido");
    };

    if(porcentaje < 0 || porcentaje > 100){
        return console.error("El procentaje debe ser un valor entre 0% y 100%");
    };

    return console.info(`$${precio} - ${porcentaje}% = $${precio - ((precio*porcentaje)/100)}`);
};

const preciosprueba =[
    [],
    [23],
    [0,0],
    [-1000,20],
    ["23",10],
    [1000,"20"],

    [1000,0],
    [1000,20],
    [1000,110],
    [1000,-10],
    [2000,20],
    [2000],

];
preciosprueba.forEach((elemento) => {
    descuento(...elemento);
});

/*Programa una función que dada una fecha válida determine 
cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23))
devolverá 35 años (en 2020)*/

const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined){
        console.warn("no ingresaste una fecha");
        return;
    }

    if (!(fecha instanceof Date)){
        console.error("No ingresaste una fecha valida");
        return;
    }

    let hoyMenosFecha = new Date().getTime() - fecha.getTime();
    let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
    let aniosHumano = Math.floor(hoyMenosFecha/aniosEnMS);
    
    if(Math.sign(aniosHumano) === -1){
        console.info(`Faltan ${Math.abs(aniosHumano)} años para el año ${fecha.getFullYear()}`);
        return Math.abs(aniosHumano);
    }else if (Math.sign(aniosHumano) === 1) {
        console.info(`Han pasado ${Math.abs(aniosHumano)} años desde año ${fecha.getFullYear()}`);
        return Math.abs(aniosHumano);
    }else {
        console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
        return Math.abs(aniosHumano);
    }

};
calcularAnios();//Validar datos vacio;

calcularAnios("hola");//Validar datos vacio;
calcularAnios(new Date());
calcularAnios(new Date(1984,04,23));
calcularAnios(new Date(2084,04,23));
calcularAnios(new Date(1998,04,15));


