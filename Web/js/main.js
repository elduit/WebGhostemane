let baseDeDatos = [
    {
        id: 1,
        nombre: 'Sweater Ghostemane',
        precio: 36.95
    },
    {
        id: 2,
        nombre: 'Halloween Tee',
        precio: 25.95
    },
    {
        id: 3,
        nombre: 'Zombie Tee',
        precio: 22.95
    },
    {
        id: 4,
        nombre: 'Skull Tee',
        precio: 22.95
    },
    {
        id: 5,
        nombre: 'Ghostemane Logo Tee',
        precio: 22.95
    }

];

let carrito = [];

function cart (idcamiseta) {
    if (idcamiseta == 1) carrito.push(baseDeDatos[0]);
    if (idcamiseta == 2) carrito.push(baseDeDatos[1]);
    if (idcamiseta == 3) carrito.push(baseDeDatos[2]);
    if (idcamiseta == 4) carrito.push(baseDeDatos[3]);
    if (idcamiseta == 5) carrito.push(baseDeDatos[4]);
    console.log(carrito);
    calcularTotal();
    // renderizarCarrito();
}
function calcularTotal(){
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total = carrito[i].precio + total;        
    }
    console.log(total)
}
function renderizarCarrito(){
    
}
