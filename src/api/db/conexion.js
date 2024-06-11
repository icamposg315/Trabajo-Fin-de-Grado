import mysql from 'mysql2';
import dotenv from 'dotenv';


dotenv.config({ path: '../../security/datos.env' })

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'conscious',
    port: process.env.DB_PORT || 3306
})

db.connect(err => {
    if (err) {
        console.error('Error al conectar a MySQL', err)
        process.exit(1)
    }
    console.log('Conectado a MySQL')
})

export default db;