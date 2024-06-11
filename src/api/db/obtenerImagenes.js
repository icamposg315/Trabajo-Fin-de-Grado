import db from './conexion.js';

export const getImagenes = (idProducto) => {
    return new Promise((resolve, reject) => {
        const query = `
            SELECT i.imagen_url 
            FROM imagenes AS i
            JOIN productos AS p ON i.producto_id = p.producto_id
            WHERE p.producto_id = ?;
        `;
        db.query(query, [idProducto], (err, results) => {
            if (err) {
                console.error('Error al obtener las URLs de las imágenes:', err);
                reject(err);
            } else {
                const urls = results.map(result => result.imagen_url);
                resolve(urls);
            }
        });
    });
};
