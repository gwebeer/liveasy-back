const CustomItem = require('../models/customItemModel');

module.exports = {
    
    async createCustomItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que cria um novo item"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/ItemSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "title": "Sofá",
                    "priority": "Média",
                    "category": "Móveis",
                    "convenient": "Sala",
                    "value": "2500",
                    "bought": false,
                    "process": "64dc0f8167f66149a8d49f97",
                    "_id": "64de6f1c01d3e90f1dd55ce3",
                    "createdAt": "2023-08-17T19:03:56.306Z",
                    "updatedAt": "2023-08-17T19:03:56.306Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "errors": { },
                        "_message": "ErrorMessageExample",
                        "name": "ExampleError",
                        "message": "ErrorMessageExample: some message error here"
                    }
                }
            }
        */
        try {
            const createCustomItem = await CustomItem.create(request.body);
            return response.status(201).json(createCustomItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getCustomItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que busca por um ou vários itens"
            #swagger.responses[200] = {
                schema: [
                    {
                        "_id": "64de6f1c01d3e90f1dd55ce3",
                        "title": "Sofá",
                        "priority": "Média",
                        "category": "Móveis",
                        "convenient": "Sala",
                        "value": "2500",
                        "bought": false,
                        "process": "64dc0f8167f66149a8d49f97",
                        "createdAt": "2023-08-17T19:03:56.306Z",
                        "updatedAt": "2023-08-17T19:03:56.306Z",
                        "__v": 0
                    }
                ]
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "_id",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getCustomItem = await CustomItem.find()
                return response.status(200).json(getCustomItem);
            } catch (error) {
                console.log("Erro ao obter todos os itens", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getCustomItem = await CustomItem.findOne({ _id: request.params.id })
                return response.status(200).json(getCustomItem);
            } catch (error) {
                console.log("Erro ao obter o item requisitado", error)
                return response.status(400).json({ error });
            }
        }
    },
    
    async updateCustomItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que atualiza um item"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    
                }
            }
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "_id",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        try {
            const updateCustomItem = await CustomItem.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateCustomItem);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção SuggestionItem", error)
            return response.status(400).json({ error });
        }
    },
    
    async deleteCustomItem(request, response) {
        /* 
            #swagger.tags = ["itemController"]
            #swagger.description = "Função que deleta um item"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6f1c01d3e90f1dd55ce3",
                    "title": "Sofá",
                    "priority": "Média",
                    "category": "Móveis",
                    "convenient": "Sala",
                    "value": "2500",
                    "bought": false,
                    "process": "64dc0f8167f66149a8d49f97",
                    "createdAt": "2023-08-17T19:03:56.306Z",
                    "updatedAt": "2023-08-17T19:03:56.306Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "_id",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        try {
            const deleteCustomItem = await CustomItem.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteCustomItem);
        } catch (error) {
            console.log("Erro ao deletar item da coleção SuggestionItem", error)
            return response.status(400).json({ error });
        }
    },
    
}