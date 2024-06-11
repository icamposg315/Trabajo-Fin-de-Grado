document.getElementById('registroFormulario').addEventListener('submit', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;

    const data = {
        nombre,
        apellidos,
        email,
        contrasena
    };

    try {
        const response = await fetch('/log/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        const registroExitosoDiv = document.getElementById('registroExitoso');
        const registroErrorDiv = document.getElementById('registroError');

        if (result.success) {
            registroExitosoDiv.style.display = 'block';
            registroErrorDiv.style.display = 'none';

            setTimeout(() => {
                registroExitosoDiv.style.display = 'none';
            }, 5000);
        } else {
            registroErrorDiv.textContent = `Error en el registro: ${result.message}`;
            registroErrorDiv.style.display = 'block';
            registroExitosoDiv.style.display = 'none';

            setTimeout(() => {
                registroErrorDiv.style.display = 'none';
            }, 5000);
        }
    } catch (error) {
        const registroErrorDiv = document.getElementById('registroError');
        registroErrorDiv.textContent = 'Registro no completado, ha habido algún error';
        registroErrorDiv.style.display = 'block';

        setTimeout(() => {
            registroErrorDiv.style.display = 'none';
        }, 5000);
    }
});
