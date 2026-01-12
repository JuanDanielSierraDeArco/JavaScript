/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
Todos los datos del objeto son obligatorios.
--Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
--Valida que el título no rebase los 100 caracteres.
--Valida que el director no rebase los 50 caracteres.
--Valida que el año de estreno sea un número entero de 4 dígitos.
--Valida que el país o paises sea introducidos en forma de arreglo.
--Valida que los géneros sean introducidos en forma de arreglo.
--Valida que los géneros introducidos esten dentro de los géneros aceptados*.
--Crea un método estático que devuelva los géneros aceptados*. 
--Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
--Crea un método que devuelva toda la ficha técnica de la película.
--Apartir de un arreglo con la información de 3 películas genera 3 
--instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

    Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula{
    constructor({id, titulo, director, estreno, pais, genero, calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion;

        this.validarMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarAnio(estreno);
        this.validarPais(pais);
        this.validarGeneros(genero);
        this.ValidarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film Noir",
        "Game-Show","History","Horror","Musical","Music","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show",
        "Thriller","War","Western"];
    };

    static generosAceptados(){
        console.info(`Los generos aceptados son ${Pelicula.listaGeneros.join(", ")}`);
        return;
    };

    validarCadena(propiedad, valor){
        if(!valor){
            return console.warn(`${propiedad} "${valor}" esta vacio`);
        }
        if(typeof valor !== "string"){
            return console.error(`${propiedad} "${valor}" ingresado. NO es una cadena de texto`);
        }
        return true;
    }
    validarLogitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud){
            console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud})`);
            return;
        }
        return true;
    };

    validarNumero(propiedad, valor){
        if(!valor){
            console.warn(`${propiedad} "${valor} esta vacio"`);
            return;
        };
        if(typeof valor !== "number"){
            console.error(`${propiedad} "${valor}" ingresasdo, No es un numero`);
            return;
        };
        return true;
    };

    validarArreglo(propiedad, valor){
        if(!valor){
            console.warn(`${propiedad} "${valor} esta vacio"`);
            return;
        };
        if(!Array.isArray(valor)){
            console.error(`${propiedad} "${valor}" Ingresado, No es un arreglo`);
            return;
        };
        if(valor.length === 0){
            console.error(`${propiedad} "${valor}" no tiene datos`);
            return;
        };
        for (const element of valor) {
            if(typeof element !== "string"){
                console.error(`El valor "${element}" ingresado, No es una cadena de texto`);
                return;
            }
        };
        return true;
    };

    validarMDB(id){
        if(this.validarCadena("IMDB id",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                console.error(`IMDB id "${id}" no es valido, debe tener 9 caracteres los 2 primeros letras, los 7 restantes numeros`);
                return;
            }
        }
    }
    validarTitulo(titulo){
        if(this.validarCadena("Titulo",titulo)){
            this.validarLogitudCadena("Titulo",titulo,100);
        };
    };
    validarDirector(director){
        if(this.validarCadena("Director",director)){
            this.validarLogitudCadena("Director",director,50);
        };
    };

    validarAnio(estreno){
        if(this.validarNumero("Año de estreno", estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))){
                console.error(`Año de estreno "${estreno} no es valido, debe ser un numero de cuatro digitos"`);
                return;
            };
        };
    };

    validarPais(pais){
        this.validarArreglo("Pais de Creación", pais);
    };

    validarGeneros(genero){
        if(this.validarArreglo("Los generos", genero)){
            for (const Elementos of genero) {
                if(!(Pelicula.listaGeneros.includes(Elementos))){
                    console.error(`Género(s) incorrectos "${genero.join(", ")}"`);
                    Pelicula.generosAceptados();
                };
            };
        };
    };

    ValidarCalificacion(calificacion){
        if(this.validarNumero("Calificación", calificacion)){
            return (calificacion < 0 || calificacion > 10)
            ?console.error("La calificacion tiene que estar en un rango entre 0 y 10")
            :this.calificacion = calificacion.toFixed(1);
        };
    };
    fichaTecnica(){
        console.info(`Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}\nGéneros: ${this.genero.join(",")}"\nCalificacíon: ${this.calificacion}\nMDDB Id: "${this.id}"`);
    };
}
// // Pelicula.generosAceptados();
// const pelicula1 = new Pelicula({
//     id: "tt9999999",
//     titulo:"La vida del gran programador",
//     director:"Juan Daniel Sierra De Arco",
//     estreno:2025,
//     pais: ["Colombia", "Mexico"],
//     genero:["History","Biography"],
//     calificacion: 9.567,
// });
// pelicula1.fichaTecnica();
const misPelis = [
  {
    id: "tt9999999",
    titulo: "La vida del gran programador",
    director: "Juan Daniel Sierra De Arco",
    estreno: 2025,
    pais: ["Colombia", "Mexico"],
    genero: ["History", "Biography"],
    calificacion: 9.567,
  },
  {
    id: "tt8888888",
    titulo: "Código sin fronteras",
    director: "María Fernanda López",
    estreno: 2023,
    pais: ["España", "Argentina"],
    genero: ["Drama", "Sci-Fi"],
    calificacion: 8.9,
  },
  {
    id: "tt7777777",
    titulo: "El algoritmo perdido",
    director: "Carlos Andrés Rivera",
    estreno: 2024,
    pais: ["Chile", "Perú"],
    genero: ["Mystery", "Sci-Fi"],
    calificacion: 9.1,
  },
];
misPelis.forEach(element => new Pelicula(element).fichaTecnica());