const { Equipamento } = require('../models');

//Configurando endpoints para Equipamento
exports.listar = async (req,res)=>{

    const equipamentos = await Equipamento.findAll();

    res.json(equipamentos);

};


//Criar um novo equipamento
exports.criar = async(req,res)=>{

    const equipamento = await Equipamento.create(req.body);

    res.status(201).json(equipamento);

};


//Buscar um equipamento por ID
exports.buscarPorId = async(req,res)=>{

    const equipamento = await Equipamento.findByPk(req.params.id);

    res.json(equipamento);

};


//Atualizar um equipamento
exports.atualizar = async(req,res)=>{

    await Equipamento.update(
        req.body,
        {
            where:{
                id_equipamento:req.params.id
            }
        }
    );


    res.json({
        mensagem:"Equipamento atualizado"
    });

};


//Remover um equipamento
exports.remover = async(req,res)=>{

    await Equipamento.destroy({

        where:{
            id_equipamento:req.params.id
        }

    });


    res.json({
        mensagem:"Equipamento removido"
    });

};