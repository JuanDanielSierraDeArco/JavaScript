import  {saludar, Pi,usuario, Saludo } from "./constantes.js";
import {sumar, restar, aritmetica as operaciones} from "./aritmetica.js";


console.log('Archivo modulos js');
console.log(Pi,usuario);

console.log(sumar(7,8));
console.log(restar(7,8));

console.log(operaciones.sumar(8,8));
console.log(operaciones.restar(10,8));
saludar();
const saludo = new Saludo();