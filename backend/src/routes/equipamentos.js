const express = require('express');

const router = express.Router();

const controller = require('../controllers/equipamentoController');

//Endpoints para Equipamento
router.get('/', controller.listar);

router.post('/', controller.criar);

router.get('/:id', controller.buscarPorId);

router.put('/:id', controller.atualizar);

router.delete('/:id', controller.remover);

//Exportando o router para ser usado em app.js
module.exports = router;