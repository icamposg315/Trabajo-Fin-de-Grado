import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUsuarioPorEmail } from '../db/dbquery.js';

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    const { email, contrasena } = req.body;

    try {
        if (!email || !contrasena) {
            throw new Error('Todos los campos son obligatorios');
        }

        const usuario = await getUsuarioPorEmail(email);
        if (!usuario) {
            return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
        }

        const match = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!match) {
            return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: usuario.usuario_id, email: usuario.email, nombre: usuario.nombre }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ success: true, token,nombre: usuario.nombre });
    } catch (err) {
        console.error('Error en el inicio de sesión:', err);
        res.status(500).json({ success: false, message: err.message || 'Error en el servidor' });
    }
});

export default loginRouter;
