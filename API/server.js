const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gourmet_essence'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Rutas de la API

// Obtener todos los productos
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener productos' });
    }
    res.json(results);
  });
});

// Obtener un producto por ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  db.query('SELECT * FROM products WHERE id = ?', [productId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener el producto' });
    }
    res.json(results[0]);
  });
});

// Crear un nuevo producto
app.post('/api/products', (req, res) => {
  const { name, description, price, category, image_url } = req.body;
  const query = 'INSERT INTO products (name, description, price, category, image_url) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, description, price, category, image_url], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al agregar producto' });
    }
    res.status(201).json({ message: 'Producto creado', id: results.insertId });
  });
});

// Actualizar un producto
app.put('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const { name, description, price, category, image_url } = req.body;
  const query = 'UPDATE products SET name = ?, description = ?, price = ?, category = ?, image_url = ? WHERE id = ?';
  db.query(query, [name, description, price, category, image_url, productId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al actualizar producto' });
    }
    res.json({ message: 'Producto actualizado' });
  });
});

// Eliminar un producto
app.delete('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  db.query('DELETE FROM products WHERE id = ?', [productId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al eliminar producto' });
    }
    res.json({ message: 'Producto eliminado' });
  });
});


app.listen(port, () => {
  console.log(`Servidor API corriendo en http://localhost:${port}`);
});

