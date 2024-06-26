const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const mecanicController = require('../controllers/mecanic.controller');
const tallerController = require('../controllers/taller.controller');
const servicioController = require('../controllers/servicio.controller');
const productosController = require('../controllers/productos.controller');

router.get('/usuarios', userController.getAllUsers);
router.get('/usuarios/:id', userController.getUser);
router.post('/usuarios', userController.createUser);
router.put('/usuarios/:id', userController.updateUser);
router.delete('/usuarios/:id', userController.deleteUser);

router.get('/taller', tallerController.getAllTaller);
router.get('/taller/:id', tallerController.getTaller);
router.post('/taller', tallerController.createTaller);
router.put('/taller/:id', tallerController.updateTaller);
router.delete('/taller/:id', tallerController.deleteTaller);

router.get('/producto', productosController.getAllProductos);
router.get('/producto/:id', productosController.getProducto);
router.post('/producto', productosController.createproducto);
router.put('/producto/:id', productosController.updateProducto);
router.delete('/producto/:id', productosController.deleteProducto);

router.get('/mecanicos', mecanicController.getAllMecanicos);
router.get('/mecanicos/:id', mecanicController.getMecanico);
router.post('/mecanicos', mecanicController.createMecanico);
router.put('/mecanicos/:id', mecanicController.updateMecanico);
router.delete('/mecanicos/:id', mecanicController.deleteMecanico);

router.get('/servicio', servicioController.getAllServicio);
router.get('/servicio/:id', servicioController.getServicio);
router.post('/servicio', servicioController.createServicio);
router.put('/servicio/:id', servicioController.updateServicio);
router.delete('/servicio/:id', servicioController.deleteServicio);



module.exports = router;



usuarios:
	getAll: localhost:4000/api/usuarios
	getOne: localhost:4000/api/usuarios/:id
	create: localhost:4000/api/usuarios
	update: localhost:4000/api/usuarios/:id
	delete: localhost:4000/api/usuarios/:id

taller:
	getAll: localhost:4000/api/taller
	getOne: localhost:4000/api/taller/:id
	create: localhost:4000/api/taller
	update: localhost:4000/api/taller/:id
	delete: localhost:4000/api/taller/:id
	
prducto:
	getAll: localhost:4000/api/producto
	getOne: localhost:4000/api/producto/:id
	create: localhost:4000/api/producto
	update: localhost:4000/api/producto/:id
	delete: localhost:4000/api/producto/:id
	
mecanicos:
	getAll: localhost:4000/api/mecanicos
	getOne: localhost:4000/api/mecanicos/:id
	create: localhost:4000/api/mecanicos
	update: localhost:4000/api/mecanicos/:id
	delete: localhost:4000/api/mecanicos/:id
	