const Place = require("../models/placeModel");

module.exports = {
    
    async createPlace(request, response) {
        try {
            const createPlace = await Place.create(request.body);
            return response.json({ createPlace });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getPlace(request, response) {
        try {
            const getPlace = await Place.findOne({ _id: request.params.id })
            return response.json(getPlace);
        } catch (error) {
            console.log("Erro ao obter os detalhes do lugar", error)
            return response.status(400).json({ error });
        }
    },

    async getPlaces(request, response) {
        try {
            const getPlaces = await Place.find()
            return response.json(getPlaces);
        } catch (error) {
            console.log("Erro ao obter todos os lugares", error)
            return response.status(400).json({ error });
        }
    },

    async updatePlace(request, response) {
        if (request.params.key === "id") {
            try {
                const updatePlace = await Place.findOneAndUpdate({ _id: request.params.value }, request.body);
                return response.json(updatePlace);
            } catch (error) {
                console.log("Erro ao atualizar o lugar na coleção Place", error);
                return response.status(400).json({ error });
            }
        }

        if (request.params.key === "user") {
            try {
                const updatePlace = await Place.findOneAndUpdate({ user: request.params.value }, request.body)
                return response.json(updatePlace);
            } catch (error) {
                console.log("Erro ao atualizar o lugar na coleção Place", error)
                return response.status(400).json({ error });
            }
        }

        try {
            const updatePlace = await Place.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.json(updatePlace);
        } catch (error) {
            console.log("Erro ao atualizar o lugar na coleção Place", error)
            return response.status(400).json({ error });
        }
    },

    async deletePlace(request, response) {
        try {
            const deletePlace = await Place.findOneAndDelete({ _id: request.params.id });
            return response.json(deletePlace);
        } catch (error) {
            console.log("Erro ao deletar o lugar na coleção Place", error);
            return response.status(400).json({ error });
        }
    },

}