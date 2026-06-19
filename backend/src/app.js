const express = require('express');
const cors = require('cors');
require('dotenv').config();

//Importando as rotas
const emprestimoRoutes = require('./routes/emprestimos');
const equipamentoRoutes = require('./routes/equipamentos');
const usuarioRoutes = require('./routes/usuarios');

const sequelize = require('./database');

require('./models');

const app = express();

app.use(cors());
app.use(express.json());

//Registrando as rotas
app.use('/usuarios', usuarioRoutes);
app.use('/equipamentos', equipamentoRoutes);
app.use('/emprestimos', emprestimoRoutes);


app.get('/', (req,res)=>{
    res.json({
        mensagem:"API Empréstimo de Equipamentos funcionando!"
    });
});


sequelize.sync()
.then(()=>{
    console.log("Banco conectado");
})
.catch((erro)=>{
    console.log("Erro banco:", erro);
});

//Iniciando o servidor
if(process.env.NODE_ENV !== "test"){

    app.listen(3000, ()=>{
        console.log("Servidor rodando na porta 3000");
    });

}

//Exportando o app para ser usado nos testes
module.exports = app;

