const Users = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

module.exports = {
    // Post User
    async postUser(req, res) {
        try {
            const userPost = await Users.create(req.body);
            return res.json({ userPost });
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    },

    // Delete User
    async deleteUser(req, res) {
        try {
            const userDelete = await Users.findOneAndDelete({ _id: req.params.id });
            return res.json(userDelete);
        } catch (error) {
            console.log("Erro ao deletar item da coleção Users", error)
            return res.status(400).json({ error });
        }
    },

    // Update User
    async updateUser(req, res) {
        if (req.params.key === "id") {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 10)
                const userUpdate = await Users.findOneAndUpdate({ _id: req.params.value }, req.body);
                return res.json(userUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return res.status(400).json({ error });
            }
        }

        if (req.params.key === "email") {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 10)
                const userUpdate = await Users.findOneAndUpdate({ email: req.params.value }, req.body);
                return res.json(userUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return res.status(400).json({ error });
            }
        }




        // try {
        //     const userUpdate = await Users.findOneAndUpdate({ _id: req.params.id }, req.body);
        //     return res.json(userUpdate);
        // } catch (error) {
        //     console.log("Erro ao atualizar item da coleção Rooms", error)
        //     return res.status(400).json({ error });
        // }
    },

    // Get User(s)
    async getUser(req, res) {
        if (req.params.id == "all") {
            try {
                const getUsers = await Users.find()
                return res.json(getUsers);
            } catch (error) {
                console.log("Erro ao obter todos os usuários", error)
                return res.status(400).json({ error });
            }
        } else {
            try {
                const getUsers = await Users.findOne({ _id: req.params.id })
                return res.json(getUsers);
            } catch (error) {
                console.log("Erro ao obter o detalhe do usuário", error)
                return res.status(400).json({ error });
            }
        }

    },


    // Register User
    async registerUser(req, res) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const userPost = await Users.create(req.body);
            return res.status(201).json({ userPost });
        } catch (error) {
            return res.status(400).json({ error: error });
        }
    },

    // Valida se o e-mail já está cadastrado no banco de dados
    async validEmail(req, res) {
        try {
<<<<<<< HEAD
            const validEmail = await Users.findOne({ email: req.params.email })
            if (validEmail == null) {
                return res.status(200).json({ msg: 'O e-mail não está cadastrado ' })
=======
            const deleteUser = await Users.findOneAndDelete({ _id: request.params.id });
            if (deleteUser == null) {
                return response.status(404).json({ 'message': 'O e-mail não está cadastrado.', '_return': deleteUser })
            } 
            return response.status(200).json(deleteUser);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    // functions
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
>>>>>>> d5da515605c73bff3018bd725929cdf727e8e123
            } else {
                return res.status(203).json({ msg: 'O e-mail já está cadastrado' })
            }
        } catch (error) {
            console.log("Email não registrado", error)
            return res.status(400).json({ error });
        }
    },

    // Autenticação de usuário
    async auth(req, res) {
        try {
            const userInfo = await Users.findOne({ email: req.params.email })
            if (!userInfo) {
                return res.status(203).json({ msg: 'O e-mail informado não está cadastrado.' })
            } else {
                const checkPassword = await bcrypt.compare(req.params.password, userInfo.password)
                if (!checkPassword) {
                    return res.status(203).json({ msg: "A senha informada está inválida." })
                }

                try {
                    const secret = process.env.SECRET_TOKEN
                    const token = jwt.sign({
                        id: userInfo._id,
                        type: userInfo.type
                    }, secret)

                    return res.status(200).json({ msg: 'Login aprovado', token: token })
                } catch (error) {
                    console.log("Erro ao gerar o token", error)
                    return res.status(400).json({ error });
                }


            }
        } catch (error) {
            console.log("Email não registrado", error)
            return res.status(400).json({ error });
        }
    },

<<<<<<< HEAD
    async sentEmail(req, res) {
=======
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
>>>>>>> d5da515605c73bff3018bd725929cdf727e8e123
        try {
            const validEmail = await Users.findOne({ email: req.params.email });
            if (validEmail == null) {
                return res.status(203).json({ msg: 'O e-mail não está cadastrado.' });
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
                    to: validEmail.email,
                    subject: "Redefinicao de senha",
                    html: `<p>Olá, você solicitou a redefinição de senha.</p>
                <p>Clique <a href="http://localhost:3000/resetPassword">aqui</a> para redefinir sua senha.</p>`,
                }

                mailtransporter.sendMail(details, (err) => {
                    if (err) {
                        console.log("Ocorreu um erro ao enviar o e-mail de redefinição de senha.", err)
                    } else {
                        console.log("E-mail de redefinição de senha enviado com sucesso.")
                    }
                })
            }
        } catch (error) {
            console.log('Erro ao pesquisar o e-mail:', error);
            return res.status(400).json({ error });
        }
    },

<<<<<<< HEAD
    async resetPassword(req, res) {
        if (req.params.key === "id") {
            try {
                const userUpdate = await Users.findOneAndUpdate({ _id: req.params.value }, req.body);
                return res.json(userUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return res.status(400).json({ error });
            }
        }

        if (req.params.key === "email") {
            try {
                const userUpdate = await Users.findOneAndUpdate({ email: req.params.value }, req.body);
                return res.json(userUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return res.status(400).json({ error });
=======
    async resetPassword(request, response) {
        /* 
            #swagger.tags = ["userController - Functions"]
            #swagger.description = 'Função usada par resetar a senha do usuário cadastrado.'
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "id": "",
                    "email": ""
                }
            }
            #swagger.responses[200] = { 
                schema: {
                    
                } 
>>>>>>> d5da515605c73bff3018bd725929cdf727e8e123
            }
        }


        try {
            const userUpdate = await Users.findOneAndUpdate({ _id: req.params.email }, req.body);
            return res.json(userUpdate);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção Rooms", error)
            return res.status(400).json({ error });
        }
    },

<<<<<<< HEAD
    //   async resetPassword(req, res) {
    // try {
    //     const userUpdate = await Users.findOneAndUpdate({ _id: req.params.email }, req.body);
    //     return res.json(userUpdate);
    // } catch (error) {
    //     console.log("Erro ao atualizar item da coleção Rooms", error)
    //     return res.status(400).json({ error });
    // }



    // try {
    //   const email = req.params.email;
    //   const password = req.params.senha;

    //   // Validar entrada
    //   if (!email || !password) {
    //     return res.status(400).json({ error: "O email e a senha são obrigatórios." });
    //   }

    //   // Verificar se o email está cadastrado e atualizar a senha
    //   const passUpdate = await Users.findOneAndUpdate(
    //     { email },
    //     { $set: { password: await bcrypt.hash(password, 10) } },
    //     { new: true }
    //   );

    //   if (!passUpdate) {
    //     return res.status(404).json({ error: "Usuário não encontrado." });
    //   }

    //   return res.json(passUpdate);
    // } catch (error) {
    //   console.log("Erro ao atualizar a senha", error);
    //   return res.status(500).json({ error: "Erro ao atualizar a senha." });
    // }
    //   }

=======
>>>>>>> d5da515605c73bff3018bd725929cdf727e8e123
}