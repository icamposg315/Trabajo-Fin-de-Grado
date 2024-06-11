-- Creación de usuarios

insert into usuarios 
(usuario_id, nombre, email, imagen, codigo_postal, ciudad, telefono, contrasena, es_administrador)
 value
 (null, "Ismael", "ismaelcg.0015@gmail.com", default, 28320, "Pinto", default, "1234", true);
 
 -- Creación de productos
 
insert into productos
(producto_id, nombre, descripcion, precio, categoria, stock)
value
(null, "Fiji", "Vestido de Algodón Orgánico con Ondas y Forma de Farol",
84.99, "Vestido", 5);
insert into productos
(producto_id, nombre, descripcion, precio, categoria, stock)
value
(null, "Marrakech", "Blazer de Algodón Orgánico con Ondas",
99.99, "Blazer", 8);
insert into productos
(producto_id, nombre, descripcion, precio, categoria, stock)
value
(null, "Lima", "Chaleco Cuadrado de Voile de Algodón Orgánico",
49.99, "Chaleco", 2);
insert into productos
(producto_id, nombre, descripcion, precio, categoria, stock)
value
(null, "Kyoto", "Chaqueta de lino Orgánico con Cuello de Banda",
99.99, "Chaqueta", 5);

insert into productos 
(producto_id, nombre, descripcion, precio, categoria, stock)
value
(null, "Beijing", "Vestido Camisero de Lino Orgánico Lavado Délavé",
74.99, "Vestido", 6),
(null, "Tuvalu", "Vestido de Tirantes de Gasa Voluminosa de Algodón Orgánico",
119.99, "Vestido", 3),
(null, "Menorca", "Vestido de Tirantes de Seda Lavada",
99.99, "Vestido", 10),
(null, "Formentera", "Falda con Bolsillos de Lino Orgánico",
99.99, "Vestido", 8 ),
(null, "Casablanca", "Vestido de Lino Orgánico con Cuello Cuadrado",
69.99, "Vestido", 12),
(null, "Dubai", "Caftán de Gasa de Lino Orgánico",
74.99, "Camisa", 4),
(null, "La Habana", "Camisa Larga de Lino Orgánico Fruncido con Cuello Clásico",
49.99, "Camisa", 9 ),
(null, "Ibiza", " Top de Algodón Orgánico con Cuello Redondo y Tejido de Punto Elástico",
39.99, "Camisa", 15),
(null, "Utrech", "Top de Punto Jersey Elástico con Cuello Redondo",
49.99, "Camisa", 9),
(null, "Copenhague", "Abrigo con Capucha de Algodón y Nailon Ligero",
249.99, "Chaqueta", 3),
(null, "Oslo", "Chaqueta con Cuello Recto de Algodón y Cáñamo Elástico",
199.99, "Chaqueta", 8),
(null, "Quebec", "Chaqueta con Cuello Recto Délavé de Lino Orgánico Lavado",
179.99, "Chaqueta", 6),
(null, "Denim Raw", "Organic Denim de Algodón Orgánico con Corte Farol",
89.99, "Pantalon", 25),
(null, "Denim Classic", "Organic Denim Slim Jean",
89.99, "Pantalon", 30);

UPDATE productos
SET categoria = 'Chaqueta'
WHERE categoria = 'Chaleco';

UPDATE productos
SET categoria = 'Chaqueta'
WHERE categoria = 'Blazer';

-- Creación de tablas de imágenes

INSERT INTO imagenes 
(imagen_id, producto_id, imagen_url)
VALUES
(null, 1, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Fiji'),
(null, 2, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Marrakech'),
(null, 3, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Lima'),
(null, 4, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Kyoto'),
(null, 5, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Beijing'),
(null, 6, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Tuvalu'),
(null, 7, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Menorca'),
(null, 8, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Formentera'),
(null, 9, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Casablanca'),
(null, 10, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Dubai'),
(null, 11, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Havana'),
(null, 12, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Ibiza'),
(null, 13, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Utrech'),
(null, 14, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Copenhague'),
(null, 15, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Oslo'),
(null, 16, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\Quebec'),
(null, 17, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\jeans-blanco'),
(null, 18, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Productos\\jeans-clasico');

-- Inserciones de empleados y fotos

INSERT INTO empleados 
(empleado_id, nombre, apellidos, puesto)
VALUES
(null, 'Martin', 'Vaquero Rodriguez', 'Director/a de Finanzas (CFO)'),
(null, 'Carol', 'Hernadez Cardozo', 'Directora Ejecutiva (CEO)'),
(null, 'Paula', 'Sanchez Montiel', 'Directora de Marketing y Comunicación'),
(null, 'Victor', 'Ortiz Bautista', 'Gerente de Relaciones Comunitarias y RSC'),
(null, 'Jackson', 'Fernandez Fernandez', 'Director de Sostenibilidad (CSO)'),
(null, 'Anna', 'Pyatov', 'Directora de Diseño'),
(null, 'Tomas', 'Gallego Ruiz', 'Director de Operaciones (COO)'),
(null, 'Valeria', 'Perez Sanchez', 'Gerente de Recursos Humanos');

INSERT INTO fotos 
(foto_id, fotoEmpleado_id, foto_url)
VALUES
(null, 1, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Equipo\\equipo-martin'),
(null, 2, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Equipo\\equipo-carol'),
(null, 3, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Equipo\\equipo-paula'),
(null, 4, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Equipo\\equipo-victor'),
(null, 5, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Equipo\\equipo-jackson'),
(null, 6, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Equipo\\equipo-anna'),
(null, 7, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Equipo\\equipo-tomas'),
(null, 8, 'C:\\xampp\\htdocs\\2ºDAW\\Trabajo Fin de Grado\\src\\img\\Equipo\\equipo-valeria');