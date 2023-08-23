const Property = require("../models/propertyModel");

module.exports = {
    
    async createProperty(request, response) {
        /* 
            #swagger.tags = ["placeController"]
            #swagger.description = "Função que cria um novo lugar"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/PlaceSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "name": "Edifício Non Facile",
                    "address": "Rua dos Desafios, 352",
                    "zipCode": "70000-600",
                    "neighborhood": "Promessas",
                    "condominiumValue": 1200,
                    "_id": "64de635a21d6b023c4b73ffb",
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
            #swagger.tags = ["placeController"]
            #swagger.description = "Função que busca um ou vários lugares"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de64b9af518a8c10f34f7d",
                    "name": "Edifício Behelit",
                    "address": "Avenida dos Sonhos, 666",
                    "zipCode": "70707-666",
                    "neighborhood": "Demônio Servo",
                    "condominiumValue": 1000,
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
        */
        if (request.params.id == "all") {
            try {
                const getProperties = await Property.find()
                return response.status(200).json(getProperties);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getProperty = await Property.findOne({ _id: request.params.id })
                return response.status(200).json(getProperty);
            } catch (error) {
                return response.status(404).json({ error });
            }
        }
    },

    async updateProperty(request, response) {
        /* 
            #swagger.tags = ["placeController"]
            #swagger.description = "Função que atualiza um lugar"
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
            #swagger.tags = ["placeController"]
            #swagger.description = "Função que deleta um lugar"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de64b9af518a8c10f34f7d",
                    "name": "Edifício Behelit",
                    "address": "Avenida dos Sonhos, 861",
                    "zipCode": "70707-848",
                    "neighborhood": "Flores",
                    "condominiumValue": 1000,
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
        */
        try {
            const deleteProperty = await Property.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}