let carrito = [];

const agregarProductoAlCarrito = async (producto_id, nombre, cantidad, obtenerProductos) => {
    const productos = await obtenerProductos();
    const itemIndex = carrito.findIndex(item => item.producto_id === producto_id);
    if (itemIndex !== -1) {
        carrito[itemIndex].cantidad += cantidad;
    } else {
        const producto = productos.find(p => p.producto_id == producto_id);
        if (producto) {
            carrito.push({ producto_id, nombre, cantidad, precio: producto.precio });
        }
    }
    return carrito;
};

const actualizarCantidadEnCarrito = (producto_id, cantidad) => {
    return new Promise((resolve, reject) => {
        const itemIndex = carrito.findIndex(item => item.producto_id === producto_id);
        if (itemIndex !== -1) {
            carrito[itemIndex].cantidad += cantidad;
            if (carrito[itemIndex].cantidad <= 0) {
                carrito.splice(itemIndex, 1);
            }
            resolve(carrito);
        } else {
            reject('Producto no encontrado en el carrito');
        }
    });
};

const eliminarProductoDelCarrito = (producto_id) => {
    return new Promise((resolve, reject) => {
        const itemIndex = carrito.findIndex(item => item.producto_id === producto_id);
        if (itemIndex !== -1) {
            carrito.splice(itemIndex, 1);
            resolve(carrito);
        } else {
            reject('Producto no encontrado en el carrito');
        }
    });
};

export { carrito, agregarProductoAlCarrito, actualizarCantidadEnCarrito, eliminarProductoDelCarrito };
