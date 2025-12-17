//parametros rest & operador  spread

//parametros rest

function sumar(a,b,...c){
    let resultado = a + b;
    c.forEach(function (n){
        resultado += n;
    });
    return resultado;
}

console.log(sumar(5,8,4,6,8));

const arreglo1 = [1,2,3,4,5];
const arreglo2 = [6,7,8,9,10];

const arreglo3 = [...arreglo1, ...arreglo2];

console.log(arreglo1, arreglo2);
console.log(arreglo3);