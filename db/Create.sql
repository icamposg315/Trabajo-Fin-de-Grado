drop database conscious;
create database conscious;

use conscious;

-- Creación de la tabla de usuarios
CREATE TABLE if not exists usuarios (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
	imagen varchar(255),
	codigo_postal int(5),
	ciudad varchar(255),
	telefono int(9),
    contrasena VARCHAR(255) NOT NULL,
    es_administrador BOOLEAN DEFAULT FALSE,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Creación de la tabla de productos
CREATE TABLE if not exists productos (
    producto_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50),
    stock INT NOT NULL,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    actualizado_en DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creación de la tabla de pedidos
CREATE TABLE if not exists pedidos (
    pedido_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    direccion_envio VARCHAR(255),
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);

-- Creación de la tabla de detalles_pedidos (relación muchos a muchos entre pedidos y productos)
CREATE TABLE if not exists detalles_pedidos (
    pedido_id INT,
    producto_id INT,
    cantidad INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (pedido_id, producto_id),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(pedido_id),
    FOREIGN KEY (producto_id) REFERENCES productos(producto_id)
);

-- Creación de la tabla de accesos
CREATE TABLE if not exists accesos (
    acceso_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    epoch BIGINT NOT NULL,
    hora_acceso DATETIME DEFAULT CURRENT_TIMESTAMP,
    ip VARCHAR(45) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id)
);

-- Creación de la tabla de contenido_web
CREATE TABLE if not exists contenido_web (
    contenido_id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    cuerpo TEXT NOT NULL,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    actualizado_en DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS imagenes (
	imagen_id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    imagen_url VARCHAR (255),
    FOREIGN KEY (producto_id) REFERENCES productos (producto_id)
);

CREATE TABLE IF NOT EXISTS empleados (
	empleado_id INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR (255),
    apellidos VARCHAR(255),
    puesto VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS fotos (
	foto_id INT AUTO_INCREMENT PRIMARY KEY,
	fotoEmpleado_id INT,
    foto_url VARCHAR(255),
	FOREIGN KEY (fotoEmpleado_id) REFERENCES empleados (empleado_id)
);

ALTER TABLE usuarios 
ADD apellidos varchar(255);

DROP TABLE fotos;
DROP TABLE empleados;