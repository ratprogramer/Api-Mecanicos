// controllers/userController.js
const db = require('../config/db');

// Obtener todos los usuarios
exports.getAllUsers = (req, res) => {
    db.query('SELECT * FROM usuario', (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching usuario' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

exports.getUser = (req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM usuario where id=${id}`, (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error fetching usuario' });
        }
        res.json({ error: false, status: 200, body: results });
    });
};

// Crear un nuevo usuario
exports.createUser = (req, res) => {
    const { nombre, telefono, cedula, email, password } = req.body;
    db.query('INSERT INTO usuario (nombre, telefono, cedula, email, password) VALUES (?, ?, ?, ?, ?)', [nombre, telefono, cedula, email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error creating uuario' });
        }
        res.json({ 'Usuario creado con exito': nombre });
    });
};

// Actualizar un usuario existente
exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    db.query('UPDATE usuario SET password = ? WHERE id = ?', [password, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error updating uuario' });
        }
        res.json({ 'Contraseña actualizada del usuario con id': id });
    });
};

// Eliminar un usuario
exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuario WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: true, message: 'Error deleting uuario' });
        }
        res.json({ 'Usuario eliminado': id});
    });
};