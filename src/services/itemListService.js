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
        try {
            const getItemLists = await ItemListModel.find({ process: data.process});
            return getItemLists;
        } catch (error) {
            throw Error("Houve problema ao buscar os itens personalizados.");
        }
    }

    async updateItemList(data) {
        const updateItemList = await ItemListModel.findOneAndUpdate({ _id: data.id }, data);

        let infoCompare = {
            // convenient: updateItemList.convenient == data.convenient,
            title: updateItemList.title == data.title,
            category: updateItemList.category == data.category,
            priority: updateItemList.priority == data.priority,
            value: updateItemList.value == data.value,
            bought: updateItemList.bought == data.bought,
            valuePaid: updateItemList.valuePaid == updateItemList.valuePaid,
            boughtDate: updateItemList.boughtDate == updateItemList.boughtDate
        }
        if (!Object.values(infoCompare).includes(false)) {
            return [updateItemList, false];
        }
        return [updateItemList, true];
    }

    async deleteItemList(data) {
        const deleteItemList = await ItemListModel.findOneAndDelete({ _id: data.id });
        return deleteItemList;
    }
}