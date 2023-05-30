const Users = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
        try {
            const userUpdate = await Users.findOneAndUpdate({ _id: req.params.id }, req.body);
            return res.json(userUpdate);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção Rooms", error)
            return res.status(400).json({ error });
        }
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
            const validEmail = await Users.findOne({ email: req.params.email })
            if (validEmail == null) {
                return res.status(200).json({ msg: 'O e-mail não está cadastrado ' })
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
}