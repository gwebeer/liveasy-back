const PropertyItem = require('../models/propertyItemModel');

module.exports = {
    
    async createPropertyItem(request, response) {
        /* 
            #swagger.tags = ["propertyItemController"]
            #swagger.description = "Função que cria um novo item padrão"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/PropertyItemSchema"
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
            const createPropertyItem = await PropertyItem.create(request.body);
            return response.status(201).json(createPropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getPropertyItem(request, response) {
        /* 
            #swagger.tags = ["propertyItemController"]
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
                const getPropertyItems = await PropertyItem.find()
                return response.status(200).json(getPropertyItems);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getPropertyItem = await PropertyItem.findOne({ _id: request.params.id })
                return response.status(200).json(getPropertyItem);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } 
    },
    
    async updatePropertyItem(request, response) {
        /* 
            #swagger.tags = ["propertyItemController"]
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
            const updatePropertyItem = await PropertyItem.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updatePropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
    async deletePropertyItem(request, response) {
        /* 
            #swagger.tags = ["propertyItemController"]
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
            const deletePropertyItem = await PropertyItem.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deletePropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
}