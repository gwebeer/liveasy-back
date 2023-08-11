const Dashboard = require("../models/dashboardModel");

module.exports = {
    
    async createDashboard(request, response) {
        /* 
            #swagger.tags = ["dashboardController"]
            #swagger.description = "Função que cria um novo Dashboard"
        */
        try {
            const createDashboard = await Dashboard.create(request.body);
            return response.status(201).json({ createDashboard });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getDashboard(request, response) {
        /* 
            #swagger.tags = ["dashboardController"]
            #swagger.description = "Função que busca um ou vários Dashboards"
        */
        if (request.params.id == "all") {
            try {
                const getDashboard = await Dashboard.findOne({ _id: request.params.id })
                return response.json(getDashboard);
            } catch (error) {
                console.log("Erro ao obter os detalhes do Dashboard", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getDashboard = await Dashboard.find()
                return response.json(getDashboard);
            } catch (error) {
                console.log("Erro ao obter todos os Dashboards", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updateDashboard(request, response) {
        /* 
            #swagger.tags = ["dashboardController"]
            #swagger.description = "Função que atualiza um Dashboard"
        */
        if (request.params.key === "id") {
            try {
                const updateDashboard = await Dashboard.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(updateDashboard);
            } catch (error) {
                console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updateDashboard = await Dashboard.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.json(updateDashboard);
            } catch (error) {
                console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateDashboard = await Dashboard.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.json(updateDashboard);
        } catch (error) {
            console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error)
            return response.status(400).json({ error });
        }
    },

    async deleteDashboard(request, response) {
        /* 
            #swagger.tags = ["dashboardController"]
            #swagger.description = "Função que deleta um Dashboard"
        */
        try {
            const deleteDashboard = await Dashboard.findOneAndDelete({ _id: request.params.id });
            return response.json(deleteDashboard);
        } catch (error) {
            console.log("Erro ao deletar o Dashboard na coleção Dashboard", error);
            return response.status(400).json({ error });
        }
    },

}