function sumar(numero1 = 0 , numero2 = 0) {//numero1 y numero 2 son parametros numero = 0 es un parametro por default si por ejemplo hay un sumar(1) tomara 1 + 0 = 1
    console.log(numero1 + numero2); 
};

sumar(10, 10); // Argumentos o valores reales
sumar(3, 3); 
sumar(3, 6); 
sumar(1, 2); 

// Expresión de la función
const sumar2 = function(n1, n2) {
    console.log(n2 - n1);
}

sumar2(5, 10);