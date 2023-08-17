const PlanningCostItem = require("../models/planningCostItemModel");

module.exports = {
    
    async createPlanningCostItem(request, response) {
        /* 
            #swagger.tags = ["planningCostItemController"]
            #swagger.description = "Função que cria um novo item de planejamento de custos"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/PlanningCostItemSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "process": "64de5f45cf79a38afca5a165",
                    "title": "Aluguel",
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
            const createPlanningCostItem = await PlanningCostItem.create(request.body);
            return response.status(201).json(createPlanningCostItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getPlanningCostItem(request, response) {
        /* 
            #swagger.tags = ["planningCostItemController"]
            #swagger.description = "Função que busca por um ou vários itens de planejamento de custos"
            #swagger.responses[200] = {
                schema: [
                    {
                        "_id": "64de5f56cf79a38afca5a167",
                        "process": "64de5f45cf79a38afca5a165",
                        "title": "Aluguel",
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
        */
        if (request.params.id == "all") {
            try {
                const getPlanningCostItems = await PlanningCostItem.find()
                return response.status(200).json(getPlanningCostItems);
            } catch (error) {
                console.log("Erro ao obter todos os planejamentos de custos", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getPlanningCostItem = await PlanningCostItem.findOne({ _id: request.params.id })
                return response.status(200).json(getPlanningCostItem);
            } catch (error) {
                console.log("Erro ao obter os detalhes do planejamento de custos", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updatePlanningCostItem(request, response) {
        /* 
            #swagger.tags = ["planningCostItemController"]
            #swagger.description = "Função que atualiza um item do planejamento de custos"
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
                        
                    }
                }
            }
        */
        if (request.params.key === "id") {
            try {
                const updatePlanningCostItem = await PlanningCostItem.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.status(200).json(updatePlanningCostItem);
            } catch (error) {
                console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCostItem", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updatePlanningCostItem = await PlanningCostItem.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.status(200).json(updatePlanningCostItem);
            } catch (error) {
                console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCostItem", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updatePlanningCostItem = await PlanningCostItem.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updatePlanningCostItem);
        } catch (error) {
            console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCostItem", error)
            return response.status(400).json({ error });
        }
    },

    async deletePlanningCostItem(request, response) {
        /* 
            #swagger.tags = ["planningCostItemController"]
            #swagger.description = "Função que deleta um item do planejamento de custos"
            #swagger.responses[200] = {
                schema: {
                    "_id": "64de5f56cf79a38afca5a167",
                    "process": "64de5f45cf79a38afca5a165",
                    "title": "Aluguel",
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
            const deletePlanningCostItem = await PlanningCostItem.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deletePlanningCostItem);
        } catch (error) {
            console.log("Erro ao deletar o planejamento de custos na coleção PlanningCostItem", error);
            return response.status(400).json({ error });
        }
    },

}