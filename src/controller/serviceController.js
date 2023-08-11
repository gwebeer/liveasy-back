const Service = require("../models/serviceModel");

module.exports = {
 
    async createService(request, response) {
        /* 
            #swagger.tags = ["serviceController"]
            #swagger.description = "Função que cria um novo serviço"
        */
        try {
            const createService = await Service.create(request.body);
            return response.status(201).json({ createService });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getService(request, response) {
        /* 
            #swagger.tags = ["serviceController"]
            #swagger.description = "Função que busca um ou vários serviços"
        */
        if (request.params.id == "all") {
            try {
                const getService = await Service.findOne({ _id: request.params.id })
                return response.json(getService);
            } catch (error) {
                console.log("Erro ao obter o detalhe do serviço", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getServices = await Service.find()
                return response.json(getServices);
            } catch (error) {
                console.log("Erro ao obter todos os detalhes de serviços", error)
                return response.status(400).json({ error });
            }
        }
    },
    
    async updateService(request, response) {
        /* 
            #swagger.tags = ["serviceController"]
            #swagger.description = "Função que atualiza um serviço"
        */
        try {
            const updateService = await Service.findOneAndUpdate({ user: request.params.value }, request.body);
            return response.json(updateService);
        } catch (error) {
            console.log("Erro ao atualizar o serviço da coleção Service", error);
            return response.status(400).json({ error });
        }
    },
    
    async deleteService(request, response) {
        /* 
            #swagger.tags = ["serviceController"]
            #swagger.description = "Função que deleta um serviço"
        */
        try {
            const deleteService = await Service.delete({ _id: request.params.id})
            return response.json(deleteService)
        } catch (error) {
            console.log("Erro ao deletar o serviço da coleção Service", error);
        }
    },
    
}