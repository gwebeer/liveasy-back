const ChoosedProperty = require("../models/choosedPropertyModel");

module.exports = {

    async createChoosedProperty(request, response) {
        /* 
            #swagger.tags = ["choosedPropertyController"]
            #swagger.description = "Função que o usuário adiciona uma propriedade escolhida"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/ChoosedPropertySchema"
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
                const getChoosedPropertys = await ChoosedProperty.find()
                return response.status(200).json(getChoosedPropertys);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getChoosedProperty = await ChoosedProperty.findOne({ _id: request.params.id })
                return response.status(200).json(getChoosedProperty);
            } catch (error) {
                return response.status(404).json({ error });
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
            const deleteChoosedProperty = await ChoosedProperty.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}