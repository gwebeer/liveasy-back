const Users = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

module.exports = {

    async registerUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = 'Função que registra o usuário, pegando sua senha e passando em hash.'
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/UserSchema"
                }
            }
            #swagger.responses[201] = { 
                schema: {
                    "name": "Irineu de Souza",
                    "email": "irineu@naosabe.com",
                    "birthDate": "14/01/2001",
                    "phone": "41999999999",
                    "password": "Minh@S3nh4",
                    "type": "customer",
                    "_id": "64d6c9cdb69b40992c075fcb",
                    "createdAt": "2023-08-11T23:52:45.777Z",
                    "updatedAt": "2023-08-11T23:52:45.777Z",
                    "__v": 0
                } 
            }
            #swagger.responses[400] = {
                schema: {
                    "errors": { },
                    "_message": "Error message.",
                    "name": "ExampleError",
                    "message": "Error message: some message error here"
                }
            }
        */
        try {
            request.body.password = await bcrypt.hash(request.body.password, 10)
            const registerUser = await Users.create(request.body);
            return response.status(201).json(registerUser);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
    async getUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = 'Função que busca por um ou mais usuários.'
            #swagger.responses[200] = { 
                schema: [{
                    "name": "Irineu de Souza",
                    "email": "irineu@naosabe.com",
                    "birthDate": "2001-01-14",
                    "phone": "41999999999",
                    "password": "Minh@S3nh4",
                    "type": "customer",
                    "_id": "64d6c9cdb69b40992c075fcb",
                    "createdAt": "2023-08-11T23:52:45.777Z",
                    "updatedAt": "2023-08-11T23:52:45.777Z",
                    "__v": 0
                }]
            }
            #swagger.responses[400] = {
                schema: {
                    "errors": { },
                    "_message": "Error message.",
                    "name": "ExampleError",
                    "message": "Error message: some message error here"
                }
            }
            #swagger.responses[404] = {
                schema: {
                    "message": "Usuário não encontrado",
                    "_return": null
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getUsers = await Users.find()
                if (getUsers == null) {
                    return response.status(404).json({ 'message': 'Usuários não encontrados.', '_return': getUsers})
                }
                return response.status(200).json(getUsers);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getUser = await Users.findOne({ _id: request.params.id })
                if (getUser == null) {
                    return response.status(404).json({ 'message': 'Usuário não encontrado', '_return': getUser})
                }
                return response.status(200).json(getUser);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    },

    async updateUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = 'Função que atualiza um usuário.'
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "name": "Irineu de Souza",
                    "email": "irineu@naosabe.com",
                    "birthDate": "14/01/2001",
                    "phone": "41999999999",
                    "password": "Minh@S3nh4",
                }
            }
            #swagger.responses[200] = { 
                schema: {
                    "_id": "64d6c9cdb69b40992c075fcb",
                    "name": "Irineu de Souza",
                    "email": "irineu@naosabe.com",
                    "birthDate": "14/01/2001",
                    "phone": "41999999999",
                    "password": "Minh@S3nh4",
                    "type": "customer",
                    "createdAt": "2023-08-11T23:52:45.777Z",
                    "updatedAt": "2023-08-11T23:52:45.777Z",
                    "__v": 0
                } 
            }
            #swagger.responses[400] = {
                schema: {
                    "errors": { },
                    "_message": "Error message.",
                    "name": "ExampleError",
                    "message": "Error message: some message error here"
                }
            }
        */
        try {
            request.body.password = await bcrypt.hash(request.body.password, 10)
            const updateUser = await Users.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateUser);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = 'Função que deleta um usuário.'
            #swagger.responses[200] =  {
                schema: {
                    "_id": "64e75508a75edaf5c1cd4ed4",
                    "name": "Irineu Silveira",
                    "email": "irineu@naosabe.com",
                    "birthDate": "2001-01-14",
                    "phone": "41999999999",
                    "password": "$2a$10$UuKWQDu0gwDkwf6TkrySjuRehAJwAhMVbutd7ZskbQ8e9XZvkqI0S",
                    "type": "customer",
                    "createdAt": "2023-08-24T13:03:04.137Z",
                    "updatedAt": "2023-08-24T13:07:45.205Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": { 
                        "stringValue": "example",
                        "valueType": "example",
                        "kind": "example",
                        "value": "example",
                        "path": "example",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Error message: some message error here"
                    },
                }
            }
            #swagger.responses[404] = { 
                schema: {

                }
            }
        */
        try {
            const deleteUser = await Users.findOneAndDelete({ _id: request.params.id });
            if (deleteUser == null) {
                return response.status(404).json({ 'message': 'O e-mail não está cadastrado.', '_return': deleteUser })
            } 
            return response.status(200).json(deleteUser);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async validateEmail(request, response) {
        /* 
            #swagger.tags = ["userController - Functions"]
            #swagger.description = 'Função que valida se o e-mail solicitado existe.'
            #swagger.responses[200] = { 
                schema: {
                    "message": 'O e-mail já está cadastrado.' 
                } 
            }
            #swagger.responses[400] = {
                schema: {
                    "errors": { },
                    "_message": "Error message.",
                    "name": "ExampleError",
                    "message": "Error message: some message error here"
                }
            }
            #swagger.responses[404] = { 
                schema: {
                    "message": 'O e-mail não está cadastrado',
                    "_return": "null"
                } 
            }
        */
        try {
            const validateEmail = await Users.findOne({ email: request.params.email })
            if (validateEmail == null) {
                return response.status(404).json({ "message": 'O e-mail não está cadastrado.', "_return": validateEmail })
            } 
            return response.status(200).json({ "message": 'O e-mail já está cadastrado.'})
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async authenticateUser(request, response) {
        /* 
            #swagger.tags = ["userController - Functions"]
            #swagger.description = 'Função que autentica o usuário e usa o JWT.'
            #swagger.responses[200] = { 
                schema: {
                    "msg": 'Login aprovado', 
                    "token": "<token>"
                } 
            }
            #swagger.responses[400] = {
                schema: {
                    "errors": { },
                    "_message": "Error message.",
                    "name": "ExampleError",
                    "message": "Error message: some message error here"
                }
            }
            #swagger.responses[403] = {
                schema: {
                    "msg": "A senha informada está inválida."
                }
            }
            #swagger.responses[404] = {
                schema: {
                    "msg": 'O e-mail informado não está cadastrado.'
                } 
            }
        */
        try {
            const userInfo = await Users.findOne({ email: request.params.email })
            if (!userInfo) {
                return response.status(404).json({ msg: 'O e-mail informado não está cadastrado.' })
            } else {
                const checkPassword = await bcrypt.compare(request.params.password, userInfo.password)
                if (!checkPassword) {
                    return response.status(403).json({ msg: "A senha informada está inválida." })
                }

                try {
                    const secret = process.env.SECRET_TOKEN
                    const token = jwt.sign({
                        id: userInfo._id,
                        type: userInfo.type
                    }, secret)

                    return response.status(200).json({ msg: 'Login aprovado', token: token })
                } catch (error) {
                    console.log("Erro ao gerar o token", error)
                    return response.status(400).json({ error });
                }
            }
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async forgotPassword(request, response) {
        /* 
            #swagger.tags = ["userController - Functions"]
            #swagger.description = 'Função que envia um e-mail para o usuário cadastrado que tenha esquecido sua senha.'
            #swagger.responses[200] = { 
                schema: {
                    
                } 
            }
            #swagger.responses[400] = {
                schema: {
                    "errors": { },
                    "_message": "Error message.",
                    "name": "ExampleError",
                    "message": "Error message: some message error here"
                }
            }
            #swagger.responses[404] = { 
                schema: { 
                    msg: 'O e-mail não está cadastrado.' 
                }
            }
            #swagger.responses[500] = {
                schema: {
                    "errors": { },
                    "_message": "Error message.",
                    "name": "ExampleError",
                    "message": "Error message: some message error here"
                }
            }
        */
        try {
            const user = await Users.findOne({ email: request.params.email });
            if (user == null) {
                return response.status(404).json({ msg: 'O e-mail não está cadastrado.' });
            } else {
                let mailtransporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: "bochoskifelipe@gmail.com",
                        pass: "hcllrfvkxbzophcy",   
                    }
                })

                let details = {
                    from: "bochoskifelipe@gmail.com",
                    to: user.email,
                    subject: "Redefinição de senha",
                    html: `<p>Olá, você solicitou a redefinição de senha.</p>
                <p>Clique <a href="http://localhost:3000/resetPassword">aqui</a> para redefinir sua senha.</p>`,
                }

                mailtransporter.sendMail(details, (err) => {
                    if (err) {
                        console.log("Ocorreu um erro ao enviar o e-mail de redefinição de senha.", err)
                        return response.status(500).json({ err })
                    } else {
                        console.log("E-mail de redefinição de senha enviado com sucesso.")
                        return response.status(200);
                    }
                })
            }
        } catch (error) {
            console.log('Erro ao pesquisar o e-mail:', error);
            return response.status(400).json({ error });
        }
    },

    async resetPassword(request, response) {
        /* 
            #swagger.tags = ["userController - Functions"]
            #swagger.description = 'Função usada par resetar a senha do usuário cadastrado.'
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "id": "",
                    "email": ""
                }
            }
            #swagger.responses[200] = { 
                schema: {
                    "resetPassword": {}
                } 
            }
            #swagger.responses[400] = {
                schema: {
                    "errors": { },
                    "_message": "Error message.",
                    "name": "ExampleError",
                    "message": "Error message: some message error here"
                }
            }
        */
        try {
            const userUpdate = await Users.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(userUpdate);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}