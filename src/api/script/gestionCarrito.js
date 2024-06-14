document.addEventListener('DOMContentLoaded', async () => {
    const carritoContainer = document.getElementById('carritoContainer');
    const checkoutForm = document.getElementById('checkoutForm');

    const cargarCarrito = async () => {
        try {
            const response = await fetch('/api/carrito');
            if (!response.ok) {
                throw new Error('Error al obtener el carrito');
            }
            const carrito = await response.json();
            let carritoHTML = '';
            let total = 0;
            for (const item of carrito) {
                const imagenesResponse = await fetch(`/api/imagenes/${item.producto_id}`);
                if (!imagenesResponse.ok) {
                    throw new Error('Error al obtener las imágenes');
                }
                const imagenes = await imagenesResponse.json();
                const imagenPrincipal = imagenes.length > 0 ? `${imagenes[0]}` : '/img/default.png';

                carritoHTML += `
                    <div class="card mb-3 shadow-sm rounded">
                        <div class="row g-0">
                            <div class="col-md-3">
                                <img src="${imagenPrincipal}" alt="${item.nombre}" class="img-fluid rounded">
                            </div>
                            <div class="col-md-9">
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <h5 class="card-title">${item.nombre}</h5>
                                    <p class="card-text">Cantidad: 
                                        <button class="btn btn-sm btn-primary btn-decrease" data-id="${item.producto_id}">-</button>
                                        <span>${item.cantidad}</span>
                                        <button class="btn btn-sm btn-primary btn-increase" data-id="${item.producto_id}">+</button>
                                    </p>
                                    <p class="card-text text-end fs-5 text-secondary fw-bold">Precio: ${item.precio} €</p>
                                    <button class="w-25 btn btn-info btn-remove" data-id="${item.producto_id}">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                total += item.cantidad * item.precio;
            }
            carritoHTML += `<div class="d-flex justify-content-end mt-4"><h3>Total: ${total.toFixed(2)} €</h3></div>`;
            carritoContainer.innerHTML = carritoHTML;

            // Agregar event listeners después de insertar el HTML
            document.querySelectorAll('.btn-increase').forEach(button => {
                button.addEventListener('click', async (event) => {
                    const productoId = event.target.getAttribute('data-id');
                    await actualizarCantidad(productoId, 1);
                    cargarCarrito();
                });
            });

            document.querySelectorAll('.btn-decrease').forEach(button => {
                button.addEventListener('click', async (event) => {
                    const productoId = event.target.getAttribute('data-id');
                    await actualizarCantidad(productoId, -1);
                    cargarCarrito();
                });
            });

            document.querySelectorAll('.btn-remove').forEach(button => {
                button.addEventListener('click', async (event) => {
                    const productoId = event.target.getAttribute('data-id');
                    await eliminarProducto(productoId);
                    cargarCarrito();
                });
            });
        } catch (error) {
            console.error('Error al cargar el carrito:', error);
        }
    };

    // const actualizarCantidad = async (productoId, cantidad) => {
    //     try {
    //         const response = await fetch('/shop/actualizar-cantidad', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ producto_id: productoId, cantidad })
    //         });
    //         if (!response.ok) {
    //             throw new Error('Error al actualizar la cantidad');
    //         }
    //     } catch (error) {
    //         console.error('Error al actualizar la cantidad:', error);
    //     }
    // };

    // const eliminarProducto = async (productoId) => {
    //     try {
    //         const response = await fetch('/shop/eliminar-producto', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ producto_id: productoId })
    //         });
    //         if (!response.ok) {
    //             throw new Error('Error al eliminar el producto');
    //         }
    //     } catch (error) {
    //         console.error('Error al eliminar el producto:', error);
    //     }
    // };

    const actualizarCantidad = async (productoId, cantidad) => {
        try {
            const response = await fetch('/shop/actualizar-cantidad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ producto_id: productoId, cantidad })
            });
            if (!response.ok) {
                throw new Error('Error al actualizar la cantidad');
            }
        } catch (error) {
            console.error('Error al actualizar la cantidad:', error);
        }
    };
    
    const eliminarProducto = async (productoId) => {
        try {
            const response = await fetch('/shop/eliminar-producto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ producto_id: productoId })
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };
    

    checkoutForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const direccion_envio = document.getElementById('direccion_envio').value;
        const usuario_id = 1;

        try {
            const response = await fetch('/api/pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario_id, direccion_envio })
            });
            if (!response.ok) {
                throw new Error('Error al realizar el pedido');
            }
            const result = await response.json();
            alert('Pedido realizado con éxito');
            window.location.reload();
        } catch (error) {
            console.error('Error al realizar el pedido:', error);
        }
    });

    cargarCarrito();
});
