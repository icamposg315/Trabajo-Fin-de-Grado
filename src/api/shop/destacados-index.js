document.addEventListener('DOMContentLoaded', async () => {
    try {
        await cargarProductosDestacados();
        actualizarContadorCarrito();
    } catch (error) {
        console.error('Error al cargar los productos destacados:', error);
    }
});

async function cargarProductosDestacados() {
    try {
        // Hacemos la solicitud para obtener los registros de productos
        const response = await fetch('/shop/destacados');

        // Verificamos si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('Error al obtener los registros');
        }

        // Extraemos los registros de la respuesta
        const destacados = await response.json();
        console.log('destacados obtenidos:', destacados);

        // Obtenemos el contenedor donde mostraremos los registros
        const container = document.getElementById('registrosContainer');

        // Verificamos si se encontró el contenedor
        if (!container) {
            throw new Error('No se encontró el contenedor de registros');
        }

        // Iteramos sobre cada registro para mostrarlo en la página
        for (const destacado of destacados) {
            console.log('Procesando registro:', destacado);
            const div = document.createElement('div');
            div.className = "registro card m-3";
            div.style.width = "18rem";

            // Hacemos la solicitud para obtener las imágenes asociadas a este registro
            const imagenesResponse = await fetch(`/api/imagenes/${destacado.producto_id}`);

            // Verificamos si la solicitud de imágenes fue exitosa
            if (!imagenesResponse.ok) {
                throw new Error('Error al obtener las imágenes');
            }

            // Extraemos las URLs de las imágenes de la respuesta
            const imagenes = await imagenesResponse.json();

            // Usamos la primera imagen como imagen principal
            const imagenPrincipal = imagenes.length > 0 ? imagenes[0] : '';

            // Creamos la estructura HTML para mostrar el registro con su imagen y demás información
            div.innerHTML = `
                <a href="#"><img src="${imagenPrincipal}" class="card-img-top" alt="${destacado.nombre}"></a>
                <div class="card-body d-flex flex-column justify-content-between">
                    <h5 class="card-title text-center fs-3">${destacado.nombre}</h5>
                    <p class="text-center fw-bold fs-6">${destacado.precio} €</p>
                    <p class="card-text m-3 text-center">${destacado.descripcion}</p>
                    <a href="#" class="btn btn-info" data-id="${destacado.producto_id}" data-precio="${destacado.precio}">Añadir al carrito</a>
                </div>
            `;

            // Agregamos el registro al contenedor principal
            container.appendChild(div);
        }

        // Añadir event listeners para los botones "Añadir al carrito"
        const addToCartButtons = container.querySelectorAll('.btn-info');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', async (event) => {
                event.preventDefault();
                const producto_id = button.getAttribute('data-id');
                const cantidad = 1; // Puedes modificar la cantidad según lo necesario

                try {
                    const response = await fetch('/shop/carrito', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ producto_id, cantidad })
                    });

                    if (!response.ok) {
                        throw new Error('Error al añadir producto al carrito');
                    }

                    const result = await response.json();
                    actualizarContadorCarrito(); // Actualizar el contador del carrito
                } catch (error) {
                    console.error('Error al añadir producto al carrito:', error);
                }
            });
        });
    } catch (error) {
        // Capturamos cualquier error que pueda ocurrir durante el proceso
        console.error('Error al cargar los registros:', error);
    }
}

const actualizarContadorCarrito = async () => {
    try {
        const response = await fetch('/shop/carrito');
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


// Estilos para las animaciones
const style = document.createElement('style');
style.innerHTML = `
#registrosContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90vw;
    margin-top: 50px;
    margin-bottom: 50px;

    .registro {
        flex: 1 1 21%; // Four columns on larger screens
        margin: 10px;

        @media (max-width: 1200px) {
            flex: 1 1 28%; // Three columns on large screens (MacBooks)
        }

        @media (max-width: 992px) {
            flex: 1 1 45%; // Two columns on tablets
        }

        @media (max-width: 576px) {
            flex: 1 1 100%; // One column on phones
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 15px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border-radius: 35px;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        img {
            border-radius: 35px 35px 0 0;
        }
    }
}

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

`;
document.head.appendChild(style);
