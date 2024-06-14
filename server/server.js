import express from 'express';
import logger from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { getRegistros } from '../src/api/db/obtenerProductos.js';
import { getImagenes } from '../src/api/db/obtenerImagenes.js';
import { getProductosDestacados } from '../src/api/db/obtenerDestacados.js';
import { getEmpleados } from '../src/api/db/obtenerEmpleados.js';
import { getBlogBucle, getBlogCabecera, getBlogById } from '../src/api/db/obtenerBlog.js';
import { obtenerProductos } from '../src/api/db/cargarProductos.js';
import { carrito, agregarProductoAlCarrito, actualizarCantidadEnCarrito, eliminarProductoDelCarrito } from '../src/api/db/bag.js';
import { procesarPedido } from '../src/api/db/pedido.js';
import insertRouter from '../src/api/log/insert.js';
import loginRouter from '../src/api/log/login.js';
import authMiddleware from '../middlewares/authMiddleware.js';
dotenv.config({ path: './security/datos.env' });

const puerto = process.env.PORT ?? 3000;

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.set('view engine', 'ejs');

// Configura el directorio de vistas principal
app.set('views', [
    path.join(process.cwd(), 'src', 'api'),
    path.join(process.cwd(), 'src', 'api', 'content'),
    path.join(process.cwd(), 'src', 'api', 'log'),
    path.join(process.cwd(), 'src', 'api', 'partial'),
    path.join(process.cwd(), 'src', 'api', 'shop'),
    path.join(process.cwd(), 'src', 'api', 'app')
]);

app.use(express.static(path.join(process.cwd(), 'src', 'api', 'public')));
app.use('/node_modules', express.static(path.join(process.cwd(), 'node_modules')));
app.use('/script', express.static(path.join(process.cwd(), 'src', 'api', 'script')));
app.use('/db', express.static(path.join(process.cwd(), 'src', 'api', 'db')));
app.use('/shop', express.static(path.join(process.cwd(), 'src', 'api', 'shop')));
app.use('/app', express.static(path.join(process.cwd(), 'src', 'api', 'app')));
app.use('/content', express.static(path.join(process.cwd(), 'src', 'api', 'content')));

// Rutas para el registro e inicio de sesión
app.use('/log/registro', insertRouter);
app.use('/log/sesion', loginRouter);

// Ruta para renderizar la vista HTML del carrito
app.use('/shop/carrito', (req, res) => {
    res.render('shop/carrito');
});
// Ruta para devolver el JSON del carrito
app.get('/api/carrito', (req, res) => {
    console.log('Carrito actual:', carrito); // Verificación
    res.status(200).json(carrito);
});

app.post('/api/carrito', async (req, res) => {
    const { producto_id, nombre, cantidad } = req.body;

    try {
        const carritoActualizado = await agregarProductoAlCarrito(producto_id, nombre, cantidad, obtenerProductos);
        console.log('Carrito después de añadir:', carritoActualizado);
        res.status(200).json({ mensaje: 'Producto añadido al carrito', carrito: carritoActualizado });
    } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
        res.status(500).json({ error: 'Error al agregar producto al carrito' });
    }
});

app.post('/shop/actualizar-cantidad', async (req, res) => {
    const { producto_id, cantidad } = req.body;
    try {
        const carritoActualizado = await actualizarCantidadEnCarrito(producto_id, cantidad);
        res.status(200).json({ mensaje: 'Cantidad actualizada', carrito: carritoActualizado });
    } catch (error) {
        console.error('Error al actualizar la cantidad:', error);
        res.status(500).json({ error: 'Error al actualizar la cantidad' });
    }
});

// Ruta para eliminar un producto del carrito
app.post('/shop/eliminar-producto', async (req, res) => {
    const { producto_id } = req.body;
    try {
        const carritoActualizado = await eliminarProductoDelCarrito(producto_id);
        res.status(200).json({ mensaje: 'Producto eliminado', carrito: carritoActualizado });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
});


app.post('/api/pedido', authMiddleware, async (req, res) => {
    const { usuario_id, direccion_envio } = req.body;

    try {
        const resultado = await procesarPedido(usuario_id, direccion_envio, carrito, db);
        res.status(200).json(resultado);
    } catch (error) {
        console.error('Error al procesar el pedido:', error);
        res.status(500).json({ error: 'Error al procesar el pedido' });
    }
});

app.post('/logout', (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'Sesión cerrada correctamente' });
});

// Rutas para las vistas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/shop/tienda', (req, res) => {
    res.render('shop/tienda');
});

app.get('/log/sesion', (req, res) => {
    res.render('log/sesion');
});

app.get('/log/registro', (req, res) => {
    res.render('log/registro');
});

app.get('/content/ganancias', (req, res) => {
    res.render('content/ganancias');
});

app.get('/content/garantia', (req, res) => {
    res.render('content/garantia');
});

app.get('/content/responsabilidad', (req, res) => {
    res.render('content/responsabilidad');
});

app.get('/content/quienes-somos', (req, res) => {
    res.render('content/quienes-somos');
});

app.get('/content/contacto', (req, res) => {
    res.render('content/contacto');
});

app.get('/app/slider', (req, res) => {
    res.render('app/slider');
});

app.get('/content/blog', (req, res) => {
    res.render('content/blog');
});

app.get('/api/registros', async (req, res) => {
    try {
        const registros = await getRegistros();
        res.json(registros);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ error: 'Error al obtener los registros' });
    }
});

app.get('/api/imagenes/:idProducto', async (req, res) => {
    const idProducto = req.params.idProducto;
    try {
        const imagenes = await getImagenes(idProducto);
        res.json(imagenes);
    } catch (error) {
        console.error('Error al obtener las imágenes:', error);
        res.status(500).json({ error: 'Error al obtener las imágenes' });
    }
});

app.get('/shop/destacados', async (req, res) => {
    try {
        const destacados = await getProductosDestacados();
        console.log('Productos destacados obtenidos:', destacados);
        res.json(destacados);
    } catch (error) {
        console.error('Error al obtener los productos destacados:', error);
        res.status(500).json({ error: 'Error al obtener los productos destacados' });
    }
});

app.get('/app/empleados', async (req, res) => {
    try {
        const empleados = await getEmpleados();
        res.json(empleados);
    } catch (error) {
        console.error('Error al obtener los empleados:', error);
        res.status(500).json({ error: 'Error al obtener los empleados' });
    }
});

app.get('/app/blog/bucle', async (req, res) => {
    try {
        const blog = await getBlogBucle();
        res.json(blog);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ error: 'Error al obtener los registros' });
    }
});

app.get('/app/blog/cabecera', async (req, res) => {
    try {
        const blogCabecera = await getBlogCabecera();
        res.json(blogCabecera);
    } catch (error) {
        console.error('Error al obtener los registros:', error);
        res.status(500).json({ error: 'Error al obtener los registros' });
    }
});

app.get('/blog/:id', async (req, res) => {
    try {
        const blogId = req.params.id;
        const blog = await getBlogById(blogId);
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.render('content/entradasBlog', { blog });
    } catch (error) {
        console.error('Error al obtener el artículo del blog:', error);
        res.status(500).send('Error al obtener el artículo del blog');
    }
});

// Ruta para servir el archivo destacados-index.js desde /shop
app.get('/shop/destacados-index.js', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'api', 'script', 'shop', 'destacados-index.js'));
});

app.listen(puerto, () => {
    console.log(`El servidor está corriendo por el puerto ${puerto}`);
});
