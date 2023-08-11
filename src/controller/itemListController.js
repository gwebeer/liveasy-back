const ItemList = require('../models/itemListModel');

module.exports = {
    
    async createItem(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Description here..."
        */
        try {
            const createItem = await ItemList.create(request.body);
            return response.json({ createItem });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getItem(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Description here..."
        */
        try {
            const getItem = await ItemList.findOne({ _id: request.params.id })
            return response.json(getItem);
        } catch (error) {
            console.log("Erro ao obter o item requisitado", error)
            return response.status(400).json({ error });
        }
    },

    async getItems(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Description here..."
        */
        try {
            const getItem = await ItemList.find()
            return response.json(getItem);
        } catch (error) {
            console.log("Erro ao obter todos os itens", error)
            return response.status(400).json({ error });
        }
    },
    
    async updateItem(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Description here..."
        */
        try {
            const updateItem = await ItemList.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.json(updateItem);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
    async deleteItem(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Description here..."
        */
        try {
            const deleteItem = await ItemList.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteItem);
        } catch (error) {
            console.log("Erro ao deletar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
}