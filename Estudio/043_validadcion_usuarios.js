const userDatabase = [
    {
        username: "Juan",
        password: "123"
    },
    {
        username: "Daniel",
        password: "456"
    },
    {
        username: "Ana",
        password: "789"
    }
]

const usersTimeline = [
    {
        username: "Juan",
        timeline: "JavaScript es genial"
    },
    {
        username: "Daniel",
        timeline: "A mi me gusta más el cáfe que el té"
    },
    {
        username: "Ana",
        timeline: "Yo soy experta en Excel"
    }
]

const username = prompt("Cual es tu usuario? ");
const password = prompt("Cuál es tu contraseña? ");

function usuarioExistente(username, password) {
    for (let i = 0; i < userDatabase.length; i++){
        if ( userDatabase[i].username === username && userDatabase[i].password === password){
            return true;
        }
    }
    return false;
}

function signIn(username, password){
    if (usuarioExistente(username, password)) {
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(usersTimeline);
    } else {
     alert(`Lo Siento usuario y contraseña incorrectos`);   
    }
}

signIn(username, password);