const request = require('supertest');

const app = require('../src/app');

const sequelize = require('../src/database');

//Teste para a rota de equipamentos
describe("Teste API Equipamentos",()=>{


    test("Deve acessar rota de equipamentos", async()=>{


        const resposta = await request(app)
        .get('/equipamentos');


        expect(resposta.statusCode)
        .toBe(200);


    });

//Teste para criar um novo equipamento
    afterAll(async()=>{

        await sequelize.close();

    });


});