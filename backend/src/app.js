const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./database');

require('./models');

const app = express();

app.use(cors());
app.use(express.json());


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


app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
});

