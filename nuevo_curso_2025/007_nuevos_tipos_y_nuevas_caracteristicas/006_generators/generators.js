//genradores

// Función generadora
// El asterisco (*) indica que es un generator
function* generadora() {
    // Cada yield pausa la ejecución y devuelve un valor
    yield "inicio de la funcion generadora";
    yield "Mensaje 1";
    yield "Mensaje 2";
    yield "Mensaje 3";
    yield "Mensaje 4";
    yield "Mensaje 5";
    yield "fin de la funcion generadora";
}

// Al invocar la función NO se ejecuta,
// se obtiene un iterador
const iterador = generadora();

// Cada llamada a next() avanza el generator
console.log(iterador.next()); // { value: "...", done: false }
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); // done: true

// El operador spread consume completamente el generator
const todos = [...generadora()];
console.log(todos);

function calcularCuadrado(valor) {
    // Simulación de asincronía
    // Este setTimeout se ejecuta DESPUÉS
    setTimeout(()=>{
        console.log({
            valor,
            resultado: valor * valor,
        });
    }, Math.random() * 1000);

    // Retorno SINCRÓNICO inmediato
    return {
        valor,
        resultado: valor * valor,
    };
};

function* iteradora(){
    console.log("inicia generador");

    // Cada yield devuelve el valor retornado por calcularCuadrado
    yield calcularCuadrado(0);
    yield calcularCuadrado(1);
    yield calcularCuadrado(2);
    yield calcularCuadrado(3);
    yield calcularCuadrado(4);
    yield calcularCuadrado(5);

    console.log("fin generador");
};

const next = iteradora();

for (const element of next) {
    console.log(element);
}