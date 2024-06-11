import db from './conexion.js';

export const getBlogBucle = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM blog';
        db.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};

export const getBlogCabecera = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM blog ORDER BY creado_en DESC LIMIT 1';
        db.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
};

export const getBlogById = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM blog WHERE blog_id = ?';
        db.query(query, [id], (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results[0]);
        });
    });
};
