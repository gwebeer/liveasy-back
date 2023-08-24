const PropertyItem = require('../models/propertyItemModel');

module.exports = {
    
    async createPropertyItem(request, response) {
        /* 
            #swagger.tags = ["propertyItemController"]
            #swagger.description = "Função que o usuário adiciona um novo item da propriedade."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/PropertyItemSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "property": "64e765f2c44ed036878be8cf",
                    "title": "Sofá",
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
            const createPropertyItem = await PropertyItem.create(request.body);
            return response.status(201).json(createPropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getPropertyItem(request, response) {
        /* 
            #swagger.tags = ["propertyItemController"]
            #swagger.description = "Função que o usuário busca por um ou vários itens da propriedade."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6fdf956dcb624aca8b2f",
                    "property": "ObjectId()",
                    "title": "Sofá",
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
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi(ram) encontrado(s) o(s) item(ns) da propriedade.",
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getPropertyItems = await PropertyItem.find()
                if (getPropertyItems == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os itens da propriedade.", "_return": getPropertyItems })
                }
                return response.status(200).json(getPropertyItems);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getPropertyItem = await PropertyItem.findOne({ _id: request.params.id })
                if (getPropertyItem == null) {
                    return response.status(404).json({ "message": "Não foi encontrado o item da propriedade.", "_return": getPropertyItem })
                }
                return response.status(200).json(getPropertyItem);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } 
    },
    
    async updatePropertyItem(request, response) {
        /* 
            #swagger.tags = ["propertyItemController"]
            #swagger.description = "Função que o usuário atualiza um item da propriedade."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "title": "Sofá",
                    "convenient": "Sala"
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6fdf956dcb624aca8b2f",
                    "property": "ObjectId()",
                    "title": "Sofá",
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
            const updatePropertyItem = await PropertyItem.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updatePropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
    async deletePropertyItem(request, response) {
        /* 
            #swagger.tags = ["propertyItemController"]
            #swagger.description = "Função que o usuário deleta um item da propriedade."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6fdf956dcb624aca8b2f",
                    "property": "ObjectId()",
                    "title": "Sofá",
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
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi possível excluir o item da propriedade.",
                    "_return": "null"
                }
            }
        */
        try {
            const deletePropertyItem = await PropertyItem.findOneAndDelete({ _id: request.params.id });
            if (deletePropertyItem == null) {
                return response.status(404).json({ "message": "Não foi possível excluir o item da propriedade.", "_return": deletePropertyItem });
            }
            return response.status(200).json(deletePropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
}