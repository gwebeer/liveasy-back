const PlanningCostItem = require("../models/planningCostItemModel");

module.exports = {
    
    async createPlanningCostItem(request, response) {
        /* 
            #swagger.tags = ["planningCostItemController"]
            #swagger.description = "Função que cria um novo item de planejamento de custos"
        */
        try {
            const createPlanningCostItem = await PlanningCostItem.create(request.body);
            return response.status(201).json({ createPlanningCostItem });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getPlanningCostItem(request, response) {
        /* 
            #swagger.tags = ["planningCostItemController"]
            #swagger.description = "Função que busca por um ou vários itens de planejamento de custos"
        */
        if (request.params.id == "all") {
            try {
                const getPlanningCostItem = await PlanningCostItem.findOne({ _id: request.params.id })
                return response.json(getPlanningCostItem);
            } catch (error) {
                console.log("Erro ao obter os detalhes do planejamento de custos", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getPlanningCostItems = await PlanningCostItem.find()
                return response.json(getPlanningCostItems);
            } catch (error) {
                console.log("Erro ao obter todos os planejamentos de custos", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updatePlanningCostItem(request, response) {
        /* 
            #swagger.tags = ["planningCostItemController"]
            #swagger.description = "Função que atualiza um item do planejamento de custos"
        */
        if (request.params.key === "id") {
            try {
                const updatePlanningCostItem = await PlanningCostItem.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(updatePlanningCostItem);
            } catch (error) {
                console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCostItem", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updatePlanningCostItem = await PlanningCostItem.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.json(updatePlanningCostItem);
            } catch (error) {
                console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCostItem", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updatePlanningCostItem = await PlanningCostItem.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.json(updatePlanningCostItem);
        } catch (error) {
            console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCostItem", error)
            return response.status(400).json({ error });
        }
    },

    async deletePlanningCostItem(request, response) {
        /* 
            #swagger.tags = ["planningCostItemController"]
            #swagger.description = "Função que deleta um item do planejamento de custos"
        */
        try {
            const deletePlanningCostItem = await PlanningCostItem.findOneAndDelete({ _id: request.params.id });
            return response.json(deletePlanningCostItem);
        } catch (error) {
            console.log("Erro ao deletar o planejamento de custos na coleção PlanningCostItem", error);
            return response.status(400).json({ error });
        }
    },

}