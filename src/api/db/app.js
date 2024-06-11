import express from 'express'
import { json } from 'body-parser'
import registroRouter from '../log/registro' // Ajuste de la ruta de importación

const app = express()
const port = process.env.PORT || 3000

app.use(json())

// Usa el enrutador de registro para manejar las solicitudes de registro
app.use('/log/registro', registroRouter)

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})
