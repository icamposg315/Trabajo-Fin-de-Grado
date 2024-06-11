document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/registros');
        if (!response.ok) {
            throw new Error('Error al obtener los registros');
        }
        const registros = await response.json();
        console.log('Registros obtenidos:', registros);

        const container = document.getElementById('registrosContainer');
        if (!container) {
            throw new Error('No se encontró el contenedor de registros');
        }

        for (const registro of registros) {
            console.log('Procesando registro:', registro);
            const div = document.createElement('div');
            div.className = "registro";

            const imagenesResponse = await fetch(`/api/imagenes/${registro.producto_id}`);
            if (!imagenesResponse.ok) {
                throw new Error('Error al obtener las imágenes');
            }
            const imagenes = await imagenesResponse.json();
            const imagenPrincipal = imagenes.length > 0 ? imagenes[0] : '';

            div.innerHTML = `
                <div class="w-100 h-100 d-flex flex-column justify-content-between shadow-sm rounded producto">
                    <a href="#"><img src="${imagenPrincipal}" class="imagenes-productos" alt="..."></a>
                    <div class="d-flex flex-column my-2 align-items-stretch text-center justify-content-between">
                        <h5 class="mt-2 fs-5">${registro.nombre}</h5>
                        <p type="number" class="h-100 m-3 pt-3 fs-6">${registro.descripcion}</p>
                        <p class="my-2 fs-5">${registro.precio} €</p>
                        <button class="btn btn-info mx-4 mb-2 add-to-cart" data-id="${registro.producto_id}">Añadir al carrito</button>
                    </div>
                </div>
            `;

            container.appendChild(div);
        }

        // Añadir el evento de clic para todos los botones "Añadir al carrito"
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', async (event) => {
                const productoId = event.target.getAttribute('data-id');
                try {
                    const response = await fetch('/shop/carrito', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ producto_id: productoId, cantidad: 1 })
                    });
                    if (!response.ok) {
                        throw new Error('Error al añadir el producto al carrito');
                    }
                    const result = await response.json();
                    console.log(result);
                    actualizarContadorCarrito();
                } catch (error) {
                    console.error('Error al añadir el producto al carrito:', error);
                }
            });
        });

        const actualizarContadorCarrito = async () => {
            try {
                const response = await fetch('/api/carrito'); // Asegúrate de usar la ruta correcta
                if (!response.ok) {
                    throw new Error('Error al obtener el carrito');
                }
                const carrito = await response.json();
                const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
                document.querySelectorAll('.badge').forEach(badge => {
                    badge.textContent = totalItems;
                });
            } catch (error) {
                console.error('Error al actualizar el contador del carrito:', error);
            }
        };

        // Actualizar el contador al cargar la página
        actualizarContadorCarrito();

    } catch (error) {
        console.error('Error al cargar los registros:', error);
    }
});

// Estilos para las animaciones
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .registro {
        animation: fadeIn 1s ease-in-out;
    }

    .producto {
        transition: transform 2s ease-in-out, box-shadow 0.3s ease;
    }

    .producto:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .imagenes-productos {
        width: 100%;
        height: 100%;
    }

    #registrosContainer {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        width: 90vw;
        justify-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
        background-color: #e0e7e0;
        flex-wrap: wrap;
        overflow: hidden;
    }
    
    .registro {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 15px;
    }

    .w-100 {
        transition: box-shadow 0.3s ease;
    }

    .w-100:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(style);
