const Users = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

module.exports = {
    
    async createUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        try {
            const createUser = await Users.create(request.body);
            return response.json({ createUser });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async deleteUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        try {
            const deleteUser = await Users.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteUser);
        } catch (error) {
            console.log("Erro ao deletar item da coleção Users", error)
            return response.status(400).json({ error });
        }
    },

    async updateUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        if (request.params.key === "id") {
            try {
                request.body.password = await bcrypt.hash(request.body.password, 10)
                const updateUser = await Users.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(updateUser);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "email") {
            try {
                request.body.password = await bcrypt.hash(request.body.password, 10)
                const updateUser = await Users.findOneAndUpdate({ email: request.params.value }, request.body);
                return response.json(updateUser);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return response.status(400).json({ error });
            }
        }

        // try {
        //     const userUpdate = await Users.findOneAndUpdate({ _id: req.params.id }, req.body);
        //     return response.json(userUpdate);
        // } catch (error) {
        //     console.log("Erro ao atualizar item da coleção Rooms", error)
        //     return response.status(400).json({ error });
        // }
    },

    async getUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        if (request.params.id == "all") {
            try {
                const getUsers = await Users.find()
                return response.json(getUsers);
            } catch (error) {
                console.log("Erro ao obter todos os usuários", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getUsers = await Users.findOne({ _id: request.params.id })
                return response.json(getUsers);
            } catch (error) {
                console.log("Erro ao obter o detalhe do usuário", error)
                return response.status(400).json({ error });
            }
        }

    },

    async registerUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        try {
            request.body.password = await bcrypt.hash(request.body.password, 10)
            const registerUser = await Users.create(request.body);
            return response.status(201).json({ registerUser });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async validateEmail(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        try {
            const validateEmail = await Users.findOne({ email: request.params.email })
            if (validateEmail == null) {
                return response.status(200).json({ msg: 'O e-mail não está cadastrado ' })
            } else {
                return response.status(203).json({ msg: 'O e-mail já está cadastrado' })
            }
        } catch (error) {
            console.log("Email não registrado", error)
            return response.status(400).json({ error });
        }
    },

    async authenticateUser(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        try {
            const userInfo = await Users.findOne({ email: request.params.email })
            if (!userInfo) {
                return response.status(203).json({ msg: 'O e-mail informado não está cadastrado.' })
            } else {
                const checkPassword = await bcrypt.compare(request.params.password, userInfo.password)
                if (!checkPassword) {
                    return response.status(203).json({ msg: "A senha informada está inválida." })
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
            console.log("Email não registrado", error)
            return response.status(400).json({ error });
        }
    },

    async forgotPassword(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        try {
            const user = await Users.findOne({ email: request.params.email });
            if (user == null) {
                return response.status(203).json({ msg: 'O e-mail não está cadastrado.' });
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
            return response.status(400).json({ error });
        }
    },

    async resetPassword(request, response) {
        /* 
            #swagger.tags = ["userController"]
            #swagger.description = "Description here..."
        */
        if (request.params.key === "id") {
            try {
                const userUpdate = await Users.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(userUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "email") {
            try {
                const userUpdate = await Users.findOneAndUpdate({ email: request.params.value }, request.body);
                return response.json(userUpdate);
            } catch (error) {
                console.log("Erro ao atualizar item da coleção Rooms", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const userUpdate = await Users.findOneAndUpdate({ _id: request.params.email }, request.body);
            return response.json(userUpdate);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção Rooms", error)
            return response.status(400).json({ error });
        }
    },

    //   async resetPassword(request, res) {
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

}