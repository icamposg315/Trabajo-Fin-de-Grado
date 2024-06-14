import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { insertRegistro, getUsuarioPorEmail } from '../db/dbquery.js';

const insertRouter = express.Router();
insertRouter.post('/', async (req, res) => {
    const { nombre, apellidos, email, contrasena } = req.body;

    try {
        if (!nombre || !apellidos || !email || !contrasena) {
            throw new Error('Todos los campos son obligatorios');
        }

        const hashedPassword = await bcrypt.hash(contrasena, 10);
        await insertRegistro(nombre, apellidos, email, hashedPassword);
        console.log('Registro exitoso');

        const usuario = await getUsuarioPorEmail(email);
        if (!usuario) {
            throw new Error('Error al obtener el usuario después del registro');
        }

        const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Enviar el token en la respuesta
        res.status(200).json({ success: true, token });
    } catch (err) {
        console.error('Error en la inserción:', err);
        res.status(500).json({ success: false, message: err.message || 'Error en el servidor' });
    }
});

export default insertRouter;

