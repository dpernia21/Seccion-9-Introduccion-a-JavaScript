// Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`)
aprendiendo('JavaScript')

// Copia de 15.js para simplificar código function
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
meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

let resultado;

//Some ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === 'Móvil');

// Reduce
resultado = carrito.reduce((total, producto) =>  total + producto.precio, 0 );

// Filter
resultado = carrito.filter(producto => producto.precio >= 400
    );
    
resultado = carrito.filter(producto => producto.nombre == 'Audifonos'
    );

console.log(resultado);

