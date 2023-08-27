import ItemList from '../models/itemListModel.js';

export default class ItemList {
    
    async createItemList(request, response) {
        try {
            const createItemList = await ItemList.create(request.body);
            return response.status(201).json(createItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getItemList(request, response) {
        if (request.params.id == "all") {
            try {
                const getItemLists = await ItemList.find()
                if (getItemLists == null) {
                    return response.status(404).json({ "message": "Não foram encontrados itens personalizados.", "_return": getItemLists });
                }
                return response.status(200).json(getItemLists);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getItemList = await ItemList.findOne({ _id: request.params.id })
                if (getItemList == null) {
                    return response.status(404).json({ "message": "Não foi encontrado item personalizado.", "_return": getItemList });
                }
                return response.status(200).json(getItemList);
            } catch (error) {
                return response.status(404).json({ error });
            }
        }
    }
    
    async updateItemList(request, response) {
        try {
            const updateItemList = await ItemList.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async deleteItemList(request, response) {
        try {
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