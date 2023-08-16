const Item = require('../models/itemModel');

module.exports = {
    
    async createItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que cria um novo item"
            #swagger.responses[201] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
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
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getItem = await Item.findOne({ _id: request.params.id })
                return response.status(200).json(getItem);
            } catch (error) {
                console.log("Erro ao obter o item requisitado", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getItem = await Item.find()
                return response.status(200).json(getItem);
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
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        try {
            const updateItem = await Item.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateItem);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
    async deleteItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que deleta um item"
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        try {
            const deleteItem = await Item.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteItem);
        } catch (error) {
            console.log("Erro ao deletar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
}