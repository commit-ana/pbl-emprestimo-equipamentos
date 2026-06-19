const Usuario = require('./Usuario');
const Equipamento = require('./Equipamento');
const Emprestimo = require('./Emprestimo');


// Usuario 1:N Emprestimo

Usuario.hasMany(Emprestimo,{
    foreignKey:'id_usuario'
});


Emprestimo.belongsTo(Usuario,{
    foreignKey:'id_usuario'
});



// Equipamento 1:N Emprestimo

Equipamento.hasMany(Emprestimo,{
    foreignKey:'id_equipamento'
});


Emprestimo.belongsTo(Equipamento,{
    foreignKey:'id_equipamento'
});


module.exports = {
    Usuario,
    Equipamento,
    Emprestimo
};