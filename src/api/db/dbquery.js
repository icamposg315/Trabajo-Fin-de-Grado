import db from './conexion.js' // Ruta correcta a conexion.js

export const insertRegistro = (nombre, apellidos, email, contrasena) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO usuarios (nombre, apellidos, email, contrasena) VALUES (?, ?, ?, ?)'
        db.query(query, [nombre, apellidos, email, contrasena], (err, result) => {
            if (err) {
                console.error('Error al guardar los datos en la base de datos', err)
                reject(err)
            } else {
                console.log('Datos guardados:', result)
                resolve(result)
            }
        })
    })
}
