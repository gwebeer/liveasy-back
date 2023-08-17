const DefaultList = require('../models/defaultListModel');

module.exports = {
    
    async createItem(request, response) {
        /* 
            #swagger.tags = ["defaultListController"]
            #swagger.description = "Função que cria um novo item padrão"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/DefaultListSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "option": "Item",
                    "title": "Sofá",
                    "category": "Móveis",
                    "convenient": "Sala",
                    "_id": "64de6fdf956dcb624aca8b2f",
                    "createdAt": "2023-08-17T19:07:11.829Z",
                    "updatedAt": "2023-08-17T19:07:11.829Z",
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
            const createItem = await DefaultList.create(request.body);
            return response.status(201).json(createItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getItem(request, response) {
        /* 
            #swagger.tags = ["defaultListController"]
            #swagger.description = "Função que busca por um ou vários itens padrão"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6fdf956dcb624aca8b2f",
                    "option": "Item",
                    "title": "Sofá",
                    "category": "Móveis",
                    "convenient": "Sala",
                    "createdAt": "2023-08-17T19:07:11.829Z",
                    "updatedAt": "2023-08-17T19:07:11.829Z",
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
        if (request.params.id == "all") {
            try {
                const getItem = await DefaultList.find()
                return response.status(200).json(getItem);
            } catch (error) {
                console.log("Erro ao obter todos os itens", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getItem = await DefaultList.findOne({ _id: request.params.id })
                return response.status(200).json(getItem);
            } catch (error) {
                console.log("Erro ao obter o item requisitado", error)
                return response.status(400).json({ error });
            }
        } 
    },
    
    async updateItem(request, response) {
        /* 
            #swagger.tags = ["defaultListController"]
            #swagger.description = "Função que atualiza um item padrão"
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
            const updateItem = await DefaultList.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateItem);
        } catch (error) {
            console.log("Erro ao atualizar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
    async deleteItem(request, response) {
        /* 
            #swagger.tags = ["defaultListController"]
            #swagger.description = "Função que deleta um item padrão"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6fdf956dcb624aca8b2f",
                    "option": "Item",
                    "title": "Sofá",
                    "category": "Móveis",
                    "convenient": "Sala",
                    "createdAt": "2023-08-17T19:07:11.829Z",
                    "updatedAt": "2023-08-17T19:07:11.829Z",
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
            const deleteItem = await DefaultList.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteItem);
        } catch (error) {
            console.log("Erro ao deletar item da coleção DefaultList", error)
            return response.status(400).json({ error });
        }
    },
    
}