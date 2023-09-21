import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

import UserModel from '../models/userModel.js';
import ProcessModel from '../models/processModel.js';

export default class UserService {

    async createUser(data) {        
        const userExists = await UserModel.find({
            email: data.email
        });
        if (userExists.length > 0) {
            throw Error("Esse usuário já existe.");
        }

        data.password = await bcrypt.hash(data.password, 10);
        const createUser = await UserModel.create(data);
        console.log("createUser", createUser);
        return createUser;
    }

    async getUser(data) {
        if (data.id == "all") {
            try {
                const getUsers = await UserModel.find();
                return getUsers;
            } catch (error) {
                throw Error("Houve problema ao buscar os usuários.");
            }
        } else {
            try {
                const getUser = await UserModel.findOne({ _id: data.id });
                return getUser;
            } catch (error) {
                throw Error("Houve problema ao buscar o usuário.");
            }
        }
    }

    async updateUser(data) {
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }
        const updateUser = await UserModel.findOneAndUpdate({ _id: data.id }, data);
        
        let infoCompare = {
            name: updateUser.name == data.name,
            email: updateUser.email == data.email,
            birthDate: updateUser.birthDate == data.birthDate,
            phone: updateUser.phone == data.phone
        }
        if (!Object.values(infoCompare).includes(false)) {
            return (updateUser, false);
        } 
        return (updateUser, true);
    }

    async deleteUser(data) {
        const deleteUser = await UserModel.findOneAndDelete({ _id: data.id });
        return deleteUser;
    }

    async validateEmail(data) {
        const validateEmail = await UserModel.findOne({ email: data.email });
        return validateEmail;
    }

    async authenticateUser(data) {
        const authenticateUser = await UserModel.findOne({ email: data.email })
        if (!authenticateUser) {
            return authenticateUser;
        } 
        const checkPassword = await bcrypt.compare(data.password, authenticateUser.password);
        if (!checkPassword) {
            return false;
        }
        const processes = await ProcessModel.find({ "user": authenticateUser._id, "status": { $ne: "Concluído"}})
        if (processes == null) {
            return 0
        }
        const secret = process.env.SECRET_TOKEN
        const token = jwt.sign({
            id: authenticateUser._id,
            type: authenticateUser.type,
            process: processes[0]._id
        }, secret)
        return token;
    }

    async forgotPassword(data) {
        const user = await UserModel.findOne({ email: data.email });

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

        let sentEmail;
        try {
            await mailtransporter.sendMail(details);
            sentEmail = true;
        } catch {
            sentEmail = false;
        }

        return sentEmail;
    }

    async resetPassword(data) {
        if (data.password == null || data.password.length == 0) {
            throw Error("A senha não foi inserida");
        }
        data.password = await bcrypt.hash(data.password, 10);
        const resetPassword = await UserModel.findOneAndUpdate({ _id: data.id }, data);
        return resetPassword;
    }
    
};