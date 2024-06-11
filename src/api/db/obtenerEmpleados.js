import db from './conexion.js';

export const getEmpleados = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM empleados'; 
        db.query(query, (error, results) => {
            if (error) {
                return reject(error);
            }
            resolve(results);
        });
    });
};
