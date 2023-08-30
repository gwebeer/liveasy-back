import SuggestionItemModel from '../models/suggestionItemModel.js';

export default class SuggestionItemService {

    async createSuggestionItem(data) {
        const suggestionItemExists = await SuggestionItemModel.find({
            title: data.title,
            type: data.type
        });
        if (suggestionItemExists.length > 0) {
            throw Error("Esse item de sugestão já existe.");
        }
        const createSuggestionItem = await SuggestionItemModel.create(data);
        return createSuggestionItem;
    }

    async getSuggestionItem(data) {
        if (data.id == "all") {
            const getSuggestionItems = await SuggestionItem.find();
            console.log("getSuggestionItems: ", getSuggestionItems);
            return getSuggestionItems;
        } else {
            const getSuggestionItem = await SuggestionItemModel.findOne({ _id: data.id });
            return getSuggestionItem;
        } 
    }

    async updateSuggestionItem(data) {        
        const updateSuggestionItem = await SuggestionItemModel.findOneAndUpdate({ _id: data.id }, data);
        return updateSuggestionItem;
    }

    async deleteSuggestionItem(data) {        
        const deleteSuggestionItem = await SuggestionItemModel.findOneAndDelete({ _id: data.id });
        return deleteSuggestionItem;
    }
    
}