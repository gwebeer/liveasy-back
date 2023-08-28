import { bcrypt } from 'bcryptjs';
import { jwt } from 'jsonwebtoken';
import { nodemailer } from 'nodemailer';

import UserModel from '../models/userModel.js';

export default class UserService {

    async createUser(data) {
        const userModel = new UserModel();
        
        const userExists = await userModel.find({
            email: data.email
        });
        if (userExists) {
            throw Error("Esse usuário já existe.");
        }

        data.password = await bcrypt.hash(data.password, 10);
        const createUser = await userModel.create(data);
        return createUser;
    }

    async getUser(data) {
        const userModel = new UserModel();
        
        if (data.id == "all") {
            try {
                const getUsers = await userModel.find();
                return getUsers;
            } catch (error) {
                throw Error("Houve problema ao buscar os usuários.");
            }
        } else {
            try {
                const getUser = await userModel.findOne({ _id: data.id });
                return getUser;
            } catch (error) {
                throw Error("Houve problema ao buscar o usuário.");
            }
        }
    }

    async updateUser(data) {
        const userModel = new UserModel();
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        const updateUser = await userModel.findOneAndUpdate({ _id: data.id }, data);
        return updateUser;
    }

    async deleteUser(data) {
        const userModel = new UserModel();
        
        const deleteUser = await userModel.findOneAndDelete({ _id: data.id });
        return deleteUser;
    }

    async validateEmail(data) {
        const userModel = new UserModel();
        
        const validateEmail = await userModel.findOne({ email: data.email });
        return validateEmail;
    }

    async authenticateUser(data) {
        const userModel = new UserModel();
        
        const authenticateUser = await userModel.findOne({ email: data.email })
        if (!authenticateUser) {
            return null;
        } 
        const checkPassword = await bcrypt.compare(data.password, authenticateUser.password);
        if (!checkPassword) {
            return false;
        }
        const secret = process.env.SECRET_TOKEN
        const token = jwt.sign({
            id: authenticateUser._id,
            type: authenticateUser.type
        }, secret)

        return token;
    }

    async forgotPassword(data) {
        const userModel = new UserModel();
        const user = await userModel.findOne({ email: data.email });

        if (user == null) {
            return user;
        } 
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
        <p>Clique <a href="http://localhost:3000/user/reset-password">aqui</a> para redefinir sua senha.</p>`,
        }

        mailtransporter.sendMail(details, (err) => {
            if (err) {
                return false;
            } 
            return true;
        })
    }

    async resetPassword(data) {
        const userModel = new UserModel();

        const resetPassword = await userModel.findOneAndUpdate({ _id: data.id }, data);
        return resetPassword;
    }

    
};