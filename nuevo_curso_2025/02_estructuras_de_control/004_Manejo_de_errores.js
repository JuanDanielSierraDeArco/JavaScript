/* =========================
   MANEJO DE ERRORES
   try / catch / finally
   ========================= */

try {
    /*
    El bloque try contiene el código
    que se va a evaluar.
    */
    console.log('En el try se agrega el código a evaluar');

    // Esta variable NO existe
    // Genera un error de referencia
    noexiste;

    // Esta línea nunca se ejecuta
    // porque el error detiene el try
    console.log('Segundo mensaje del try');

} catch (error) {

    /*
    El bloque catch se ejecuta
    cuando ocurre un error en el try
    */
    console.log('En el catch se captura cualquier error surgido en el try');
    console.log(error); // Objeto Error completo

} finally {

    /*
    El bloque finally SIEMPRE se ejecuta,
    haya error o no
    */
    console.log('El bloque finally se ejecuta siempre al final');
}
/* =========================
   MANEJO DE ERRORES
   VALIDACIÓN CON throw
   ========================= */

try {
    // Variable a validar
    let numero = 10;

    /*
    isNaN() verifica si el valor NO es un número
    */
    if (isNaN(numero)) {
        // Lanzamos un error personalizado
        throw new Error('El carácter introducido no es un número');
    }

    // Si no hay error, se ejecuta esta operación
    console.log(numero * numero);

} catch (error) {

    /*
    error.message contiene el mensaje del error
    */
    console.log(`Se produjo un error: ${error.message}`);
}