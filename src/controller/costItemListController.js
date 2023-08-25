const CostItemList = require("../models/costItemListModel");

module.exports = {
    
    async createCostItemList(request, response) {
        /* 
            #swagger.tags = ["costItemListController"]
            #swagger.description = "Função que o usuário cria um novo item de planejamento de custos."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/CostItemListSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "process": "64de5f45cf79a38afca5a165",
                    "title": "Aluguel",
                    "category": "",
                    "value": 850,
                    "_id": "64de5f56cf79a38afca5a167",
                    "createdAt": "2023-08-17T17:56:38.273Z",
                    "updatedAt": "2023-08-17T17:56:38.273Z",
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
            const createCostItemList = await CostItemList.create(request.body);
            return response.status(201).json(createCostItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getCostItemList(request, response) {
        /* 
            #swagger.tags = ["costItemListController"]
            #swagger.description = "Função que o usuário busca por um ou vários itens de planejamento de custos."
            #swagger.responses[200] = {
                schema: [
                    {
                        "_id": "64de5f56cf79a38afca5a167",
                        "process": "64de5f45cf79a38afca5a165",
                        "title": "Aluguel",
                        "category": "",
                        "value": 850,
                        "createdAt": "2023-08-17T17:56:38.273Z",
                        "updatedAt": "2023-08-17T17:56:38.273Z",
                        "__v": 0
                    }
                ]
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi(ram) encontrado(s) o(s) planejamento(s) de custo.",
                    "_return": "null"
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getCostItemLists = await CostItemList.find()
                if (getCostItemLists == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os planejamentos de custo.", "_return": getCostItemLists });
                }
                return response.status(200).json(getCostItemLists);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getCostItemList = await CostItemList.findOne({ _id: request.params.id })
                if (getCostItemList == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os planejamentos de custo.", "_return": getCostItemList });
                }
                return response.status(200).json(getCostItemList);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    },

    async updateCostItemList(request, response) {
        /* 
            #swagger.tags = ["costItemListController"]
            #swagger.description = "Função que o usuário atualiza um item do planejamento de custos."
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    "title": "Aluguel",
                    "category": "",
                    "value": 850,
                }
            }
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de5f56cf79a38afca5a167",
                    "process": "64de5f45cf79a38afca5a165",
                    "title": "Aluguel",
                    "category": "",
                    "value": 850,
                    "createdAt": "2023-08-17T17:56:38.273Z",
                    "updatedAt": "2023-08-17T17:56:38.273Z",
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
                        "path": "",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        try {
            const updateCostItemList = await CostItemList.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateCostItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteCostItemList(request, response) {
        /* 
            #swagger.tags = ["costItemListController"]
            #swagger.description = "Função que o usuário deleta um item do planejamento de custos."
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de5f56cf79a38afca5a167",
                    "process": "64de5f45cf79a38afca5a165",
                    "title": "Aluguel",
                    "category": "",
                    "value": 850,
                    "createdAt": "2023-08-17T17:56:38.273Z",
                    "updatedAt": "2023-08-17T17:56:38.273Z",
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
                        "path": "",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
            #swagger.responses[404] = {
                schema: {
                    "message": "Não foi encontrado o item de planejamento de custo.",
                    "_return": "null"
                }
            }
        */
        try {
            const deleteCostItemList = await CostItemList.findOneAndDelete({ _id: request.params.id });
            if (deleteCostItemList == null) {
                return response.status(404).json({ "message": "Não foi encontrado o item de planejamento de custo.", "_return": deleteCostItemList });
            }
            return response.status(200).json(deleteCostItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}