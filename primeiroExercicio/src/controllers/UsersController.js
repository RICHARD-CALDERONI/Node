//controller pode ter até 5 funções, caso seja necessário mais, deve ser observado criar outra controller

const AppError = require("../utils/AppError");

const sqlConnection = require("../database/sqlite");
const sqliteConnection = require("../database/sqlite");

/**
 * index - GET para listar vários registros.
 * show - GET para exibir um registro específico.
 * create - POST para criar um registro.
 * update - PUT para atualizar um registro.
 * delete - DELETE para remover registros.
 */

class usersController {
    async create(request, response) {
        const {name, email, password} = request.body;
        
        const database = await sqliteConnection();
        const checkUserExists = await database.get("select * from users where email = (?)", [email])

        if(checkUserExists){
            throw new AppError("este e-mail já está em uso.");
        }

        await database.run(
            "insert into users (name, email, password values (?, ?, ?)",
        [name, email, password]
        );

        return response.status(201).json();

    }
}

module.exports = usersController