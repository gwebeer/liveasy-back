import itemListService from '../services/itemListService.js';

export default class ItemList {
    
    async createItemList(request, response) {
        try {
            const itemListService = new ItemListService();
            const createItemList = await itemListService.createItemList(request.body);
            return response.status(201).json(createItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getItemList(request, response) {
        try {
            const itemListService = new ItemListService();
            const getItemList = await itemListService.getItemList(request.body);
            if (getItemList == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrado(s) item(ns) personalizado(s).", "_return": getItemList });
            }
            return response.status(200).json(getItemList);
        } catch (error) {
            return response.status(404).json({ error });
        }
    }
    
    async updateItemList(request, response) {
        try {
            const itemListService = new ItemListService();
            const updateItemList = await ItemList.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async deleteItemList(request, response) {
        try {
            const itemListService = new ItemListService();
            const deleteItemList = await ItemList.findOneAndDelete({ _id: request.params.id });
            if (deleteItemList == null) {
                return response.status(404).json({ "message": "Não foi encontrado item personalizado.", "_return": deleteItemList });
            }
            return response.status(200).json(deleteItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
}