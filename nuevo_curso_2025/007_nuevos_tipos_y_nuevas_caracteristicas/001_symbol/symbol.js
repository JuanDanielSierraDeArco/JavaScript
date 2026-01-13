//Symbol

let id = "hola";
let id2 = "hola";
console.log(id === id2);

let id3 = Symbol("id3");
let id4 = Symbol("id4");
console.log(id3 === id4);

// tipos de datos
console.log(typeof id3, typeof id4);

//agregando symbol aun objeto

const NOMBRE = Symbol("NOMBRE");
const SALUDAR = Symbol("SALUDAR");
const Persona = {
    [NOMBRE]:"Juan",
};

console.log(Persona);
Persona.NOMBRE = "Juan Daniel";
console.log(Persona);
console.log(Persona[NOMBRE]);

Persona[SALUDAR] = function(){
    console.log(`hola`);
};
console.log(Persona);
Persona[SALUDAR]();

for (const propiedad in Persona) {
    console.log(propiedad);
    console.log(Persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(Persona));
