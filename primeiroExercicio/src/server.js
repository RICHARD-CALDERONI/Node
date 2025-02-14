require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");

const express = require('express');

const routes = require('./routes');

migrationsRun();

//Criando a instância da aplicação
const app = express();

//Habilitando o parsemaneto do JSON
app.use(express.json());

//apontando as rotas
app.use(routes);


//tratamento de erro
app.use(( error, request, response, next ) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });

});

//indicando a porta para ser observada
const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))