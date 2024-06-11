document.addEventListener('DOMContentLoaded', async () => {
    const calculateTimeAgo = (dateString) => {
        const createdDate = new Date(dateString);
        const now = new Date();

        const timeDifference = now - createdDate;
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference > 0) {
            return `Hace ${daysDifference} días`;
        } else if (hoursDifference > 0) {
            return `Hace ${hoursDifference} horas`;
        } else {
            return `Hace ${minutesDifference} minutos`;
        }
    };

    try {
        const response = await fetch('/app/blog/bucle');
        if (!response.ok) {
            throw new Error('Error al obtener los artículos');
        }

        const blogs = await response.json();
        const bucleBlog = document.getElementById('bucle-blog');
        let cardBlogHTML = '';

        blogs.forEach((articulo) => {
            const timeAgo = calculateTimeAgo(articulo.creado_en);
            cardBlogHTML += `
                <div class="col-md-6 mb-2 pt-5">
                    <div class="card h-100 border overflow-hidden shadow-sm position-relative">
                        <img src="${articulo.foto_url}" alt="${articulo.titulo}" class="card-img-top">
                        <div class="card-body d-flex justify-content-between flex-column">
                            <strong class="d-inline-block mb-2 text-primary">${articulo.autor}</strong>
                            <h3 class="mb-1">${articulo.titulo}</h3>
                            <div class="mb-2 text-muted">${timeAgo}</div>
                            <p class="card-text mb-auto">${articulo.texto_corto}</p>
                            <a href="/blog/${articulo.blog_id}" class="text-black stretched-link">Leer más</a>
                        </div>
                    </div>
                </div>
            `;
        });

        bucleBlog.innerHTML = `
            <div class="row">
                ${cardBlogHTML}
            </div>
        `;

    } catch (error) {
        console.log('Error al cargar los artículos:', error);
    }

    try {
        const responseCabecera = await fetch('/app/blog/cabecera');
        if (!responseCabecera.ok) {
            throw new Error('Error al obtener el artículo de cabecera');
        }

        const blogCabecera = await responseCabecera.json();
        const cabeceraBlog = document.getElementById('cabecera-blog');
        let cabeceraBlogHTML = '';

        // Verifica y corrige la ruta de la imagen si es necesario
        let fotoUrl = blogCabecera.foto_url.replace(/\\/g, '/');

        cabeceraBlogHTML += `
            <div class="blog-entry" style="background-image: url('${fotoUrl}');">
            <div class="w-75 d-flex flex-column justify-items-center">
                <h2>${blogCabecera.titulo}</h2>
                <p>${blogCabecera.texto_corto}</p>
                <p>${new Date(blogCabecera.creado_en).toLocaleDateString()}</p>
                <a href="/blog/${blogCabecera.blog_id}" class="icon-link gap-1 icon-link-hover stretched-link">
                    Leer más
                    <svg class="bi"><use xlink:href="#chevron-right"></use></svg>
                </a>
                </div>
            </div>
        `;

        cabeceraBlog.innerHTML = cabeceraBlogHTML;

    } catch (error) {
        console.log('Error al cargar el artículo de cabecera:', error);
    }
});
