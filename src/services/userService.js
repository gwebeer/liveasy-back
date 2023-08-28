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
        
        
    }

    async forgotPassword(data) {
        const userModel = new UserModel();
        
    }

    async resetPassword(data) {
        const userModel = new UserModel();

        const resetPassword = await userModel.findOneAndUpdate({ _id: data.id }, data);
        return resetPassword;
    }

    
};