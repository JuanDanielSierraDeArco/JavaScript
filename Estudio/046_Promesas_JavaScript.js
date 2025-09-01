// Se crea una promesa. Esta promesa ejecuta un setTimeout (simula algo que tarda 2 segundos)
const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let operationSuccessful = true;  // Simulamos si la operación salió bien o mal
        
        if(operationSuccessful){
            resolve("la operacion fue exitosa"); // Si todo va bien, se cumple la promesa
        } else {
            reject("Fallo en la operacion"); // Si algo va mal, la promesa se rechaza
        }
    }, 2000) // El tiempo de espera: 2 segundos
});

// Ahora usamos la promesa creada
promise
    .then((successMessage) => {  // then se ejecuta cuando la promesa se RESUELVE
        console.log(successMessage); // Muestra el mensaje de éxito
    })
    .catch((errorMessage) =>{   // catch se ejecuta si la promesa es RECHAZADA
        console.log(errorMessage); // Muestra el error
    });
