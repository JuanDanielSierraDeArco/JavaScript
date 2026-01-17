
function buscarTesoro(busqueda) {
    if (busqueda === "tesoro") {
        return "¡Has encontrado el tesoro! 🎉";
    } else {
        return "No has encontrado nada, sigue buscando.";
    }
}

let mensaje = buscarTesoro("tesoro");

document.getElementById("resultado").textContent = mensaje;
