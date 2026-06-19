# Sistema de Empréstimo de Equipamentos

Projeto desenvolvido para a disciplina de **DevOps / Manutenção de Software**, com o objetivo de aplicar conceitos de desenvolvimento backend, banco de dados relacional, containers e automação de processos.

## Caso selecionado

**Caso 7 - Empréstimo de Equipamentos**

---

# Sobre o Projeto

O projeto consiste no desenvolvimento de uma API para gerenciamento de empréstimos de equipamentos.

A aplicação permite controlar usuários, equipamentos disponíveis e registros de empréstimos, garantindo organização e rastreabilidade dos equipamentos utilizados.

O sistema possui regras de negócio para controlar a disponibilidade dos equipamentos, permitindo que um equipamento seja emprestado somente quando estiver disponível e alterando seu status automaticamente durante empréstimos e devoluções.

---

# Funcionalidades

## Usuários

Permite:

* Cadastrar usuários
* Listar usuários
* Buscar usuário por identificador

Informações armazenadas:

* Nome
* Email
* Setor

## Equipamentos

Permite:

* Cadastrar equipamentos
* Listar equipamentos
* Buscar equipamentos
* Atualizar equipamentos
* Remover equipamentos

Informações armazenadas:

* Nome
* Categoria
* Patrimônio
* Status

## Empréstimos

Permite:

* Registrar empréstimos
* Consultar empréstimos realizados
* Realizar devoluções

Regras aplicadas:

* O equipamento precisa existir
* O equipamento precisa estar disponível
* Ao realizar empréstimo, o status muda para "Emprestado"
* Ao devolver, o status retorna para "Disponível"

---

# Tecnologias Utilizadas

## Backend

* Node.js
* Express.js
* Sequelize ORM

## Banco de Dados

* PostgreSQL

## Infraestrutura

* Docker
* Docker Compose
* PgAdmin

## Testes

* Jest
* Supertest

## CI/CD

* GitHub Actions

---

# Arquitetura do Projeto

A aplicação possui a seguinte estrutura:

```
pbl-emprestimo-equipamentos

├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── database.js
│   │
│   ├── tests
│   ├── Dockerfile
│   └── package.json
│
├── docs
│
├── docker-compose.yml
│
└── README.md
```

---

# Modelagem do Banco de Dados

O banco foi desenvolvido utilizando PostgreSQL.

## Entidades

### Usuário

Representa a pessoa responsável pelo empréstimo.

Atributos:

* id_usuario
* nome
* email
* setor

### Equipamento

Representa os equipamentos disponíveis.

Atributos:

* id_equipamento
* nome
* categoria
* patrimonio
* status

### Empréstimo

Representa a relação entre usuário e equipamento.

Atributos:

* id_emprestimo
* data_retirada
* data_prevista_devolucao
* data_devolucao

---

# Relacionamentos

Um usuário pode realizar vários empréstimos:

```
Usuário 1:N Empréstimo
```

Um equipamento pode participar de vários empréstimos ao longo do tempo:

```
Equipamento 1:N Empréstimo
```

---

# Executando o Projeto

## Pré-requisitos

Antes de iniciar, é necessário possuir instalado:

* Node.js
* Docker Desktop

---

# Executando com Docker Compose

Na raiz do projeto:

```bash
docker compose up --build
```

Após iniciar:

Backend:

```
http://localhost:3000
```

PgAdmin:

```
http://localhost:5050
```

---

# Acesso ao PgAdmin

Dados utilizados:

Usuário:

```
admin@email.com
```

Senha:

```
admin
```

Configuração do servidor PostgreSQL:

Host:

```
postgres
```

Porta:

```
5432
```

Banco:

```
emprestimos
```

Usuário:

```
postgres
```

Senha:

```
postgres
```

---

# Rotas da API

## Usuários

### Listar usuários

```
GET /usuarios
```

### Criar usuário

```
POST /usuarios
```

---

## Equipamentos

### Listar equipamentos

```
GET /equipamentos
```

### Criar equipamento

```
POST /equipamentos
```

### Atualizar equipamento

```
PUT /equipamentos/:id
```

### Remover equipamento

```
DELETE /equipamentos/:id
```

---

## Empréstimos

### Listar empréstimos

```
GET /emprestimos
```

### Criar empréstimo

```
POST /emprestimos
```

### Realizar devolução

```
PUT /emprestimos/:id/devolver
```

---

# Testes Automatizados

O projeto possui testes automatizados utilizando Jest e Supertest.

Para executar:

```bash
npm test
```

Os testes verificam o funcionamento das rotas da API.

---

# Pipeline CI/CD

Foi implementada uma pipeline utilizando GitHub Actions.

A cada alteração enviada ao repositório, o processo realiza:

1. Download do código
2. Configuração do ambiente Node.js
3. Instalação das dependências
4. Execução dos testes automatizados

O objetivo é garantir maior confiabilidade durante o desenvolvimento.

---

# Conclusão

O projeto apresenta uma solução completa para gerenciamento de empréstimos de equipamentos, utilizando boas práticas de desenvolvimento backend, banco de dados relacional, containers Docker, testes automatizados e integração contínua.

A aplicação demonstra a aplicação prática dos conceitos de DevOps e desenvolvimento de software.
