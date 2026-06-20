# Sistema de Empréstimo de Equipamentos — IESB

API REST para gerenciamento de empréstimos de equipamentos, permitindo controlar usuários, equipamentos disponíveis e registros de empréstimos e devoluções.

Projeto acadêmico de DevOps (PBL — Caso 7) do IESB.

---

# Funcionalidades

- Cadastro de usuários;
- Cadastro e gerenciamento de equipamentos;
- Registro de empréstimos;
- Registro de devoluções;
- Controle de disponibilidade dos equipamentos;
- Persistência em PostgreSQL;
- Testes automatizados da API.

---

# Tecnologias

| Camada | Stack |
|---|---|
| Backend | Node.js, Express |
| Banco | PostgreSQL |
| ORM | Sequelize |
| Infra | Docker, Docker Compose |
| Testes | Jest, Supertest |

---

# Arquitetura

```text
Cliente
   |
Backend API
(Node.js + Express)
   |
Sequelize ORM
   |
PostgreSQL
(Docker)
   |
PgAdmin
```

---

# Estrutura do projeto

```text
PBL-EMPRESTIMO-EQUIPAMENTOS/

├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── database.js
│   │
│   ├── tests/
│   ├── Dockerfile
│   └── package.json
│
├── .github/
│   └── workflows/
│
├── docker-compose.yml
└── README.md
```

---

# Executando com Docker

Na raiz do projeto:

```bash
docker compose up --build
```

Serviços:

| Serviço | URL |
|---|---|
| API | http://localhost:3000 |
| PgAdmin | http://localhost:5050 |

Para encerrar:

```bash
docker compose down
```

---

# Banco de Dados

Entidades principais:

### Usuário

- id_usuario
- nome
- email
- setor


### Equipamento

- id_equipamento
- nome
- categoria
- patrimonio
- status


### Empréstimo

- id_emprestimo
- data_retirada
- data_prevista_devolucao
- data_devolucao
- id_usuario
- id_equipamento

---

# API REST

## Usuários

```
GET /usuarios
POST /usuarios
```

## Equipamentos

```
GET /equipamentos
POST /equipamentos
PUT /equipamentos/:id
DELETE /equipamentos/:id
```

## Empréstimos

```
GET /emprestimos
POST /emprestimos
PUT /emprestimos/:id/devolver
```

---

# Testes

Executar:

```bash
cd backend
npm test
```

---

# CI/CD

Pipeline configurada com GitHub Actions para instalação das dependências e execução dos testes automaticamente.

---

# Licença

Projeto acadêmico — IESB / DevOps PBL Caso 7.
