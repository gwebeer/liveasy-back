import Dashboard from "../models/dashboardModel.js";

export default class Dashboard {
    
    async createDashboard(request, response) {
        try {
            const createDashboard = await Dashboard.create(request.body);
            return response.status(201).json(createDashboard);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getDashboard(request, response) {
        if (request.params.id == "all") {
            try {
                const getDashboard = await Dashboard.find()
                return response.status(200).json(getDashboard);
            } catch (error) {
                console.log("Erro ao obter todos os Dashboards", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getDashboard = await Dashboard.findOne({ _id: request.params.id })
                return response.status(200).json(getDashboard);
            } catch (error) {
                console.log("Erro ao obter os detalhes do Dashboard", error)
                return response.status(400).json({ error });
            }
        }
    }

    async updateDashboard(request, response) {
        if (request.params.key === "id") {
            try {
                const updateDashboard = await Dashboard.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.status(200).json(updateDashboard);
            } catch (error) {
                console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updateDashboard = await Dashboard.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.status(200).json(updateDashboard);
            } catch (error) {
                console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updateDashboard = await Dashboard.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateDashboard);
        } catch (error) {
            console.log("Erro ao atualizar o Dashboard na coleção Dashboard", error)
            return response.status(400).json({ error });
        }
    }

    async deleteDashboard(request, response) {
        try {
            const deleteDashboard = await Dashboard.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteDashboard);
        } catch (error) {
            console.log("Erro ao deletar o Dashboard na coleção Dashboard", error);
            return response.status(400).json({ error });
        }
    }

}