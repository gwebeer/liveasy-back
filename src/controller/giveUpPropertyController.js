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
        */
        if (request.params.id == "all") {
            try {
                const getGiveUpProperty = await GiveUpProperty.find()
                return response.status(200).json(getGiveUpProperty);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getGiveUpProperty = await GiveUpProperty.findOne({ _id: request.params.id })
                return response.status(200).json(getGiveUpProperty);
            } catch (error) {
                return response.status(404).json({ error });
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
            const deleteGiveUpProperty = await GiveUpProperty.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}