import CostItemListModel from '../models/costItemListModel.js';

export default class CostItemListService {

    async createCostItemList(data) {
        const costItemListModel = new CostItemListModel();

        const CostItemListExists = await costItemListModel.find({
            title: data.title
        });

        if (CostItemListExists) {
            throw Error("Esse item de custos já existe");
        }

        const createCostItemList = await costItemListModel.create(data);
        return createCostItemList;
    } 

    async getCostItemList(data) {
        const costItemListModel = new CostItemListModel();

        if (data.id == "all") {
            try {
                const getCostItemLists = await costItemListModel.find()
                return getCostItemLists;
            } catch (error) {
                throw Error("Houve problema ao buscar os itens de custo.");
            }
        } else {
            try {
                const getCostItemList = await costItemListModel.findOne({ _id: data.id });
                return getCostItemList;
            } catch (error) {
                throw Error("Houve problema ao buscar o item de custo.");
            }
        }

    }

    async updateCostItemList(data) {
        const costItemListModel = new CostItemListModel();

        const updateCostItemList = await costItemListModel.findOneAndUpdate({ _id : data.id }, data);
        return updateCostItemList;
    }

    async deleteCostItemList(data) {
        const costItemListModel = new CostItemListModel();

        const deleteCostItemList = await costItemListModel.findOneAndDelete({ _id: data.id });
        return deleteCostItemList;
    } 

}