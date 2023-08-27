import SuggestionItem from '../models/suggestionItemModel.js';

export default class SuggestionItem {
    
    async createSuggestionItem(request, response) {
        try {
            const createSuggestionItem = await SuggestionItem.create(request.body);
            return response.status(201).json(createSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getSuggestionItem(request, response) {
        if (request.params.id == "all") {
            try {
                const getSuggestionItems = await SuggestionItem.find()
                if (getSuggestionItems == null) {
                    return response.status(404).json({ 'message': 'Não foram encontrados os itens de sugestão.', '_return': getSuggestionItems });
                }
                return response.status(200).json(getSuggestionItems);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getSuggestionItem = await SuggestionItem.findOne({ _id: request.params.id })
                if (getSuggestionItem == null) {
                    return response.status(404).json({ 'message': 'Não foi encontrado o item de sugestão.', '_return': getSuggestionItem });
                }
                return response.status(200).json(getSuggestionItem);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } 
    }
    
    async updateSuggestionItem(request, response) {
        try {
            const updateSuggestionItem = await SuggestionItem.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async deleteSuggestionItem(request, response) {
        try {
            const deleteSuggestionItem = await SuggestionItem.findOneAndDelete({ _id: request.params.id });
            if (deleteSuggestionItem == null) {
                return response.status(404).json({ 'message': 'Não foi encontrado o item de sugestão.', '_return': deleteSuggestionItem });
            }
            return response.status(200).json(deleteSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
}