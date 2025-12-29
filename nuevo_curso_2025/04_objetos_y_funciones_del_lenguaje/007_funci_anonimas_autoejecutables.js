// ===============================
// FUNCIONES ANÓNIMAS AUTO-EJECUTABLES (IIFE)
// ===============================

// IIFE básica
// Se encierra la función entre paréntesis y se ejecuta inmediatamente
(function (){
    console.log('Mi primer IIFE');
})();

// IIFE con parámetros
// Se pasan objetos globales como argumentos
(function (d, w, c){
    console.log('Mi segunda IIFE');

    // document
    console.log(d);

    // window
    console.log(w);

    // console
    console.log(c);

    // Uso del console pasado como parámetro
    c.log('este es un console.log');
})(document, window, console);

//clasica
(function (){
    console.log('version clasica');
})();
//la crockford
((function(){
    console.log('version crockford');
})());
//version unaria
+function(){
    console.log('version unaria');
}();
//facebook
!function(){
    console.log('version facebook');
}();