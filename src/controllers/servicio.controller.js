// controllers/servicioController.js
const db = require('../config/db');

// Obtener todos los Servicio
exports.getAllServicio = (req, res) => {
    db.query('SELECT * FROM servicio', (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching servicio' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

exports.getServicio = (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM servicio where id= ?`,[id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching servicio' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

// Crear un nuevo servicio
exports.createServicio = (req, res) => {
    const { precio, fecha, idCliente, idMecanico, idTaller } = req.body;
    db.query('INSERT INTO servicio (precio, fecha, idCliente, idMecanico, idTaller) VALUES (?, ?, ?, ?, ?)', [precio, fecha, idCliente, idMecanico, idTaller], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error creating servicio' });
        }
        res.json({ message: 'Servicio creado con exito' });
    });
};

// Actualizar un servicio existente
exports.updateServicio = (req, res) => {
    const { id } = req.params;
    const { precio } = req.body;
    db.query('UPDATE servicio SET precio = ? WHERE id = ?', [precio,id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error updating servicio' });
        }
        res.json({ message: 'Precio del servicio actualizado con exito' });
    });
};

// Eliminar un servicio
exports.deleteServicio = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM servicio WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error deleting servicio' });
        }
        res.json({ message: 'Servicio eliminado con exito' });
    });
};