import UserService from '../services/userService.js';

export default class UserController {

    async registerUser(request, response) {
        try {
            const userService = new UserService();
            const registerUser = await userService.createUser(request.body);
            return response.status(201).json(registerUser);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
    async getUser(request, response) {
        try {
            const userService = new UserService();
            const getUser = await userService.getUser(request.params);
            if (getUser == null) {
                return response.status(404).json({ msg: 'Usuário(s) não encontrado(s).', '_return': getUser})
            }
            return response.status(200).json(getUser);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async updateUser(request, response) {
        try {
            const userService = new UserService();
            const updateUser = await userService.updateUser(request.body);
            if (updateUser[1] == false) {
                return response.status(204).json({msg: "Nenhum dado foi alterado"});
            }
            return response.status(200).json(updateUser[0]);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async deleteUser(request, response) {
        try {
            const userService = new UserService();
            const deleteUser = await userService.deleteUser(request.params);
            if (deleteUser == null) {
                return response.status(404).json({ msg: 'O e-mail não está cadastrado.', '_return': deleteUser });
            } 
            return response.status(200).json(deleteUser);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async validateEmail(request, response) {
        try {
            const userService = new UserService();
            const validateEmail = await userService.validateEmail(request.body);
            if (validateEmail == null){
                return response.status(404).json({ msg: 'O e-mail não está cadastrado.', "_return": validateEmail });
            } 
            return response.status(200).json({ msg: 'O e-mail já está cadastrado.'});
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async authenticateUser(request, response) {
        try {
            const userService = new UserService();
            const authenticateUser = await userService.authenticateUser(request.body);
            if (authenticateUser === null) {
                return response.status(404).json({ msg: 'O e-mail informado não está cadastrado.' });
            }                
            if (authenticateUser === true) {
                return response.status(403).json({ msg: 'Não foi possível encontrar um processo para esse usuário.'});
            }
            if (authenticateUser === false) {
                return response.status(401).json({ msg: "A senha informada está inválida." })
            }
            return response.status(200).json({ msg: 'Login aprovado', token: authenticateUser });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async forgotPassword(request, response) {
        try {
            const userService = new UserService();
            const user = await userService.forgotPassword(request.body);
            if (user == null) {
                return response.status(404).json({ msg: 'O e-mail não está cadastrado.' });
            } else {
                if (user == false) {
                    console.log("Ocorreu um erro ao enviar o e-mail de redefinição de senha.", err);
                    return response.status(500).json({ err })
                }
                console.log("E-mail de redefinição de senha enviado com sucesso.");
                return response.status(200);
            }
        } catch (error) {
            console.log('Erro ao pesquisar o e-mail:', error);
            return response.status(400).json({ error: error.message });
        }
    }

    async resetPassword(request, response) {
        try {
            const userService = new UserService();
            const userUpdate = await userService.resetPassword(request.body);
            if (userUpdate == null) {
                return response.status(404).json({ msg: 'O e-mail não está cadastrado.' });
            }
            return response.status(200).json(userUpdate);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

}