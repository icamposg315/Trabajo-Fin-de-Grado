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

DELETE FROM empleados;

INSERT INTO empleados 
(empleado_id, nombre, apellidos, puesto, foto_url)
VALUES
(null, 'Martin', 'Vaquero Rodriguez', 'Director/a de Finanzas (CFO)','\\img\\Equipo\\equipo-martin.webp'),
(null, 'Carol', 'Hernadez Cardozo', 'Directora Ejecutiva (CEO)','\\img\\Equipo\\equipo-carol.webp'),
(null, 'Paula', 'Sanchez Montiel', 'Directora de Marketing y Comunicación','\\img\\Equipo\\equipo-paula.webp'),
(null, 'Victor', 'Ortiz Bautista', 'Gerente de Relaciones Comunitarias y RSC','\\img\\Equipo\\equipo-victor.webp'),
(null, 'Jackson', 'Fernandez Fernandez', 'Director de Sostenibilidad (CSO)','\\img\\Equipo\\equipo-jackson.webp'),
(null, 'Anna', 'Pyatov', 'Directora de Diseño','\\img\\Equipo\\equipo-anna.webp'),
(null, 'Tomas', 'Gallego Ruiz', 'Director de Operaciones (COO)','\\img\\Equipo\\equipo-tomas.webp'),
(null, 'Valeria', 'Perez Sanchez', 'Gerente de Recursos Humanos','\\img\\Equipo\\equipo-valeria.webp'),
(null, 'Ismael', 'Campos Gallego', 'Director General','\\img\\Equipo\\equipo-ismael.webp');


delete from blog;

INSERT INTO blog 
(blog_id, creado_en, autor, titulo, texto_corto, texto, foto_url)
VALUES
(null, current_date(), 'Christopher Wilsom', 'Salva el Mediterráneo',
'Nuestro mar está sobreexplotado, contaminado por vertidos y sofocado por un tráfico marítimo y turismo excesivos. 
¡Protección para el Mediterráneo Ya!',
'El Mediterráneo, el Mare Nostrum, no sólo es la cuna de antiguas civilizaciones y uno de los lugares más concurridos del planeta, sino también una de las áreas más importantes para la biodiversidad marina en nuestro planeta.<br><br>
Aunque representa menos del 1% de la superficie de los océanos del planeta, este mar alberga 1 de cada 10 especies marinas, de las que el 28% son únicas. Entre otras destacan las poblaciones residentes de 8 especies de cetáceos, además de poblaciones de tortuga boba y verde, foca monje y más de 70 especies de tiburones y rayas.<br><br>
<h2>El Mar Más Contaminado del Mundo</h2>
Pero también se trata de uno de los mares más amenazados y que sufren las mayores presiones por parte del ser humano. Los 200 millones de turistas anuales que visitan la costa mediterránea generan grandes presiones urbanísticas en la costa, contribuyen al incremento de la contaminación y de los vertidos de plásticos al mar e impiden que las tortugas marinas puedan hacer sus nidos en sus áreas habituales.<br><br>
El Mediterráneo es el mar más contaminado del mundo y está considerado la sexta zona de mayor acumulación de residuos marinos, concentrando el 7% de los microplásticos del planeta. Esto es un grave problema para todo el ecosistema y para especies tan emblemáticas como tortugas o cetáceos que pueden al ingerir grandes trozos de plásticos.<br><br>
<h2>Víctimas de las Redes Fantasma</h2>
Además, son vícitmas de las llamadas redes fantasma, restos de redes y aparejos de pesca abandonados en las que se enredan distintas especies, lo que provocan la muerte. Globalmente el 45% de los mamíferos marinos, el 21% de las aves marinas y todas las especies de tortugas marinas se han visto afectadas por estos desechos marinos. La intensa actividad pesquera también produce un grave impacto en muchas especies: el 75% de las pesquerías evaluadas están sobreexplotadas.<br><br>
<h2>Trampa Mortal para los Cetáceos</h2>
El Mediterráneo concentra el 25% del tráfico marítimo mundial, lo que supone graves daños para los mamíferos marinos (ruido, colisiones, molestias etc.) Un nivel de tráfico que se ha duplicado desde 2002. Este aumento ha disparado el número de pasajeros de cruceros en Mediterráneo de 8,7 a 30 millones en tan solo una década. El turismo de lujo también está sofocando nuestros mares: más de la mitad de los superyates del mundo surcan las aguas del Mediterráneo cada verano con un incremento de las necesidades de infraestructuras en la costa.<br><br>
Los resultados de todas estas presiones son realmente dramáticos. Desde ballenas que son golpeadas por barcos, tortugas que ingieren plástico y compiten con los turistas en sus playas de anidación, hasta tiburones amenazados por la sobrepesca.<br><br>
Como consecuencia en los últimos 50 años, las poblaciones de mamíferos marinos se han reducido en un 41%, solo quedan unas 400 focas monjes en estas aguas y las poblaciones de rayas y tiburones han disminuido drásticamente por capturas accidentales, uso de redes de deriva ilegales, degradación de sus hábitats o plásticos. De las 73 especies que viven en el Mediterráneo más de la mitad están en peligro y la situación parece estar empeorando: el estado de once de estas especies se ha deteriorado en la última década y veinte especies ya están clasificadas en peligro crítico.<br><br>
<h2>Como una Sopa</h2>
El mar Mediterráneo está sufriendo de manera muy directa el impacto del cambio climático y se calienta un 20% más rápido que la media mundial. Desde zonas más cálidas ya han aparecido al menos 1.000 especies invasoras que desplazan a las autóctonas y destruyen hábitats importantes.<br><br>
<h2>Mediterráneo Protegido Ya</h2>
Solo el 1.27% del Mediterráneo está protegido de una forma efectiva, mientras que los acuerdos internacionales establecen un mínimo de un 10% y los principales científicos del mundo recomiendan que, al menos, el 30% del mar debería estar protegido a través de espacios marinos protegidos y otras medidas de conservación y gestión de los ecosistemas más vulnerables.<br><br>
<h2>Conocemos la Solución</h2>
Con nuestro trabajo demostramos que la protección de los mares es una solución posible y necesaria. Además de luchar contra la contaminación por plásticos y promover la pesca sostenible, desde WWF estamos impulsando la creación de una red de áreas protegidas donde las especies pueden encontrar refugio y recuperar sus poblaciones, donde actividades como la pesca sean sostenibles y donde el tráfico marino no cause daños a la fauna marina. Las Reservas Marinas de Tagomago, de las Islas Medas, de Tabarca, de Columbretes, el Parque Nacional de Cabrera, entre otros muchos casos demuestran que es posible.<br><br>
El Mediterráneo nos está llamando y pidiendo ayuda urgente. Lo estamos asfixiando cada vez más. Tenemos que actuar ya.<br><br>
Firma nuestra petición a la Ministra para la Transición Ecológica para conseguir la protección efectiva de al menos el 30 por ciento del mar Mediterráneo para el 2030.<br><br>
Ayúdanos a salvar el mar Mediterráneo.',
'\\img\\Blog\\mediterráneo.jpg'
);

INSERT INTO blog 
(blog_id, creado_en, autor, titulo, texto_corto, texto, foto_url)
VALUES
(null, current_date(), 'Phillips White', 'Agua para Todos: Transformando Vidas en Karamoja',
'"Agua para Todos: Transformando Vidas en Karamoja" con el objetivo de proporcionar acceso a agua potable segura en una de las regiones más necesitadas de África Oriental.
Esta iniciativa está mejorando la salud y el bienestar de las comunidades locales',
'En muchas regiones del mundo, el acceso al agua potable sigue siendo un lujo, no una norma. En el corazón de África Oriental, específicamente en la región de Karamoja en Uganda, la escasez de agua limpia ha sido un desafío perpetuo para las comunidades locales. La falta de acceso a agua potable ha resultado en graves problemas de salud, baja productividad y un ciclo de pobreza difícil de romper.<br><br>
Consciente de esta situación, la empresa Conscious Craft Co. ha tomado medidas decisivas para cambiar esta realidad.<br><br>
<h2>La Situación en Karamoja</h2>
Karamoja es una región árida y semiárida que sufre de condiciones climáticas extremas. La temporada de lluvias es breve y las fuentes de agua son escasas.<br><br>
Tradicionalmente, las comunidades han dependido de ríos estacionales y pozos poco profundos que se secan rápidamente. Esta situación ha llevado a la propagación de enfermedades transmitidas por el agua, como la diarrea, el cólera y la fiebre tifoidea, afectando desproporcionadamente a los niños pequeños y a las personas mayores.<br><br>
<h2>Iniciativa de Conscious Craft Co.</h2>
Hace dos años, Conscious Craft Co. lanzó un ambicioso proyecto en Karamoja con el objetivo de proporcionar acceso a agua potable segura y sostenible. La iniciativa se centró en tres pilares principales:<br><br>
<h3>Construcción de Pozos y Sistemas de Captación de Agua de Lluvia:</h3>
<ul>
    <li>Se perforaron más de 50 pozos profundos en las aldeas más necesitadas, equipándolos con bombas manuales y eléctricas para facilitar el acceso al agua.</li>
    <li>Se instalaron sistemas de captación de agua de lluvia en escuelas y centros de salud, asegurando un suministro constante durante la temporada seca.</li>
</ul>
<h3>Educación y Concienciación Comunitaria:</h3>
<ul>
    <li>Se implementaron programas educativos para enseñar a las comunidades sobre la importancia de la higiene y el saneamiento.</li>
    <li>Se realizaron talleres sobre el mantenimiento de las instalaciones de agua y la gestión de los recursos hídricos.</li>
</ul>
<h3>Sostenibilidad y Mantenimiento:</h3>
<ul>
    <li>Se establecieron comités de gestión del agua en cada aldea, capacitando a los miembros locales para el mantenimiento regular de los pozos y sistemas de captación.</li>
    <li>Se promovió el uso de tecnologías sostenibles, como las bombas solares, para reducir la dependencia de fuentes de energía no renovables.</li>
</ul>
<h2>Impacto del Proyecto</h2>
Después de dos años de trabajo incansable, los resultados del proyecto han sido notables. Se estima que aproximadamente el 65% de la población en Karamoja ahora tiene acceso a agua potable segura, lo que representa una mejora significativa desde el inicio del proyecto. Aquí hay algunos de los impactos más destacados:<br><br>
<ul>
    <li><b>Mejora en la Salud Pública:</b> Las enfermedades transmitidas por el agua han disminuido en un 50%, lo que ha resultado en una reducción de las tasas de mortalidad infantil y una mejora general en la salud de la comunidad.</li>
    <li><b>Aumento en la Productividad y la Educación:</b> Las mujeres y los niños, que solían caminar largas distancias para recoger agua, ahora tienen más tiempo para dedicarse a la educación y actividades productivas. La asistencia escolar ha aumentado en un 40%.</li>
    <li><b>Empoderamiento Comunitario:</b> Los comités de gestión del agua han empoderado a las comunidades locales, dándoles las herramientas y el conocimiento necesarios para mantener sus sistemas de agua. Esto ha fomentado un sentido de propiedad y responsabilidad.</li>
</ul>
<h2>Historias de Éxito</h2>
<h3>Aminas Journey:</h3>
Amina, una madre de tres hijos, solía caminar más de 10 kilómetros todos los días para recoger agua de un río contaminado. Desde la instalación de un pozo en su aldea, Amina y sus hijos tienen acceso a agua limpia a solo unos pasos de su casa. "Ahora, mis hijos pueden ir a la escuela todos los días y ya no están enfermos por beber agua sucia", dice Amina con una sonrisa.<br><br>
<h3>La Escuela Primaria de Lokapel:</h3>
La instalación de un sistema de captación de agua de lluvia en la Escuela Primaria de Lokapel ha transformado la vida de sus estudiantes. Anteriormente, los niños perdían clases debido a enfermedades relacionadas con el agua. Hoy, la escuela cuenta con un suministro constante de agua potable, lo que ha mejorado la asistencia y el rendimiento académico. "La salud de nuestros estudiantes ha mejorado significativamente, y estamos viendo mejores resultados en sus estudios", comenta el director de la escuela.<br><br>
<h2>Mirando Hacia el Futuro</h2>
Conscious Craft Co. no se detiene aquí. Los planes futuros incluyen la expansión del proyecto a otras regiones necesitadas y la implementación de nuevas tecnologías para mejorar aún más la eficiencia y sostenibilidad de los sistemas de agua. Además, la empresa planea continuar con sus programas de educación y concienciación para asegurar que las comunidades no solo tengan acceso a agua limpia, sino que también comprendan la importancia de mantenerla.<br><br>
El proyecto de agua potable de Conscious Craft Co. en Karamoja es un ejemplo inspirador de cómo una empresa comprometida puede tener un impacto profundo y duradero en la vida de las personas. A través de su dedicación y esfuerzo, están transformando comunidades y construyendo un futuro más saludable y sostenible para todos.',
'\\img\\Blog\\historias-blog.jpg'
);

INSERT INTO blog 
(blog_id, creado_en, autor, titulo, texto_corto, texto, foto_url)
VALUES
(null, current_date(), 'Marcos Vazquez Sanchez', 'Renacimiento Agrícola en Xochimilco: Sostenibilidad Después del Desastre',
'En Xochimilco, la agricultura sostenible está transformando la región tras desastres naturales. Técnicas regenerativas y capacitación comunitaria están ayudando a los agricultores locales a recuperar sus tierras y asegurar un futuro próspero.',
'<p>En la región de Xochimilco, una zona rural de México que ha enfrentado desastres naturales recurrentes, como huracanes e inundaciones,
la empresa Conscious Craft Co. ha emprendido una misión para transformar las vidas de los agricultores locales a través de la agricultura sostenible.</p>
<p>Esta región, conocida por sus fértiles tierras, ha sufrido una degradación significativa debido a los efectos devastadores del cambio climático.
Sin embargo, con el apoyo y las iniciativas de Conscious Craft Co., la comunidad está experimentando un renacimiento agrícola.</p>

<h2>Desafíos en Xochimilco</h2>
<p>Xochimilco, una región rica en historia y cultura agrícola, ha visto sus tierras afectadas por desastres naturales que han devastado cultivos y dejado a muchas familias sin sustento.
Las inundaciones han erosionado el suelo y los huracanes han destruido infraestructuras críticas, haciendo que la agricultura tradicional se vuelva insostenible.
La pérdida de biodiversidad y el agotamiento de los recursos naturales han exacerbado estos problemas, dejando a los agricultores locales en una situación precaria.</p>

<h2>Iniciativas de Conscious Craft Co.</h2>
<p>Para abordar estos desafíos, Conscious Craft Co. ha implementado una serie de proyectos innovadores enfocados en la sostenibilidad y la resiliencia agrícola.
Estos proyectos no solo buscan restaurar la productividad de las tierras, sino también empoderar a las comunidades locales para que puedan enfrentar y adaptarse a los cambios climáticos futuros.</p>

<h3>Técnicas de Agricultura Regenerativa</h3>
<p>Conscious Craft Co. ha introducido técnicas de agricultura regenerativa que restauran la salud del suelo y aumentan la biodiversidad. Entre estas técnicas se incluyen:</p>
<ul>
    <li><strong>Cultivos de cobertura:</strong> Plantar cultivos que protegen y mejoran la calidad del suelo, previniendo la erosión y mejorando la retención de agua.</li>
    <li><strong>Rotación de cultivos:</strong> Alternar diferentes tipos de cultivos en las mismas tierras para mejorar la fertilidad del suelo y reducir la aparición de plagas y enfermedades.</li>
    <li><strong>Compostaje:</strong> Utilizar desechos orgánicos para crear compost, que se utiliza como fertilizante natural, mejorando la estructura y la fertilidad del suelo.</li>
</ul>

<h3>Infraestructura Resiliente</h3>
<p>Se ha trabajado en la construcción y mejora de infraestructuras agrícolas que son resistentes a desastres naturales. Esto incluye:</p>
<ul>
    <li><strong>Sistemas de riego eficientes:</strong> Instalación de sistemas de riego por goteo que utilizan el agua de manera más eficiente, asegurando que los cultivos reciban la cantidad necesaria sin desperdiciar recursos.</li>
    <li><strong>Terrazas agrícolas:</strong> Creación de terrazas para evitar la erosión del suelo en áreas inclinadas, permitiendo un mejor manejo del agua y reduciendo la pérdida de suelo fértil.</li>
</ul>

<h3>Educación y Capacitación</h3>
<p>Uno de los pilares del proyecto es la educación. Conscious Craft Co. ha organizado talleres y programas de capacitación para los agricultores locales,
enseñándoles prácticas agrícolas sostenibles y el uso de nuevas tecnologías. Estos talleres incluyen:</p>
<ul>
    <li><strong>Manejo de cultivos sostenibles:</strong> Entrenamiento en técnicas agrícolas sostenibles que pueden mejorar la producción y la calidad de los cultivos.</li>
    <li><strong>Uso de tecnologías:</strong> Capacitación en el uso de herramientas y tecnologías modernas que pueden facilitar el trabajo agrícola y mejorar los rendimientos.</li>
</ul>

<h3>Incorporación de Energías Renovables</h3>
<p>Para reducir la dependencia de combustibles fósiles, se han incorporado sistemas de energía renovable en las operaciones agrícolas:</p>
<ul>
    <li><strong>Paneles solares:</strong> Instalación de paneles solares en las granjas para proporcionar energía limpia y sostenible, reduciendo los costos operativos y el impacto ambiental.</li>
    <li><strong>Bombas de agua solares:</strong> Utilización de bombas de agua alimentadas por energía solar para el riego, asegurando un suministro constante de agua sin depender de fuentes de energía no renovables.</li>
</ul>

<h2>Impacto y Resultados</h2>
<p>Después de dos años de implementación, los proyectos de Conscious Craft Co. en Xochimilco han mostrado resultados prometedores:</p>
<ul>
    <li><strong>Aumento en la Productividad:</strong> Los agricultores han visto un aumento del 30% en la productividad de sus cultivos, gracias a las técnicas regenerativas y los sistemas de riego eficientes.</li>
    <li><strong>Mejora en la Calidad del Suelo:</strong> La salud del suelo ha mejorado significativamente, con una mayor retención de agua y un aumento en la materia orgánica, lo que ha llevado a cultivos más saludables y resistentes.</li>
    <li><strong>Empoderamiento Comunitario:</strong> Más de 200 agricultores locales han recibido capacitación, empoderándolos con el conocimiento y las herramientas necesarias para mantener prácticas agrícolas sostenibles a largo plazo.</li>
    <li><strong>Resiliencia ante Desastres:</strong> La infraestructura mejorada y las prácticas sostenibles han hecho que las comunidades agrícolas sean más resilientes ante futuros desastres naturales.</li>
</ul>

<h2>Testimonios</h2>
<h3>José Martínez, un agricultor local, comparte su experiencia:</h3>
<p>"Antes, cada temporada de lluvias era una lucha. Perdíamos muchos cultivos y no sabíamos cómo recuperarnos. Gracias a los talleres y al apoyo de Conscious Craft Co., ahora sabemos cómo proteger nuestras tierras y cultivos. Mis hijos tienen un futuro mejor, y estamos preparados para enfrentar cualquier desafío que venga".</p>

<h3>María González, otra beneficiaria del proyecto, dice:</h3>
<p>"La instalación de los sistemas de riego por goteo ha cambiado todo para nosotros. Ahora podemos cultivar más con menos agua, y la calidad de nuestros productos ha mejorado. Estamos muy agradecidos por el apoyo y la capacitación que hemos recibido".</p>

<h2>Mirando Hacia el Futuro</h2>
<p>Conscious Craft Co. está comprometida a continuar su trabajo en Xochimilco y expandir sus proyectos a otras regiones afectadas por el cambio climático y desastres naturales. La visión a largo plazo es crear un modelo de agricultura sostenible que pueda replicarse en otras partes del mundo, asegurando que las comunidades rurales no solo sobrevivan, sino que prosperen.</p>

<p>A través de estas iniciativas, Conscious Craft Co. está demostrando que la agricultura sostenible es una herramienta poderosa para alimentar a las comunidades, proteger el medio ambiente y construir un futuro más resiliente y equitativo.</p>',
'\\img\\Blog\\inundaciones.jpg'
);

drop table contenido_web;