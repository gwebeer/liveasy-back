const DefaultList = require('../models/defaultListModel');

module.exports = {
    
    async createItem(request, response) {
        try {
            const createItem = await DefaultList.create(request.body);
            return response.json({ createItem });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getItem(request, response) {
        try {
            const getItem = await DefaultList.findOne({ _id: request.params.id })
            return response.json(getItem);
        } catch (error) {
            console.log("Erro ao obter o item requisitado", error)
            return response.status(400).json({ error });
        }
    },

    async getItems(request, response) {
        try {
            const getItem = await DefaultList.find()
            return response.json(getItem);
        } catch (error) {
            console.log("Erro ao obter todos os itens", error)
            return response.status(400).json({ error });
        }
    },
    
    async updateItem(request, response) {
        try {
            const updateItem = await DefaultList.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.json(updateItem);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
    async deleteItem(request, response) {
        try {
            const deleteItem = await DefaultList.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteItem);
        } catch (error) {
            console.log("Erro ao deletar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
}