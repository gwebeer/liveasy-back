const IdealProperty = require("../models/idealPropertyModel");

module.exports = {
    
    async createIdealProperty(request, response) {
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
            const createIdealProperty = await IdealProperty.create(request.body);
            return response.status(201).json(createIdealProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getIdealProperty(request, response) {
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
                const getIdealProperties = await IdealProperty.find()
                return response.status(200).json(getIdealProperties);
            } catch (error) {
                console.log("Erro ao obter todos os lugares", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getIdealProperty = await IdealProperty.findOne({ _id: request.params.id })
                return response.status(200).json(getIdealProperty);
            } catch (error) {
                console.log("Erro ao obter os detalhes do lugar", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updateIdealProperty(request, response) {
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
        if (request.params.key === "id") {
            try {
                const updateIdealProperty = await IdealProperty.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.status(200).json(updateIdealProperty);
            } catch (error) {
                console.log("Erro ao atualizar o lugar na coleção Place", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updateIdealProperty = await IdealProperty.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.status(200).json(updateIdealProperty);
            } catch (error) {
                console.log("Erro ao atualizar o lugar na coleção Place", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateIdealProperty = await IdealProperty.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateIdealProperty);
        } catch (error) {
            console.log("Erro ao atualizar o lugar na coleção Place", error)
            return response.status(400).json({ error });
        }
    },

    async deleteIdealProperty(request, response) {
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
            const deleteIdealProperty = await IdealProperty.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteIdealProperty);
        } catch (error) {
            console.log("Erro ao deletar o lugar na coleção Place", error);
            return response.status(400).json({ error });
        }
    },

}