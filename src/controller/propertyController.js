const Property = require("../models/propertyModel");

module.exports = {
    
    async createProperty(request, response) {
        /* 
            #swagger.tags = ["propertyController"]
            #swagger.description = "Função que o usuário adiciona uma nova propriedade."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/PropertySchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "name": "Edifício Non Facile",
                    "address": "Rua dos Desafios, 352",
                    "zipCode": "70000-600",
                    "neighborhood": "Promessas",
                    "type": "Apartamento",
                    "rooms": 3,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": false,
                    "isForRent": true,
                    "value": 1200,
                    "_id": "64e765f2c44ed036878be8cf",
                    "createdAt": "2023-08-17T18:13:46.777Z",
                    "updatedAt": "2023-08-17T18:13:46.777Z",
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
            const createProperty = await Property.create(request.body);
            return response.status(201).json(createProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getProperty(request, response) {
        /* 
            #swagger.tags = ["propertyController"]
            #swagger.description = "Função que o usuário busca uma ou várias propriedades."
            #swagger.responses[200] = {
                schema: [{
                    "name": "Edifício Non Facile",
                    "address": "Rua dos Desafios, 352",
                    "zipCode": "70000-600",
                    "neighborhood": "Promessas",
                    "type": "Apartamento",
                    "rooms": 3,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": false,
                    "isForRent": true,
                    "value": 1200,
                    "_id": "64e765f2c44ed036878be8cf",
                    "createdAt": "2023-08-17T18:13:46.777Z",
                    "updatedAt": "2023-08-17T18:13:46.777Z",
                    "__v": 0
                }]
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
                    "message": "Não foi(ram) encontrada(s) a(s) propriedade(s).",
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getProperties = await Property.find()
                if (getProperties == null) {
                    return response.status(404).json({"message": "Não foram encontradas as propriedades.", "_return": getProperties})
                }
                return response.status(200).json(getProperties);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getProperty = await Property.findOne({ _id: request.params.id })
                if (getProperty == null) {
                    return response.status(404).json({"message": "Não foi encontrada a propriedade.", "_return": getProperty})
                }
                return response.status(200).json(getProperty);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    },

    async updateProperty(request, response) {
        /* 
            #swagger.tags = ["propertyController"]
            #swagger.description = "Função que o usuário atualiza uma propriedade."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "name": "Edifício Non Facile",
                    "address": "Rua dos Desafios, 352",
                    "zipCode": "70000-600",
                    "neighborhood": "Promessas",
                    "type": "Apartamento",
                    "rooms": 3,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": false,
                    "isForRent": true,
                    "value": 1200
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "_id": "64e765f2c44ed036878be8cf",
                    "name": "Edifício Non Facile",
                    "address": "Rua dos Desafios, 352",
                    "zipCode": "70000-600",
                    "neighborhood": "Promessas",
                    "type": "Apartamento",
                    "rooms": 3,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": false,
                    "isForRent": true,
                    "value": 1200,
                    "createdAt": "2023-08-24T14:15:14.520Z",
                    "updatedAt": "2023-08-24T14:15:14.520Z",
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
            const updateProperty = await Property.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteProperty(request, response) {
        /* 
            #swagger.tags = ["propertyController"]
            #swagger.description = "Função que o usuário deleta uma propriedade."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de64b9af518a8c10f34f7d",
                    "name": "Edifício Non Facile",
                    "address": "Rua dos Desafios, 352",
                    "zipCode": "70000-600",
                    "neighborhood": "Promessas",
                    "type": "Apartamento",
                    "rooms": 3,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": false,
                    "isForRent": true,
                    "value": 1200,
                    "createdAt": "2023-08-17T18:19:37.099Z",
                    "updatedAt": "2023-08-17T18:19:37.099Z",
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
                    'message': 'Não foi possível excluir a propriedade.', 
                    '_return': "null"
                }
            }
        */
        try {
            const deleteProperty = await Property.findOneAndDelete({ _id: request.params.id });
            if (deleteProperty == null) {
                return response.status(404).json({ 'message': 'Não foi possível excluir a propriedade.', '_return': deleteProperty })
            }
            return response.status(200).json(deleteProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}