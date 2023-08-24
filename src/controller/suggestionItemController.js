const SuggestionItem = require('../models/suggestionItemModel');

module.exports = {
    
    async createSuggestionItem(request, response) {
        /* 
            #swagger.tags = ["suggestionItemController"]
            #swagger.description = "Função que adiciona um novo item de sugestão."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/SuggestionItemSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "type": "Item",
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
            const createSuggestionItem = await SuggestionItem.create(request.body);
            return response.status(201).json(createSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getSuggestionItem(request, response) {
        /* 
            #swagger.tags = ["suggestionItemController"]
            #swagger.description = "Função que busca por um ou vários itens de sugestão."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6fdf956dcb624aca8b2f",
                    "type": "Item",
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
                    'message': "Não foi(ram) encontrado(s) o(s) item(ns) de sugestão.", 
                    '_return': "null" 
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getSuggestionItems = await SuggestionItem.find()
                if (getSuggestionItems == null) {
                    return response.status(404).json({ 'message': 'Não foram encontrados os itens de sugestão.', '_return': getSuggestionItems });
                }
                return response.status(200).json(getSuggestionItems);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getSuggestionItem = await SuggestionItem.findOne({ _id: request.params.id })
                if (getSuggestionItem == null) {
                    return response.status(404).json({ 'message': 'Não foi encontrado o item de sugestão.', '_return': getSuggestionItem });
                }
                return response.status(200).json(getSuggestionItem);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } 
    },
    
    async updateSuggestionItem(request, response) {
        /* 
            #swagger.tags = ["suggestionItemController"]
            #swagger.description = "Função que atualiza um item de sugestão."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "type": "Item",
                    "title": "Sofá",
                    "convenient": "Sala"
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "_id": "64e6a2f5e0eb30192215fa11",
                    "type": "Item",
                    "title": "Sofá de 4 lugares",
                    "convenient": "Sala",
                    "createdAt": "2023-08-24T00:23:17.744Z",
                    "updatedAt": "2023-08-24T00:23:17.744Z",
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
            const updateSuggestionItem = await SuggestionItem.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
    async deleteSuggestionItem(request, response) {
        /* 
            #swagger.tags = ["suggestionItemController"]
            #swagger.description = "Função que deleta um item de sugestão."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de6fdf956dcb624aca8b2f",
                    "type": "Item",
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
                    'message': 'Não foi encontrado o item de sugestão.', 
                    '_return': "null" 
                }
            }
        */
        try {
            const deleteSuggestionItem = await SuggestionItem.findOneAndDelete({ _id: request.params.id });
            if (deleteSuggestionItem == null) {
                return response.status(404).json({ 'message': 'Não foi encontrado o item de sugestão.', '_return': deleteSuggestionItem });
            }
            return response.status(200).json(deleteSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
    
}