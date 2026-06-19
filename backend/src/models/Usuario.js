const { DataTypes } = require('sequelize');
const sequelize = require('../database');


const Usuario = sequelize.define('Usuario', {

    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    setor: {
        type: DataTypes.STRING,
        allowNull: false
    }

});


module.exports = Usuario;