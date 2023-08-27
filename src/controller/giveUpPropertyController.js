import GiveUpProperty from "../models/giveUpPropertyModel.js";

export default class GiveUpProperty {

    async createGiveUpProperty(request, response) {
        try {
            const createGiveUpProperty = await GiveUpProperty.create(request.body);
            return response.status(201).json(createGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getGiveUpProperty(request, response) {
        if (request.params.id == "all") {
            try {
                const getGiveUpProperties = await GiveUpProperty.find()
                if (getGiveUpProperties == null) {
                    return response.status(404).json({ "message": "Não foram encontradas propriedades recusadas.", "_return": getGiveUpProperties });
                }
                return response.status(200).json(getGiveUpProperties);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getGiveUpProperty = await GiveUpProperty.findOne({ _id: request.params.id })
                if (getGiveUpProperty == null) {
                    return response.status(404).json({ "message": "Não foi encontrado propriedade recusada.", "_return": getGiveUpProperty });
                }
                return response.status(200).json(getGiveUpProperty);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    }

    async updateGiveUpProperty(request, response) {
        try {
            const updateGiveUpProperty = await GiveUpProperty.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async deleteGiveUpProperty(request, response) {
        try {
            const deleteGiveUpProperty = await GiveUpProperty.findOneAndDelete({ _id: request.params.id });
            if (deleteGiveUpProperty == null) {
                return response.status(404).json({ "message": "Não foi encontrado propriedade recusada.", "_return": deleteGiveUpProperty });
            }
            return response.status(200).json(deleteGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

}