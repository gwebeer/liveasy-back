const PlanningCost = require("../models/planningCostModel");

module.exports = {
    
    async createPlanningCost(request, response) {
        try {
            const createPlanningCost = await PlanningCost.create(request.body);
            return response.json({ createPlanningCost });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getPlanningCost(request, response) {
        try {
            const getPlanningCost = await PlanningCost.findOne({ _id: request.params.id })
            return response.json(getPlanningCost);
        } catch (error) {
            console.log("Erro ao obter os detalhes do planejamento de custos", error)
            return response.status(400).json({ error });
        }
    },

    async getPlanningCosts(request, response) {
        try {
            const getPlanningCosts = await PlanningCost.find()
            return response.json(getPlanningCosts);
        } catch (error) {
            console.log("Erro ao obter todos os planejamentos de custos", error)
            return response.status(400).json({ error });
        }
    },

    async updatePlanningCost(request, response) {
        if (request.params.key === "id") {
            try {
                const updatePlanningCost = await PlanningCost.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(updatePlanningCost);
            } catch (error) {
                console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCost", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updatePlanningCost = await PlanningCost.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.json(updatePlanningCost);
            } catch (error) {
                console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCost", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updatePlanningCost = await PlanningCost.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.json(updatePlanningCost);
        } catch (error) {
            console.log("Erro ao atualizar o planejamento de custos na coleção PlanningCost", error)
            return response.status(400).json({ error });
        }
    },

    async deletePlanningCost(request, response) {
        try {
            const deletePlanningCost = await PlanningCost.findOneAndDelete({ _id: request.params.id });
            return response.json(deletePlanningCost);
        } catch (error) {
            console.log("Erro ao deletar o planejamento de custos na coleção PlanningCost", error);
            return response.status(400).json({ error });
        }
    },

}