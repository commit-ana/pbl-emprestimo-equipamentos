const express = require('express');
const router = express.Router();

//Importando o controller para Usuario
const controller = require('../controllers/usuarioController');

//Endpoints para Usuario
router.get('/', controller.listar);

router.post('/', controller.criar);

router.get('/:id', controller.buscarPorId);


//Exportando o router para ser usado em app.js
module.exports = router;