import PropertyService from "../services/propertyService.js";

export default class Property {
    
    async createProperty(request, response) {
        try {
            const propertyService = new PropertyService();
            const createProperty = await propertyService.createProperty(request.body);
            
            return response.status(201).json(createProperty);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async getProperty(request, response) {
        try {
            const propertyService = new PropertyService();
            const getProperty = await propertyService.getProperty(request.params);
            if (getProperty == null) {
                return response.status(404).json({"message": "Não foram encontradas as propriedades.", "_return": getProperty});
            }
            return response.status(200).json(getProperty);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async updateProperty(request, response) {
        try {
            const propertyService = new PropertyService();
            const updateProperty = await propertyService.updateProperty(request.body);
            if (updateProperty[1] == false) {
                return response.status(204).json({ msg: "Nenhum dado foi alterado"});
            }
            return response.status(200).json(updateProperty[0]);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async deleteProperty(request, response) {
        try {
            const propertyService = new PropertyService();
            const deleteProperty = await propertyService.deleteProperty(request.params);
            if (deleteProperty == null) {
                return response.status(404).json({ 'message': 'Não foi possível excluir a propriedade.', '_return': deleteProperty })
            }
            return response.status(200).json(deleteProperty);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}