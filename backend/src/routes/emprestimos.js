const express = require('express');

const router = express.Router();

//Importando o controller para Emprestimo
const controller = require('../controllers/emprestimoController');


//Endpoints para Emprestimo
router.get('/', controller.listar);
router.post('/', controller.criar);
router.put('/:id/devolver', controller.devolver);


//Exportando o router para ser usado em app.js
module.exports = router;