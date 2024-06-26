// controllers/MecanicoController.js
const db = require('../config/db');

// Obtener todos los mecanicos
exports.getAllMecanicos = (req, res) => {
    db.query('SELECT * FROM mecanico', (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching mecanico' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

exports.getMecanico = (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM mecanico where id= ?`, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching mecanico' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

// Crear un nuevo mecanico
exports.createMecanico = (req, res) => {
    const { nombre, telefono, cedula, email, password, idTaller } = req.body;
    db.query('INSERT INTO mecanico (nombre, telefono, cedula, email, password, idTaller) VALUES (?, ?, ?, ?, ?, ?)', [nombre, telefono, cedula, email, password, idTaller], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error creating uuario' });
        }
        res.json({ message: 'Mecanico creado con exito' });
    });
};

// Actualizar un mecanico existente
exports.updateMecanico = (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    db.query('UPDATE mecanico SET password = ? WHERE id = ?', [password, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error updating uuario' });
        }
        res.json({ message: 'Mecanico actualizado con exito' });
    });
};

// Eliminar un mecanico
exports.deleteMecanico = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM mecanico WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error deleting uuario' });
        }
        res.json({  message: 'Mecanico eliminado con exito' });
    });
};