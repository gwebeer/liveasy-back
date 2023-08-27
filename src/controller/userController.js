const Users = require('../models/userModel');

module.exports = {

    async registerUser(request, response) {
        try {
            request.body.password = await bcrypt.hash(request.body.password, 10)
            const registerUser = await Users.create(request.body);
            return response.status(201).json(registerUser);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
    async getUser(request, response) {
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
        try {
            request.body.password = await bcrypt.hash(request.body.password, 10)
            const updateUser = await Users.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateUser);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteUser(request, response) {
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
        try {
            const userUpdate = await Users.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(userUpdate);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}