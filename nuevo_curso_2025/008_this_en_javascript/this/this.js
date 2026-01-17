// THIS
console.log("This");

// this hace referencia al contexto global (en navegador)
console.log(this);

// El contexto global en navegador es window
console.log(window);

// Comparación: this === window → true (en navegador)
console.log(this === window);

// Se agrega una propiedad al objeto global
this.nombre = "Contexto global";
console.log(this.nombre);

//this apunta al objeto global
function imprimir(){
    console.log(this.nombre);
};
imprimir();

//this apunta al objeto que llama al método
const objec = {
    nombre: "Contexto objeto",
    imprimir: function(){
        console.log(this.nombre);
    },
};
objec.imprimir();

//this se define al momento de la llamada, no al declarar.
const objet2 ={
    nombre: "Contexto objet2",
    imprimir,
};
objet2.imprimir();

//Arrow function NO tiene su propio this
//Hereda el this del contexto donde fue creada → global
const objec3 = {
    nombre: "Contexto objeto 3",
    imprimir: () => {
        console.log(this.nombre);
    },
};

objec3.imprimir();

function Persona(nombre){
    const that = this;
    that.nombre = nombre;
//    this.nombre = nombre;
//return console.log(nombre);
//    return function(){
//      console.log(this.nombre);
//   };
//return () => console.log(this.nombre, 77);
   return function(){
     console.log(that.nombre, 33);
  };
}

let juan = new Persona("Juan");
juan();