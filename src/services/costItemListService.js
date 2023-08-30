import CostItemListModel from '../models/costItemListModel.js';

export default class CostItemListService {

    async createCostItemList(data) {
        const CostItemListExists = await CostItemListModel.find({
            title: data.title
        });
        if (CostItemListExists.length > 0) {
            throw Error("Esse item de custos já existe");
        }
        const createCostItemList = await CostItemListModel.create(data);
        return createCostItemList;
    } 

    async getCostItemList(data) {
        if (data.id == "all") {
            try {
                const getCostItemLists = await CostItemListModel.find()
                return getCostItemLists;
            } catch (error) {
                throw Error("Houve problema ao buscar os itens de custo.");
            }
        } else {
            try {
                const getCostItemList = await CostItemListModel.findOne({ _id: data.id });
                return getCostItemList;
            } catch (error) {
                throw Error("Houve problema ao buscar o item de custo.");
            }
        }
    }

    async updateCostItemList(data) {
        const updateCostItemList = await CostItemListModel.findOneAndUpdate({ _id : data.id }, data);
        return updateCostItemList;
    }

    async deleteCostItemList(data) {
        const deleteCostItemList = await CostItemListModel.findOneAndDelete({ _id: data.id });
        return deleteCostItemList;
    } 

}