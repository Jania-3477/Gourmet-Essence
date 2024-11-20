
INSERT INTO categorias (nombre, descripcion) VALUES
('Aceites', 'Aceites de oliva extra virgen, aceites aromatizados y más'),
('Dulces', 'Chocolates, caramelos, galletas y postres gourmet'),
('Ibéricos', 'Jamones ibéricos, chorizos y otros productos ibéricos'),
('Bebidas', 'Vinos, cervezas y otras bebidas artesanales'),
('Snacks', 'Aperitivos, frutos secos, chips y más');


INSERT INTO subcategorias (id_categoria, nombre, descripcion) VALUES
(1, 'Aceite de Oliva', 'Aceite de oliva virgen extra y productos derivados'),
(2, 'Chocolate', 'Chocolate oscuro, blanco y de leche gourmet'),
(3, 'Jamon Ibérico', 'Jamón ibérico de bellota, paleta y más'),
(4, 'Cerveza', 'Cervezas artesanales y premium de distintas regiones'),
(5, 'Frutos secos', 'Almendras, nueces, pistachos, y más');


INSERT INTO productos (nombre, descripcion, precio, categoria, subcategoria, imagen, stock) VALUES
('Aceite de Oliva Extra Virgen', 'Aceite de oliva de primera prensa con sabor suave', 15.50, 'Aceites', 'Aceite de Oliva', '/images/aceite.jpg', 50),
('Chocolate Oscuro', 'Chocolate 70% cacao, ideal para postres y degustación', 9.99, 'Dulces', 'Chocolate', '/images/chocolate.jpg', 100),
('Jamon Ibérico de Bellota', 'Jamón ibérico de bellota, curado por 24 meses', 50.00, 'Ibéricos', 'Jamon Ibérico', '/images/jamon.jpg', 20),
('Cerveza Artesanal IPA', 'Cerveza artesanal con un toque amargo', 12.00, 'Bebidas', 'Cerveza', '/images/cerveza.jpg', 30),
('Frutos Secos Mix', 'Mezcla de almendras, nueces y pistachos', 7.50, 'Snacks', 'Frutos secos', '/images/frutossecos.jpg', 200);


INSERT INTO usuarios (nombre, email, password, direccion, telefono) VALUES
('Juan Pérez', 'juanperez@email.com', 'hashed_password_1', 'Calle Ficticia 123, Ciudad', '1234567890'),
('Ana Gómez', 'anagomez@email.com', 'hashed_password_2', 'Avenida Real 456, Ciudad', '0987654321');


INSERT INTO pedidos (id_usuario, total, estado) VALUES
(1, 75.50, 'pendiente'),
(2, 30.00, 'enviado');


INSERT INTO productos_pedidos (id_pedido, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 2, 15.50),
(1, 2, 3, 9.99),
(2, 3, 1, 50.00);
