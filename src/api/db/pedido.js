
const procesarPedido = async (usuario_id, direccion_envio, carrito, db) => {
    const total = carrito.reduce((sum, item) => sum + item.cantidad * item.precio, 0);

    try {
        const pedidoResult = await db.query('INSERT INTO pedidos (usuario_id, fecha_pedido, direccion_envio, total) VALUES (?, NOW(), ?, ?)', [usuario_id, direccion_envio, total]);
        const pedido_id = pedidoResult.insertId;

        const detallesPromises = carrito.map(item => {
            return db.query('INSERT INTO detalles_pedidos (pedido_id, producto_id, cantidad, precio) VALUES (?, ?, ?, ?)', [pedido_id, item.producto_id, item.cantidad, item.precio]);
        });

        await Promise.all(detallesPromises);

        carrito.length = 0; // Vaciar el carrito después de realizar el pedido
        return { mensaje: 'Pedido realizado con éxito', pedido_id };
    } catch (error) {
        throw new Error('Error al procesar el pedido');
    }
};

export { procesarPedido };
