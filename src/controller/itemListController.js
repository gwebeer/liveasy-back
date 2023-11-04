import ItemListService from '../services/itemListService.js';

export default class ItemList {
    
    async createItemList(request, response) {
        try {
            const itemListService = new ItemListService();
            const createItemList = await itemListService.createItemList(request.body);
            return response.status(201).json(createItemList);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async getItemList(request, response) {
        try {
            const itemListService = new ItemListService();
            const getItemList = await itemListService.getItemList(request.params);
            if (getItemList == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrado(s) item(ns) personalizado(s).", "_return": getItemList });
            }
            return response.status(200).json(getItemList);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
    async updateItemList(request, response) {
        try {
            const itemListService = new ItemListService();
            const updateItemList = await itemListService.updateItemList(request.body);
            if (updateItemList[1] === false) {
                return response.status(204).json({ msg: "Nenhum dado foi alterado"});
            }
            else if (updateItemList[1] === true) {
                return response.status(200).json(updateItemList[0]);
            }
            else {
                return response.status(200).json(updateItemList[0]);
            }
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
    async deleteItemList(request, response) {
        try {
            const itemListService = new ItemListService();
            const deleteItemList = await itemListService.deleteItemList(request.params);
            if (deleteItemList == null) {
                return response.status(404).json({ "message": "Não foi encontrado item personalizado.", "_return": deleteItemList });
            }
            return response.status(200).json(deleteItemList);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
}