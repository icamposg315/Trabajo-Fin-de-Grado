import db from './conexion.js'

export const getRegistros = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM productos;'
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error al obtener los datos de la base de datos', err)
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}


