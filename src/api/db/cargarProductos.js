import { getRegistros } from './obtenerProductos.js';

const obtenerProductos = async () => {
    try {
        const productos = await getRegistros();
        return productos;
    } catch (error) {
        throw new Error('Error al obtener productos');
    }
};

export { obtenerProductos };
