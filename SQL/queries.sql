SELECT * FROM productos;

SELECT * FROM productos WHERE categoria = 'Aceites';

SELECT * FROM productos WHERE precio BETWEEN 10 AND 30;

SELECT * FROM productos WHERE id = 1;

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE email = 'juanperez@email.com';

SELECT * FROM pedidos WHERE id_usuario = 1;

SELECT p.nombre, pp.cantidad, pp.precio_unitario 
FROM productos p
JOIN productos_pedidos pp ON p.id = pp.id_producto
WHERE pp.id_pedido = 1;

SELECT p.nombre, SUM(pp.cantidad) AS total_vendido
FROM productos p
JOIN productos_pedidos pp ON p.id = pp.id_producto
GROUP BY p.id;

SELECT estado FROM pedidos WHERE id = 1;
