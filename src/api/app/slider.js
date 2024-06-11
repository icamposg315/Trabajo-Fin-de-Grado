document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/app/empleados');
        if (!response.ok) {
            throw new Error('Error al obtener los empleados');
        }
        const empleados = await response.json();
        const sliderContainer = document.getElementById('employee-slider');
        let sliderContent = '';

        empleados.forEach((empleado, index) => {
            sliderContent += `
                <div class="card" style="display: ${index < 3 ? 'block' : 'none'};">
                    <img src="${empleado.foto_url}" class="card-img-top" alt="${empleado.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${empleado.apellidos}, ${empleado.nombre}</h5>
                        <p class="card-title">${empleado.puesto}</p>
                        <div class="contact-icons">
                            <a href="#" target="_blank" class="icon linkedin">
                                <i class="icon fab fa-linkedin"></i>
                            </a>
                            <a href="#" class="icon email">
                                <i class="icon fas fa-envelope"></i>
                            </a>
                            <a href="#" class="icon phone">
                                <i class="icon fas fa-phone"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
        });

        sliderContainer.innerHTML = `
            <button class="prev slider-control-prev"><i class="fas fa-arrow-left" style=color:black;></i></button>
            <div class="slider-inner">
                ${sliderContent}
            </div>
            <button class="next slider-control-next"><i class="fas fa-arrow-right" style=color:black;></i></button>
        `;

        window.currentSlideIndex = 0;
        window.totalSlides = empleados.length;
        window.slidesToShow = 3;

        window.nextSlide = () => {
            const cards = document.querySelectorAll('.slider-inner .card');
            cards.forEach(card => card.style.display = 'none');
            window.currentSlideIndex = (window.currentSlideIndex + window.slidesToShow) % window.totalSlides;
            for (let i = 0; i < window.slidesToShow; i++) {
                const index = (window.currentSlideIndex + i) % window.totalSlides;
                cards[index].style.display = 'block';
            }
        };

        window.prevSlide = () => {
            const cards = document.querySelectorAll('.slider-inner .card');
            cards.forEach(card => card.style.display = 'none');
            window.currentSlideIndex = (window.currentSlideIndex - window.slidesToShow + window.totalSlides) % window.totalSlides;
            for (let i = 0; i < window.slidesToShow; i++) {
                const index = (window.currentSlideIndex + i) % window.totalSlides;
                cards[index].style.display = 'block';
            }
        };

        document.querySelector('.prev').addEventListener('click', prevSlide);
        document.querySelector('.next').addEventListener('click', nextSlide);

        setInterval(nextSlide, 8000);
    } catch (error) {
        console.error('Error al cargar el slider:', error);
    }
});


