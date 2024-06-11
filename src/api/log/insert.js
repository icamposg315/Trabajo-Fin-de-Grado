import express from 'express';
import { insertRegistro } from '../db/dbquery.js';

const router = express.Router();
router.post('/', async (req, res) => {
    const { nombre, apellidos, email, contrasena } = req.body;

    try {
        if (!nombre || !apellidos || !email || !contrasena) {
            throw new Error('Todos los campos son obligatorios');
        }

        await insertRegistro(nombre, apellidos, email, contrasena);
        console.log('Registro exitoso');

        // // Respondemos con un objeto JSON indicando éxito
        res.status(200).json({ success: true });
    } catch (err) {
        console.error('Error en la inserción:', err);
        res.status(500).json({ success: false, message: err.message || 'Error en el servidor' });
    }
});

export default router;
