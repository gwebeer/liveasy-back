import ChoosedProperty from "../models/choosedPropertyModel.js";
import ChoosedPropertyService from "../services/choosedPropertyService.js";

export default class ChoosedProperty {

    async createChoosedProperty(request, response) {
        try {
            const choosedPropertyService = new ChoosedPropertyService();
            const createChoosedProperty = await choosedPropertyService.createChoosedProperty(request.body);
            return response.status(201).json(createChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getChoosedProperty(request, response) {
        try {
            const choosedPropertyService = new ChoosedPropertyService();
            const getChoosedProperty = await choosedPropertyService.getChoosedProperty(request.body);
            if (getChoosedProperty == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrada(s) propriedade(s) escolhida(s).", "_return": getChoosedProperties });
            }
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async updateChoosedProperty(request, response) {
        try {
            const choosedPropertyService = new ChoosedPropertyService();
            const updateChoosedProperty = await choosedPropertyService.updateChoosedProperty(request.body);
            return response.status(200).json(updateChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async deleteChoosedProperty(request, response) {
        try {
            const choosedPropertyService = new ChoosedPropertyService();
            const deleteChoosedProperty = await choosedPropertyService.deleteChoosedProperty(request.body); 
            if (deleteChoosedProperty == null) {
                return response.status(404).json({ "message": "Não foi encontrada propriedade escolhida.", "_return": deleteChoosedProperty });
            }
            return response.status(200).json(deleteChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

}