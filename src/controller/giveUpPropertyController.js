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
        try {
            const giveUpPropertyService = await GiveUpPropertyService();
            const getGiveUpProperty = await giveUpPropertyService.getGiveUpProperty(request.body);
            if (getGiveUpProperty == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrada(s) propriedade(s) recusada(s).", "_return": getGiveUpProperty });
            }
            return response.status(200).json(getGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async updateGiveUpProperty(request, response) {
        try {
            const giveUpPropertyService = new GiveUpPropertyService();
            const updateGiveUpProperty = await giveUpPropertyService.updateGiveUpProperty(request.body);
            return response.status(200).json(updateGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async deleteGiveUpProperty(request, response) {
        try {
            const giveUpPropertyService = new GiveUpPropertyService();
            const deleteGiveUpProperty = await giveUpPropertyService.deleteGiveUpProperty(request.body);
            if (deleteGiveUpProperty == null) {
                return response.status(404).json({ "message": "Não foi encontrado propriedade recusada.", "_return": deleteGiveUpProperty });
            }
            return response.status(200).json(deleteGiveUpProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

}