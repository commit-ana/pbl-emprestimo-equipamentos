const { Emprestimo, Usuario, Equipamento } = require('../models');


//Configurando endpoints para Emprestimo
exports.listar = async(req,res)=>{

    const emprestimos = await Emprestimo.findAll({

        include:[
            {
                model:Usuario
            },
            {
                model:Equipamento
            }
        ]

    });


    res.json(emprestimos);

};


//Criar um novo emprestimo
exports.criar = async(req,res)=>{


    const { id_usuario, id_equipamento, data_retirada, data_prevista_devolucao } = req.body;

    const equipamento = await Equipamento.findByPk(id_equipamento);


    if(!equipamento){

        return res.status(404).json({
            mensagem:"Equipamento não encontrado"
        });

    }


// Verificar se o equipamento já está emprestado

    if(equipamento.status === "Emprestado"){

        return res.status(400).json({

            mensagem:"Equipamento já está emprestado"

        });

    }

// Criar o empréstimo
    const emprestimo = await Emprestimo.create({

        id_usuario,
        id_equipamento,
        data_retirada,
        data_prevista_devolucao

    });


// Atualizar o status do equipamento para "Emprestado"
    await equipamento.update({

        status:"Emprestado"

    });



    res.status(201).json(emprestimo);


};





exports.devolver = async(req,res)=>{


    const emprestimo = await Emprestimo.findByPk(
        req.params.id
    );



    if(!emprestimo){

        return res.status(404).json({

            mensagem:"Empréstimo não encontrado"

        });

    }



    await emprestimo.update({

        data_devolucao:new Date()

    });



    const equipamento = await Equipamento.findByPk(
        emprestimo.id_equipamento
    );



    await equipamento.update({

        status:"Disponível"

    });



    res.json({

        mensagem:"Equipamento devolvido"

    });


};