const GiveUpProperty = require("../models/giveUpPropertyModel");

module.exports = {

    async createGiveUpProperty(request, response) {
        /* 
            #swagger.tags = ["giveUpPropertyController"]
            #swagger.description = "Função que o usuário adiciona uma propriedade recusada."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/GiveUpPropertySchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "user": "64d93e582de00e40576bfa5c",
                    "property": "64e765f2c44ed036878be8cf",
                    "reason": "Muito caro para alugar",
                    "_id": "64e77a8005a87c1383796e46",
                    "createdAt": "2023-08-24T15:42:56.082Z",
                    "updatedAt": "2023-08-24T15:42:56.082Z",
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
            const createGiveUpProperty = await GiveUpProperty.create(request.body);
            return response.status(201).json(createGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getGiveUpProperty(request, response) {
        /* 
            #swagger.tags = ["giveUpPropertyController"]
            #swagger.description = "Função que o usuário busca por uma ou várias propriedades recusadas."
            #swagger.responses[200] = {
                schema: [{
                    "user": "64d93e582de00e40576bfa5c",
                    "property": "64e765f2c44ed036878be8cf",
                    "reason": "Muito caro para alugar",
                    "_id": "64e77a8005a87c1383796e46",
                    "createdAt": "2023-08-24T15:42:56.082Z",
                    "updatedAt": "2023-08-24T15:42:56.082Z",
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
                    "message": "Não foi(ram) encontrado(s) propriedade(s) recusada(s).",
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getGiveUpProperties = await GiveUpProperty.find()
                if (getGiveUpProperties == null) {
                    return response.status(404).json({ "message": "Não foram encontradas propriedades recusadas.", "_return": getGiveUpProperties });
                }
                return response.status(200).json(getGiveUpProperties);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getGiveUpProperty = await GiveUpProperty.findOne({ _id: request.params.id })
                if (getGiveUpProperty == null) {
                    return response.status(404).json({ "message": "Não foi encontrado propriedade recusada.", "_return": getGiveUpProperty });
                }
                return response.status(200).json(getGiveUpProperty);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    },

    async updateGiveUpProperty(request, response) {
        /* 
            #swagger.tags = ["giveUpPropertyController"]
            #swagger.description = "Função que o usuário atualiza uma propriedade recusada."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "reason": "Muito caro para alugar"
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "user": "64d93e582de00e40576bfa5c",
                    "property": "64e765f2c44ed036878be8cf",
                    "reason": "Muito caro para alugar",
                    "_id": "64e77a8005a87c1383796e46",
                    "createdAt": "2023-08-24T15:42:56.082Z",
                    "updatedAt": "2023-08-24T15:42:56.082Z",
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
            const updateGiveUpProperty = await GiveUpProperty.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteGiveUpProperty(request, response) {
        /* 
            #swagger.tags = ["giveUpPropertyController"]
            #swagger.description = "Função que o usuário exclui uma propriedade recusada."
            #swagger.responses[200] = {
                schema: {
                    "user": "64d93e582de00e40576bfa5c",
                    "property": "64e765f2c44ed036878be8cf",
                    "reason": "Muito caro para alugar",
                    "_id": "64e77a8005a87c1383796e46",
                    "createdAt": "2023-08-24T15:42:56.082Z",
                    "updatedAt": "2023-08-24T15:42:56.082Z",
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
                    "message": "Não foi encontrado propriedade recusada.",
                    "_return": "null"
                }
            }
        */
        try {
            const deleteGiveUpProperty = await GiveUpProperty.findOneAndDelete({ _id: request.params.id });
            if (deleteGiveUpProperty == null) {
                return response.status(404).json({ "message": "Não foi encontrado propriedade recusada.", "_return": deleteGiveUpProperty });
            }
            return response.status(200).json(deleteGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}