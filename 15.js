// Array Methods

const meses =['Enero','Febrero','Marzo','Abril','Mayo'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 20 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 100},
    {nombre: 'Audifonos', precio: 20},
    {nombre: 'Teclado', precio: 70},
    {nombre: 'Móvil', precio: 60.99},
    {nombre: 'Bocinas', precio: 500},
    {nombre: 'Laptop', precio: 400},
];

//forEach
meses.forEach(function(mes) {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

// Includes
let resultado = meses.includes('Marzo');
// const resultado2 = carrito.includes('Celular');
console.log(resultado);
// console.log(resultado2);

//Some ideal para arreglo de objetos
resultado = carrito.some(function(producto) {
    return producto.nombre === 'Móvil'
})

// Reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0 );

// Filter
resultado = carrito.filter(function(producto) {
    return producto.precio >= 400
});

resultado = carrito.filter(function(producto) {
    return producto.nombre == 'Móvil'
});

console.log(resultado)
