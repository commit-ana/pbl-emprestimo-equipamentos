const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const Equipamento = sequelize.define('Equipamento', {


    id_equipamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },


    nome: {
        type: DataTypes.STRING,
        allowNull:false
    },


    categoria:{
        type: DataTypes.STRING,
        allowNull:false
    },


    patrimonio:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },


    status:{
        type: DataTypes.STRING,
        defaultValue:"Disponível"
    }


});


module.exports = Equipamento;