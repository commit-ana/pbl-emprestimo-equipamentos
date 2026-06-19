const { Usuario } = require('../models');

//Configurando endpoints para Usuario
exports.listar = async(req,res)=>{

    const usuarios = await Usuario.findAll();

    res.json(usuarios);

};


//Criar um novo usuario
exports.criar = async(req,res)=>{

    const usuario = await Usuario.create(req.body);

    res.status(201).json(usuario);

};


//Buscar um usuario por ID
exports.buscarPorId = async(req,res)=>{

    const usuario = await Usuario.findByPk(req.params.id);

    res.json(usuario);

};