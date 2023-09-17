import PropertyItemService from '../services/propertyItemService.js';

export default class PropertyItemController {
    
    async createPropertyItem(request, response) {
        try {
            const propertyItemService = new PropertyItemService();
            const createPropertyItem = await propertyItemService.createPropertyItem(request.body);
            return response.status(201).json(createPropertyItem);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async getPropertyItem(request, response) {
        try {
            const propertyItemService = new PropertyItemService();
            const getPropertyItem = await propertyItemService.getPropertyItem(request.params);
            if (getPropertyItem == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrado(s) o(s) item(ns) da propriedade.", "_return": getPropertyItem })
            }
            return response.status(200).json(getPropertyItem);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        } 
    }
    
    async updatePropertyItem(request, response) {
        try {
            const propertyItemService = new PropertyItemService();
            const updatePropertyItem = await propertyItemService.updatePropertyItem(request.body);
            return response.status(200).json(updatePropertyItem);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
    async deletePropertyItem(request, response) {
        try {
            const propertyItemService = new PropertyItemService();
            const deletePropertyItem = await propertyItemService.deletePropertyItem(request.params);
            if (deletePropertyItem == null) {
                return response.status(404).json({ "message": "Não foi possível excluir o item da propriedade.", "_return": deletePropertyItem });
            }
            return response.status(200).json(deletePropertyItem);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
}