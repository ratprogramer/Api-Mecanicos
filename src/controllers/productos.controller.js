// controllers/productoController.js
const db = require('../config/db');

// Obtener todos los productos
exports.getAllProductos = (req, res) => {
    db.query('SELECT * FROM producto', (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching producto' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

exports.getProducto = (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM producto where id= ?`, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching producto' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

// Crear un nuevo producto
exports.createproducto = (req, res) => {
    const { nombre, descripcion, precio, stock, idTaller } = req.body;
    db.query('INSERT INTO producto (nombre, descripcion, precio, stock, idTaller) VALUES (?, ?, ?, ?, ?)', [nombre, descripcion, precio, stock, idTaller], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error creating producto' });
        }
        res.json({ "Producto creado con exito": nombre });
    });
};

// Actualizar un producto existente
exports.updateProducto = (req, res) => {
    const { id } = req.params;
    const { stock } = req.body;
    db.query('UPDATE producto SET stock = ? WHERE id = ?', [stock,id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error updating producto' });
        }
        res.json({ message: "Stock actualizado con exito" });
    });
};

// Eliminar un producto
exports.deleteProducto = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM producto WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error deleting producto' });
        }
        res.json({ message: 'Producto eliminado con exito' });
    });
};