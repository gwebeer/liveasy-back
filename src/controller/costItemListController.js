import CostItemListService from "../services/costItemListService.js";

export default class CostItemList {
    
    async createCostItemList(request, response) {
        try {
            const costItemListService = new CostItemListService();
            const createCostItemList = await costItemListService.createCostItemList(request.body);
            return response.status(201).json(createCostItemList);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async getCostItemList(request, response) {
        try {
            const costItemListService = new CostItemListService();
            const getCostItemList = await costItemListService.getCostItemList(request.params);
            if (getCostItemList == null) {
                return response.status(404).json({ "message": "Não foram encontrados os planejamentos de custo.", "_return": getCostItemList });
            }
            return response.status(200).json(getCostItemList);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async updateCostItemList(request, response) {
        try {
            const costItemListService = new CostItemListService();
            const updateCostItemList = await costItemListService.updateCostItemList(request.body);
            if (updateCostItemList[1] == false) {
                return response.status(204).json({ msg: "Nenhum dado foi alterado" });
            }
            return response.status(200).json(updateCostItemList);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async deleteCostItemList(request, response) {
        try {
            const costItemListService = new CostItemListService();
            const deleteCostItemList = await costItemListService.deleteCostItemList(request.params);
            if (deleteCostItemList == null) {
                return response.status(404).json({ "message": "Não foi encontrado o item de planejamento de custo.", "_return": deleteCostItemList });
            }
            return response.status(200).json(deleteCostItemList);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

}