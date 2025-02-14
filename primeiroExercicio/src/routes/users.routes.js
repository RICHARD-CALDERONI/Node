//importando router de dentro do express
const { Router } = require('express')

//importando controler e armazendando em uma const
const UsersController = require('../controllers/UsersController')

//incializando a função router e guardando dentro de um const
const usersRoutes = Router()

/*function myMiddleware (request, response, next){
    console.log("testando middlewar")
    if(!request.body.isAdmin){
        return response.json ({
            message: "user não autorizado"
        });
    }

    next()
}*/



//instanciando a classe controller
const usersController = new UsersController()


usersRoutes.post('/', usersController.create)

//expondo as rotas
module.exports = usersRoutes