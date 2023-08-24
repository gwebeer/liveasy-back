const IdealProperty = require("../models/idealPropertyModel");

module.exports = {
    
    async createIdealProperty(request, response) {
        /* 
            #swagger.tags = ["idealPropertyController"]
            #swagger.description = "Função que o usuário adiciona dados de uma propriedade ideal."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/IdealPropertySchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "user": "ObjectId()",
                    "peopleLiving": 1,
                    "type": "Apartamento",
                    "rooms": 2,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": true,
                    "priceRange": 1000,
                    "isForRent": true,
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
            const createIdealProperty = await IdealProperty.create(request.body);
            return response.status(201).json(createIdealProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getIdealProperty(request, response) {
        /* 
            #swagger.tags = ["idealPropertyController"]
            #swagger.description = "Função que o usuário busca um ou vários dados de uma propriedade ideal."
            #swagger.responses[200] = {
                schema: [{
                    "_id": "64de64b9af518a8c10f34f7d",
                    "user": "ObjectId()",
                    "peopleLiving": 1,
                    "type": "Apartamento",
                    "rooms": 2,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": true,
                    "priceRange": 1000,
                    "isForRent": true,
                    "createdAt": "2023-08-17T18:19:37.099Z",
                    "updatedAt": "2023-08-17T18:19:37.099Z",
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
                    "message": "Não foi(ram) encontrado(s) os dados da propriedade ideal.",
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getIdealProperties = await IdealProperty.find()
                if (getIdealProperties == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os dados da propriedade ideal.", "_return": getIdealProperties });
                }
                return response.status(200).json(getIdealProperties);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getIdealProperty = await IdealProperty.findOne({ _id: request.params.id })
                if (getIdealProperty == null) {
                    return response.status(404).json({ "message": "Não foi encontrado os dados da propriedade ideal.", "_return": getIdealProperty });
                }
                return response.status(200).json(getIdealProperty);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    },

    async updateIdealProperty(request, response) {
        /* 
            #swagger.tags = ["idealPropertyController"]
            #swagger.description = "Função que o usuário atualiza os dados de uma propriedade ideal."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "peopleLiving": 1,
                    "type": "Apartamento",
                    "rooms": 2,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": true,
                    "priceRange": 1000,
                    "isForRent": true
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de64b9af518a8c10f34f7d",
                    "user": "ObjectId()",
                    "peopleLiving": 1,
                    "type": "Apartamento",
                    "rooms": 2,
                    "bathrooms": 2,
                    "parkingSpaces": 1,
                    "infraestructure": true,
                    "furnished": true,
                    "priceRange": 1000,
                    "isForRent": true,
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
            const updateIdealProperty = await IdealProperty.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateIdealProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteIdealProperty(request, response) {
        /* 
            #swagger.tags = ["idealPropertyController"]
            #swagger.description = "Função que o usuário deleta os dados de uma propriedade ideal."
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
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi encontrado os dados da propriedade ideal.",
                    "_return": "null"
                }
            }
        */
        try {
            const deleteIdealProperty = await IdealProperty.findOneAndDelete({ _id: request.params.id });
            if (deleteIdealProperty == null) {
                return response.status(404).json({ "message": "Não foi encontrado os dados da propriedade ideal.", "_return": deleteIdealProperty });
            }
            return response.status(200).json(deleteIdealProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}