//ejercicios
//18) Programa una función que dada una cadena de texto cuente el número de vocales
// y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const contarLetras = (texto = "") => {

    if(!texto){
        console.warn("No ingresaste un texto");
        return;
    }

    if(typeof texto !== "string"){
        console.error("El dato ingresado no es valido");
        return;
    }
    const textoMinuculas = texto.toLowerCase();
    let vocales = 0;
    let consonantes = 0;

    for (const letra of textoMinuculas) {
        if(/[aeiouáéíóúü]/.test(letra)){
            vocales++;
        };
        if(/[qwrtypsdfghjklzxcvbnmñ]/.test(letra)){
            consonantes++;
        };
    }

    return console.info({
        texto,
        vocales,
        consonantes,
    });
};
contarLetras();
contarLetras(3);
contarLetras("HOLA Mundo");
console.clear();

//19) Programa una función que valide que un texto sea un nombre válido, 
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
    if(!nombre){
        console.warn("No ingresaste un nombre");
        return;
    };
    if(typeof nombre !== "string"){
        console.error(`El valor "${nombre}" no es un dato valido`);
        return;
    }
    let expReg = /^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ\s]+$/g.test(nombre);
    return (expReg)
    ? console.info(`${nombre} es un nombre valido`)
    : console.error(`${nombre} no es un nombre valido`);
};
validarNombre();
validarNombre(3);
validarNombre("Juan Daniel");
validarNombre("Juan Daniel,");
validarNombre("Juan Daniel4");
validarNombre("Juan Daniel");
console.clear();
//20) Programa una función que valide que un texto sea un email válido,
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
    if(!email){
        console.warn("No ingresaste un email");
        return;
    };
    if(typeof email !== "string"){
        console.error(`El dato "${email}" no es un valor valido`);
        return;
    };
    let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    
    return (expReg)
    ? console.info(`${email} es un email valido`)
    : console.error(`${email} no es un email valido`);
};

validarEmail();
validarEmail(45);
validarEmail("jjkdfkgkfjgdfgfkg");
validarEmail("juandaniel");
validarEmail("juandanieljdsda");
validarEmail("juandanieljdsda10");
validarEmail("juandanieljdsda10@");
validarEmail("juandanieljdsda10@gmail");
validarEmail("juandanieljdsda10@gmail.");
validarEmail("juandanieljdsda10@gmail.com");
validarEmail("juandaniel123-jdsda10@gmail.com");
validarEmail("jonmircha@gmail.com");
console.clear();


const validarPatron = (cadena = "", patron = undefined) => {
    if(!cadena){
        console.warn("No ingresaste una cadena");
        return;
    };

    if(typeof cadena !== "string"){
        console.error(`El valor ${cadena} no es tipo de dato valido`);
        return;
    };

    if(patron === undefined){
        console.warn("No ingresaste un patron");
        return;
    };

    if(!(patron instanceof RegExp)){
        console.error(`El dato ${patron} no es un patrón válido`);
        return;
    };

    const expReg = patron.test(cadena);

    return (expReg)
    ? console.info(`la cadena ${cadena} cumple con el patron ingresado`)
    : console.info(`la cadena ${cadena}  no cumple con el patron ingresado`);

    console.log("estoy en lafuncion");



};

validarPatron();
validarPatron(45);
validarPatron("juan daniel");
validarPatron("juan daniel", 78);
validarPatron("juan daniel",/[a-z\s]/g);
validarPatron("juan daniel",/[a-z\s]/g);
validarPatron("juandaniel123-jdsda10@gmail.com",/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
validarPatron("juan Daniel",/^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ\s]+$/g);
validarPatron("juan Daniel5",/^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ\s]+$/g);
validarPatron("juan Daniel",new RegExp(/^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ\s]+$/,"g"));
validarPatron("juan Daniel",new RegExp("^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ\s]+$","g"));
validarPatron("juan Daniel",new RegExp("^[A-Za-zÑñáéíóúüÁÉÍÓÚÜ\\s]+$"));
