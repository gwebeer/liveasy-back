import ItemListModel from '../models/itemListModel.js';

export default class ItemListService {

    async createItemList(data) {
        const itemListExists = await ItemListModel.find({
            title: data.title,
            category: data.category,
            convenient: data.convenient
        });
        if (itemListExists.length > 0) {
            throw Error("Esse item já está cadastrado.");
        }

        const createItemList = await ItemListModel.create(data);
        return createItemList;
    }

    async getItemList(data) {
        if (data.id == "all") {
            try {
                const getItemLists = await ItemListModel.find();
                return getItemLists;
            } catch (error) {
                throw Error("Houve problema ao buscar os itens personalizados.");
            }
        } else {
            try {
                const getItemList = await ItemListModel.findOne({ _id: data.id });
                return getItemList;
            } catch (error) {
                throw Error("Houve problema ao buscar o item personalizado.");
            }
        }
    }

    async updateItemList(data) {
        const updateItemList = await ItemListModel.findOneAndUpdate({ _id: data.id }, data);
        return updateItemList;
    }

    async deleteItemList(data) {
        const deleteItemList = await ItemListModel.findOneAndDelete({ _id: data.id });
        return deleteItemList;
    }
}