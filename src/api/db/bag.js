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

export { carrito, agregarProductoAlCarrito };
