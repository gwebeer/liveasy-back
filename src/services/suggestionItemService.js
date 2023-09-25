import SuggestionItemModel from '../models/suggestionItemModel.js';

export default class SuggestionItemService {

    async createSuggestionItem(data) {
        const suggestionItemExists = await SuggestionItemModel.find({
            type: data.type,
            title: data.title
        });
        if (suggestionItemExists.length > 0) {
            throw Error("Esse item de sugestão já existe.");
        }
        const createSuggestionItem = await SuggestionItemModel.create(data);
        return createSuggestionItem;
    }

    async getSuggestionItem(data) {
        if (data.id == "all") {
            const getSuggestionItems = await SuggestionItemModel.find();
            return getSuggestionItems;
        } else {
            const getSuggestionItem = await SuggestionItemModel.findOne({ _id: data.id });
            return getSuggestionItem;
        } 
    }

    async updateSuggestionItem(data) {        
        const updateSuggestionItem = await SuggestionItemModel.findOneAndUpdate({ _id: data.id }, data);
        
        let infoCompare = {
            title: updateSuggestionItem.title == data.title,
            category: updateSuggestionItem.category == data.category,
            convenient: updateSuggestionItem.convenient == data.convenient
        }
        if (!Object.values(infoCompare).includes(false)) {
            return [updateSuggestionItem, false]
        }
        return [updateSuggestionItem, true];
    }

    async deleteSuggestionItem(data) {        
        const deleteSuggestionItem = await SuggestionItemModel.findOneAndDelete({ _id: data.id });
        return deleteSuggestionItem;
    }
    
}