const Place = require("../models/placeModel");

module.exports = {
    
    async createPlace(request, response) {
        /* 
            #swagger.tags = ["placeController"]
            #swagger.description = "Função que cria um novo lugar"
            #swagger.responses[201] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        try {
            const createPlace = await Place.create(request.body);
            return response.status(201).json({ createPlace });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getPlace(request, response) {
        /* 
            #swagger.tags = ["placeController"]
            #swagger.description = "Função que busca um ou vários lugares"
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getPlace = await Place.findOne({ _id: request.params.id })
                return response.status(200).json(getPlace);
            } catch (error) {
                console.log("Erro ao obter os detalhes do lugar", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getPlaces = await Place.find()
                return response.status(200).json(getPlaces);
            } catch (error) {
                console.log("Erro ao obter todos os lugares", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updatePlace(request, response) {
        /* 
            #swagger.tags = ["placeController"]
            #swagger.description = "Função que atualiza um lugar"
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        if (request.params.key === "id") {
            try {
                const updatePlace = await Place.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.status(200).json(updatePlace);
            } catch (error) {
                console.log("Erro ao atualizar o lugar na coleção Place", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updatePlace = await Place.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.status(200).json(updatePlace);
            } catch (error) {
                console.log("Erro ao atualizar o lugar na coleção Place", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updatePlace = await Place.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updatePlace);
        } catch (error) {
            console.log("Erro ao atualizar o lugar na coleção Place", error)
            return response.status(400).json({ error });
        }
    },

    async deletePlace(request, response) {
        /* 
            #swagger.tags = ["placeController"]
            #swagger.description = "Função que deleta um lugar"
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        try {
            const deletePlace = await Place.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deletePlace);
        } catch (error) {
            console.log("Erro ao deletar o lugar na coleção Place", error);
            return response.status(400).json({ error });
        }
    },

}