import ItemListModel from '../models/itemListModel.js';

export default class ItemListService {

    async createItemList() {
        const itemListModel = new ItemListModel();

        const itemListExists = await itemListModel.find({
            title: data.title
        });
        if (itemListExists) {
            throw Error("Esse item já está cadastrado.");
        }

        const createItemList = await itemListModel.create(data);
        return createItemList;
    }

    async getItemList(data) {
        const itemListModel = new ItemListModel();

        if (data.id == "all") {
            try {
                const getItemLists = await itemListModel.find();
                return getItemLists;
            } catch (error) {
                throw Error("Houve problema ao buscar os itens personalizados.");
            }
        } else {
            try {
                const getItemList = await itemListModel.findOne({ _id: data.id });
                return getItemList;
            } catch (error) {
                throw Error("Houve problema ao buscar o item personalizado.");
            }
        }
    }

    async updateItemList(data) {
        const itemListModel = new ItemListModel();

        const updateItemList = await itemListModel.findOneAndUpdate({ _id: data.id }, data);
        return updateItemList;
    }

    async deleteItemList(data) {
        const itemListModel = new ItemListModel();

        const deleteItemList = await itemListModel.findOneAndDelete({ _id: data.id });
        return deleteItemList;
    }
}