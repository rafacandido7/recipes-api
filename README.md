<div align="center">

# Recipes API

[![GitHub License](https://img.shields.io/github/license/seu-usuario/seu-repositorio)](https://github.com/seu-usuario/seu-repositorio/LICENSE)
[![NestJS](https://img.shields.io/badge/NestJS-10.0.0-E0234E)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-latest-105C7E)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-latest-336791)](https://www.postgresql.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1.3-007ACC)](https://www.typescriptlang.org/)

Um backend robusto e flexível para a sua aplicação de criação de receitas culinárias construído com Nest.js, Prisma, PostgreSQL e TypeScript.

</div>

---

## Visão Geral

### Funcionalidades

- Criar Receitas
- Listar Receitas
- Excluir Receitas
- Editar Receitas
- Adicionar ingredientes

## Tecnologias Utilizadas

- [Nest.js](https://nestjs.com/): Um framework de Node.js para construir aplicações escaláveis.
- [Prisma](https://www.prisma.io/): Uma camada de abstração de banco de dados para Node.js e TypeScript.
- [PostgreSQL](https://www.postgresql.org/): Um sistema de gerenciamento de banco de dados relacional poderoso.
- [TypeScript](https://www.typescriptlang.org/): Uma linguagem de programação tipada que se integra perfeitamente com o JavaScript.

## Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- PostgreSQL (v13+)

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/rafacandido7/recipes-api
cd recipes-api

```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente criando um arquivo .env na raiz do projeto (seguindo o .env.example)

4. Execute as migrações do banco de dados:

```bash
npm run migrate
# ou
yarn migrate
```

5. Inicie o servidor:

```bash
npm run start:dev
# ou
yarn start:dev
```

6. O servidor estará disponível em http://localhost:8080.

## Uso

## Contribuição
Sinta-se à vontade para contribuir com este projeto. Abra um pull request ou reporte problemas na seção de Issues.

## Licença
Este projeto está licenciado sob a Licença MIT.

