//Async - await

function cuadradoPromise(valor){
    if(typeof valor !== "number"){
        return Promise.reject(`Error, el valor "${valor}" ingesado no es un numero`);
    };
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                valor,
                resultado: valor * valor,
            });
        }, (0 | Math.random() * 1000));
    });
};

async function funcionAsincronaDeclarada(){
 try {
    console.log("Inicio de funcion Asyncrona");
    let obj = await cuadradoPromise(0);
    console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

    obj = await cuadradoPromise(1);
    console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

    obj = await cuadradoPromise(2);
    console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

    obj = await cuadradoPromise(3);
    console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

    obj = await cuadradoPromise(4);
    console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

    obj = await cuadradoPromise(5);
    console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
    
    console.log("Fin de funcion Asyncrona");

 } catch (error) {
    console.error(error);
 }
}
funcionAsincronaDeclarada();

// const funcionAsincronaExpresada = async() =>{
//      try {
//     console.log("Inicio de funcion Asyncrona");
//     let obj = await cuadradoPromise(0);
//     console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

//     obj = await cuadradoPromise(6);
//     console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

//     obj = await cuadradoPromise(7);
//     console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

//     obj = await cuadradoPromise(8);
//     console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

//     obj = await cuadradoPromise("9");
//     console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

//     obj = await cuadradoPromise(10);
//     console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);

//     console.log("Fin de funcion Asyncrona");

//  } catch (error) {
//     console.error(error);
//  }

// } ;
// funcionAsincronaExpresada();