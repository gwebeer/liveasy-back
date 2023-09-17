import IdealPropertyService from "../services/idealPropertyService.js";

export default class IdealProperty {
    
    async createIdealProperty(request, response) {
        try {
            const idealPropertyService = new IdealPropertyService();
            const createIdealProperty = await idealPropertyService.createIdealProperty(request.body);
            return response.status(201).json(createIdealProperty);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async getIdealProperty(request, response) {
        try {
            const idealPropertyService = new IdealPropertyService();
            const getIdealProperty = await idealPropertyService.getIdealProperty(request.params);
            if (getIdealProperty == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrado(s) o(s) dado(s) da propriedade ideal.", "_return": getIdealProperty });
            }
            return response.status(200).json(getIdealProperty);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async updateIdealProperty(request, response) {
        try {
            const idealPropertyService = new IdealPropertyService();
            const updateIdealProperty = await idealPropertyService.updateIdealProperty(request.body);
            return response.status(200).json(updateIdealProperty);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async deleteIdealProperty(request, response) {
        try {
            const idealPropertyService = new IdealPropertyService();
            const deleteIdealProperty = await idealPropertyService.deleteIdealProperty(request.params);
            if (deleteIdealProperty == null) {
                return response.status(404).json({ "message": "Não foi encontrado os dados da propriedade ideal.", "_return": deleteIdealProperty });
            }
            return response.status(200).json(deleteIdealProperty);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

}