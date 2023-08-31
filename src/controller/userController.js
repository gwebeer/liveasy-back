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
        const userService = new UserService();
        try {
            const getUser = await userService.getUser(request.body);
            if (getUser.length == 0) {
                return response.status(404).json({ 'message': 'Usuário(s) não encontrado(s).', '_return': getUser})
            }
            return response.status(200).json(getUser);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async updateUser(request, response) {
        const userService = new UserService();
        try {
            const updateUser = await userService.updateUser(request.body);
            return response.status(200).json(updateUser);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async deleteUser(request, response) {
        const userService = new UserService();
        try {
            const deleteUser = await userService.deleteUser(request.body);
            if (deleteUser.length == 0) {
                return response.status(404).json({ 'message': 'O e-mail não está cadastrado.', '_return': deleteUser });
            } 
            return response.status(200).json(deleteUser);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async validateEmail(request, response) {
        const userService = new UserService();
        try {
            const validateEmail = await userService.validateEmail(request.body);
            if (validateEmail == null){
                return response.status(404).json({ "message": 'O e-mail não está cadastrado.', "_return": validateEmail });
            } 
            return response.status(200).json({ "message": 'O e-mail já está cadastrado.'});
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async authenticateUser(request, response) {
        const userService = new UserService();
        try {
            const authenticateUser = await userService.authenticateUser(request.body);
            if (authenticateUser == null) {
                return response.status(404).json({ msg: 'O e-mail informado não está cadastrado.' });
            }                
            if (authenticateUser == false) {
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
            if (user.length == 0) {
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