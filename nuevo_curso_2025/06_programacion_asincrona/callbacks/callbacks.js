//Callbacks

function cuadradoCallback(value, callbacck){
    setTimeout(()=>{
        const valor = value*2;
        callbacck(valor,valor * valor);
    }, Math.random() * 1000);
}

cuadradoCallback(0,(value,result) => {
    console.log("inica callback");
    console.log(`Callback:${value}, ${result}`);
    cuadradoCallback(1,(value,result) => {
        console.log(`Callback:${value}, ${result}`);
        cuadradoCallback(2,(value,result) => {
            console.log(`Callback:${value}, ${result}`);
            cuadradoCallback(3,(value,result) => {
                console.log(`Callback:${value}, ${result}`);
                cuadradoCallback(4,(value,result) => {
                    console.log(`Callback:${value}, ${result}`);
                    cuadradoCallback(5,(value,result) => {
                        console.log(`Callback:${value}, ${result}`);
                        cuadradoCallback(6,(value,result) => {
                            console.log(`Callback:${value}, ${result}`);
                            cuadradoCallback(7,(value,result) => {
                                console.log(`Callback:${value}, ${result}`);
                                cuadradoCallback(8,(value,result) => {
                                    console.log(`Callback:${value}, ${result}`);
                                    cuadradoCallback(9,(value,result) => {
                                        console.log(`Callback:${value}, ${result}`);
                                        console.log("fin Callback");
                                        console.log("Callback Hell !!!!");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});