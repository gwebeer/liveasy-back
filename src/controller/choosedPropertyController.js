const ChoosedProperty = require("../models/choosedPropertyModel");

module.exports = {

    async createChoosedProperty(request, response) {
        /* 
            #swagger.tags = ["choosedPropertyController"]
            #swagger.description = "Função que o usuário adiciona uma propriedade escolhida."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/ChoosedPropertySchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "user": "64d93e582de00e40576bfa5c",
                    "property": "64e765f2c44ed036878be8cf",
                    "reason": "Perfeito para mim, pois moro sozinho.",
                    "_id": "64e77cc77cc55538c4e4facf",
                    "createdAt": "2023-08-24T15:52:39.883Z",
                    "updatedAt": "2023-08-24T15:52:39.883Z",
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
            const createChoosedProperty = await ChoosedProperty.create(request.body);
            return response.status(201).json(createChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getChoosedProperty(request, response) {
        /* 
            #swagger.tags = ["choosedPropertyController"]
            #swagger.description = "Função que o usuário busca por uma ou várias propriedades escolhidas."
            #swagger.responses[200] = {
                schema: [{
                    "user": "64d93e582de00e40576bfa5c",
                    "property": "64e765f2c44ed036878be8cf",
                    "reason": "Perfeito para mim, pois moro sozinho.",
                    "_id": "64e77cc77cc55538c4e4facf",
                    "createdAt": "2023-08-24T15:52:39.883Z",
                    "updatedAt": "2023-08-24T15:52:39.883Z",
                    "__v": 0
                }]
            }
            #swagger.responses[404] = {
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
                    "message": "Não foi(ram) encontrada(s) propriedade(s) escolhida(s).", 
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getChoosedProperties = await ChoosedProperty.find()
                if (getChoosedProperties == null) {
                    return response.status(404).json({ "message": "Não foram encontradas propriedades escolhidas.", "_return": getChoosedProperties });
                }
                return response.status(200).json(getChoosedProperties);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getChoosedProperty = await ChoosedProperty.findOne({ _id: request.params.id })
                if (getChoosedProperty == null) {
                    return response.status(404).json({ "message": "Não foi encontrada propriedade escolhida.", "_return": getChoosedProperty });
                }
                return response.status(200).json(getChoosedProperty);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    },

    async updateChoosedProperty(request, response) {
        /* 
            #swagger.tags = ["choosedPropertyController"]
            #swagger.description = "Função que o usuário atualiza uma propriedade escolhida."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "reason": "Perfeito para mim, pois moro sozinho."
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "user": "64d93e582de00e40576bfa5c",
                    "property": "64e765f2c44ed036878be8cf",
                    "reason": "Perfeito para mim, pois moro sozinho.",
                    "_id": "64e77cc77cc55538c4e4facf",
                    "createdAt": "2023-08-24T15:52:39.883Z",
                    "updatedAt": "2023-08-24T15:52:39.883Z",
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
            const updateChoosedProperty = await ChoosedProperty.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteChoosedProperty(request, response) {
        /* 
            #swagger.tags = ["choosedPropertyController"]
            #swagger.description = "Função que o usuário exclui uma propriedade escolhida."
            #swagger.responses[200] = {
                schema: {
                    "user": "64d93e582de00e40576bfa5c",
                    "property": "64e765f2c44ed036878be8cf",
                    "reason": "Perfeito para mim, pois moro sozinho.",
                    "_id": "64e77cc77cc55538c4e4facf",
                    "createdAt": "2023-08-24T15:52:39.883Z",
                    "updatedAt": "2023-08-24T15:52:39.883Z",
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
                    "message": "Não foi encontrada propriedade escolhida.", 
                    "_return": "null"
                }
            }
        */
        try {
            const deleteChoosedProperty = await ChoosedProperty.findOneAndDelete({ _id: request.params.id });
            if (deleteChoosedProperty == null) {
                return response.status(404).json({ "message": "Não foi encontrada propriedade escolhida.", "_return": deleteChoosedProperty });
            }
            return response.status(200).json(deleteChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}