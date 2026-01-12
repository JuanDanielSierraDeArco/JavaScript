

function obtenerUsuario(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof id !== "number"){
                reject(`El id ingresado "${id}" no es un numero`);
                return;
            }

            resolve({
                id,
                usuario: "Juan Daniel",
                rol: "Developer",
            });

        }, 1500);
    });
};

async function mostrarUsuario(id){
    try{
        console.info("Consultando usuario....");
        
        const usuario = await obtenerUsuario(id);
        console.info(`Usuaro:\nID: "${usuario.id}"\nNombre: "${usuario.usuario}"\nRol: "${usuario.rol}"`);

        console.info("Proceso finalizado");

    }catch(err){
        console.error(err);
    };
};

mostrarUsuario(1234567);
