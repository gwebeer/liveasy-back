const CustomItem = require('../models/customItemModel');

module.exports = {
    
    async createCustomItem(request, response) {
        /* 
            #swagger.tags = ["customItemController"]
            #swagger.description = "Função que o usuário cria um novo item personalizado."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/CustomItemSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "title": "Sofá",
                    "priority": "Média",
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
            const createCustomItem = await CustomItem.create(request.body);
            return response.status(201).json(createCustomItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getCustomItem(request, response) {
        /* 
            #swagger.tags = ["customItemController"]
            #swagger.description = "Função que o usuário busca por um ou vários itens personalizados."
            #swagger.responses[200] = {
                schema: [
                    {
                        "_id": "64de6f1c01d3e90f1dd55ce3",
                        "title": "Sofá",
                        "priority": "Média",
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
                const getCustomItems = await CustomItem.find()
                if (getCustomItems == null) {
                    return response.status(404).json({ "message": "Não foram encontrados itens personalizados.", "_return": getCustomItems });
                }
                return response.status(200).json(getCustomItems);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getCustomItem = await CustomItem.findOne({ _id: request.params.id })
                if (getCustomItem == null) {
                    return response.status(404).json({ "message": "Não foi encontrado item personalizado.", "_return": getCustomItem });
                }
                return response.status(200).json(getCustomItem);
            } catch (error) {
                return response.status(404).json({ error });
            }
        }
    },
    
    async updateCustomItem(request, response) {
        /* 
            #swagger.tags = ["customItemController"]
            #swagger.description = "Função que o usuário atualiza um item personalizado."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "title": "Sofá",
                    "priority": "Média",
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
            const updateCustomItem = await CustomItem.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateCustomItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
    async deleteCustomItem(request, response) {
        /* 
            #swagger.tags = ["customItemController"]
            #swagger.description = "Função que o usuário deleta um item personalizado."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6f1c01d3e90f1dd55ce3",
                    "title": "Sofá",
                    "priority": "Média",
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
            const deleteCustomItem = await CustomItem.findOneAndDelete({ _id: request.params.id });
            if (deleteCustomItem == null) {
                return response.status(404).json({ "message": "Não foi encontrado item personalizado.", "_return": deleteCustomItem });
            }
            return response.status(200).json(deleteCustomItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
}