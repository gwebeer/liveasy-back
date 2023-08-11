const Item = require('../models/itemModel');

module.exports = {
    
    async createItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que cria um novo item"
        */
        try {
            const createItem = await Item.create(request.body);
            return response.status(201).json({ createItem });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que busca por um ou vários itens"
        */
        if (request.params.id == "all") {
            try {
                const getItem = await Item.findOne({ _id: request.params.id })
                return response.json(getItem);
            } catch (error) {
                console.log("Erro ao obter o item requisitado", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getItem = await Item.find()
                return response.json(getItem);
            } catch (error) {
                console.log("Erro ao obter todos os itens", error)
                return response.status(400).json({ error });
            }
        }
    },
    
    async updateItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que atualiza um item"
        */
        try {
            const updateItem = await Item.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.json(updateItem);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
    async deleteItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que deleta um item"
        */
        try {
            const deleteItem = await Item.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteItem);
        } catch (error) {
            console.log("Erro ao deletar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
}