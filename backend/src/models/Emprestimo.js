const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const Emprestimo = sequelize.define('Emprestimo', {


    id_emprestimo:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },


    data_retirada:{
        type:DataTypes.DATE,
        allowNull:false
    },


    data_prevista_devolucao:{
        type:DataTypes.DATE,
        allowNull:false
    },


    data_devolucao:{
        type:DataTypes.DATE
    }


});


module.exports = Emprestimo;