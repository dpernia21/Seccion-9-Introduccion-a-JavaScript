// Declaración de Función

function sumar() {
    console.log(10+10); //cuerpo de la función
};

sumar(); // siempre hay que llamar a las funciones

// Expresión de la función
const sumar2 = function() {
    console.log(3+3);
}

sumar2();

// IIFE
(function() {
    console.log('Esto es una función');
})();

console.log(cliente);



// Llamar funciones antes (si está declarada cómo function  ya que JS hace el primer recorrido por el registro de functions)
sumar();
function sumar() {
    console.log(10+10); //cuerpo de la función
};


// Expresión de la función
const sumar2 = function() {
    console.log(3+3);
}

sumar2();