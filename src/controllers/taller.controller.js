// controllers/TallerController.js
const db = require('../config/db');

// Obtener todos los tallers
exports.getAllTaller = (req, res) => {
    db.query('SELECT * FROM taller', (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching taller' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

exports.getTaller = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM taller where id= ? ', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching taller' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

// Crear un nuevo taller
exports.createTaller = (req, res) => {
    const { nombre, direccion, password } = req.body;
    db.query('INSERT INTO taller ( nombre, direccion, password ) VALUES (?, ?, ?)', [ nombre, direccion, password ], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error creating uuario' });
        }
        res.json({ 'Exito al crear el taller ': nombre });
    });
};

// Actualizar un taller existente
exports.updateTaller = (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    db.query('UPDATE taller SET password = ? WHERE id = ?', [password, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error updating uuario' });
        }
        res.json({ message: 'Exito al actualizar la contraseña del taller'});
    });
};

// Eliminar un taller
exports.deleteTaller = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM taller WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error deleting uuario' });
        }
        res.json({ message: 'Taller eliminado con exito'});
    });
};