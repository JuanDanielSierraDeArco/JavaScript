// expresiones regulares

/*Expresiones regulares

Son una secuencia de caracteres que forman un patron
de busqueda, principalmente utilizada para la busqueda
de patrones de cadenas de caracteres*/

//usando la funcion constructora
let cadena = `Lorem ipsum dolor sit amet consectetur
adipiscing elit lobortis pulvinar facilisis augue venenatis
enim fusce, penatibus nam sagittis faucibus purus imperdiet
dis placerat duis vivamus eros tempor elementum. Viverra
natoque lacinia lectus facilisi ante quisque malesuada
aliquet, primis habitasse ut tortor litora condimentum
suscipit per justo, phasellus sollicitudin sed nam sem 
interdum turpis. Tempor himenaeos natoque cubilia habitasse
pellentesque fames felis 7 venenatis placerat praesent, 
convallis conubia laoreet sed aliquet condimentum neque 
integer donec est, ad quisque proin eget eu ante dictum 
mattis dui.`;

let expReg = new RegExp("Tempor","ig");
let expReg2 = /Tempor/ig;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));

console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));


let expReg3 = /\d/ig;
console.log(expReg3.test(cadena));
console.log(expReg3.exec(cadena));

let expReg4 = /[0-9]/ig;
console.log(expReg4.test(cadena));
console.log(expReg4.exec(cadena));

let expReg5 = /Tempor{1,3}/ig;
console.log(expReg5.test(cadena));
console.log(expReg5.exec(cadena));