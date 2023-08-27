import CostItemList from "../models/costItemListModel.js";

export default class CostItemList {
    
    async createCostItemList(request, response) {
        try {
            const createCostItemList = await CostItemList.create(request.body);
            return response.status(201).json(createCostItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getCostItemList(request, response) {
        if (request.params.id == "all") {
            try {
                const getCostItemLists = await CostItemList.find()
                if (getCostItemLists == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os planejamentos de custo.", "_return": getCostItemLists });
                }
                return response.status(200).json(getCostItemLists);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getCostItemList = await CostItemList.findOne({ _id: request.params.id })
                if (getCostItemList == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os planejamentos de custo.", "_return": getCostItemList });
                }
                return response.status(200).json(getCostItemList);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    }

    async updateCostItemList(request, response) {
        try {
            const updateCostItemList = await CostItemList.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateCostItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async deleteCostItemList(request, response) {
        try {
            const deleteCostItemList = await CostItemList.findOneAndDelete({ _id: request.params.id });
            if (deleteCostItemList == null) {
                return response.status(404).json({ "message": "Não foi encontrado o item de planejamento de custo.", "_return": deleteCostItemList });
            }
            return response.status(200).json(deleteCostItemList);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

}