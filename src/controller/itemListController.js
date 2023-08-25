const ItemList = require('../models/itemListModel');

module.exports = {
    
    async createItemList(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Função que o usuário cria um novo item personalizado."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/ItemListSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "title": "Sofá",
                    "priority": "Média",
                    "category": "",
                    "convenient": "Sala",
                    "value": 2500.00,
                    "bought": true,
                    "valuePaid": 2490.90,
                    "boughtDate": "2022-10-12",
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
            const createItemList = await ItemList.create(request.body);
            return response.status(201).json(createItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getItemList(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Função que o usuário busca por um ou vários itens personalizados."
            #swagger.responses[200] = {
                schema: [
                    {
                        "_id": "64de6f1c01d3e90f1dd55ce3",
                        "title": "Sofá",
                        "priority": "Média",
                        "category": "",
                        "convenient": "Sala",
                        "value": 2500.00,
                        "bought": true,
                        "valuePaid": 2490.90,
                        "boughtDate": "2022-10-12",
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
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi(ram) encontrado(s) item(ns) personalizado(s).", 
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getItemLists = await ItemList.find()
                if (getItemLists == null) {
                    return response.status(404).json({ "message": "Não foram encontrados itens personalizados.", "_return": getItemLists });
                }
                return response.status(200).json(getItemLists);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getItemList = await ItemList.findOne({ _id: request.params.id })
                if (getItemList == null) {
                    return response.status(404).json({ "message": "Não foi encontrado item personalizado.", "_return": getItemList });
                }
                return response.status(200).json(getItemList);
            } catch (error) {
                return response.status(404).json({ error });
            }
        }
    },
    
    async updateItemList(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Função que o usuário atualiza um item personalizado."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "title": "Sofá",
                    "priority": "Média",
                    "category": "",
                    "convenient": "Sala",
                    "value": 2500,
                    "bought": true,
                    "valuePaid": 2490.9,
                    "boughtDate": "2022-10-12",
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "title": "Sofá",
                    "priority": "Média",
                    "category": "",
                    "convenient": "Sala",
                    "value": 2500.00,
                    "bought": true,
                    "valuePaid": 2490.90,
                    "boughtDate": "2022-10-12",
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
            const updateItemList = await ItemList.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
    async deleteItemList(request, response) {
        /* 
            #swagger.tags = ["itemListController"]
            #swagger.description = "Função que o usuário deleta um item personalizado."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6f1c01d3e90f1dd55ce3",
                    "title": "Sofá",
                    "priority": "Média",
                    "category": "",
                    "convenient": "Sala",
                    "value": 2500.00,
                    "bought": true,
                    "valuePaid": 2490.90,
                    "boughtDate": "2022-10-12",
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
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi encontrado item personalizado.", 
                    "_return": "null"
                }
            }
        */
        try {
            const deleteItemList = await ItemList.findOneAndDelete({ _id: request.params.id });
            if (deleteItemList == null) {
                return response.status(404).json({ "message": "Não foi encontrado item personalizado.", "_return": deleteItemList });
            }
            return response.status(200).json(deleteItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
}