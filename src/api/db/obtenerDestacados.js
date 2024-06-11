import db from './conexion.js';

export const getProductosDestacados = () => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT producto_id, nombre, descripcion, precio, categoria FROM productos
            ORDER BY creado_en DESC
            LIMIT 4
        `;
        db.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
}; 
