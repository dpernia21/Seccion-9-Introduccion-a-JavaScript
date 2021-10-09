// Arreglos o Arrays

const numeros = [10,20,30,40,50];


//  OTRA SINTAXIS (MENOS UTILIZADA) const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo')



// const arreglo = ['Hola',10,true,'si',null,{nombre: 'Juan', apellido: "Daniel"},[1,2,6]]

// console.table(arreglo);

// // Acceder a valores de un arreglo

// console.log(numeros[4]);
// console.log(numeros[2]);
// console.log(numeros[400]);

// numeros.forEach( function(numero) {
    //     console.log(numero)
    // })
    
    // // Conocer la extensión de un arreglo
    // console.log(meses.length);


// Forma para agregar elementos al arreglo 

// numeros[5] = 60; forma no muy común

// numeros.push(60,70,80,80); (hoy en día no se recomienda agregar los originales arreglos) agrega al final del arreglo

numeros.unshift(-10,-20,-30); //al inicio del arreglo

console.table(numeros);

const meses =['Enero','Febrero','Marzo','Abril','Mayo']

// meses.pop(); // elimina último elemento

// meses.shift(); // elimina 1er elemento

// meses.splice(2, 1);

// console.table(meses);

// Rest Operator or Spread Operator

// const nuevoArreglo = [...meses, 'Junio'];
const nuevoArreglo = ['Junio',...meses];

console.log(nuevoArreglo);