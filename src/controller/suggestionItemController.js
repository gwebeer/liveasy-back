import SuggestionItemService from '../services/suggestionItemService.js';

export default class SuggestionItem {
    
    async createSuggestionItem(request, response) {
        try {
            const suggestionItemService = new SuggestionItemService();
            const createSuggestionItem = await suggestionItemService.createSuggestionItem(request.body);
            return response.status(201).json(createSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async getSuggestionItem(request, response) {
        const suggestionItemService = new SuggestionItemService();
        try {
            const getSuggestionItem = await suggestionItemService.getSuggestionItem(request.body);
            if (getSuggestionItem == null) {
                return response.status(404).json({ 'message': 'Não foi(ram) encontrado(s) o(s) item(ns) de sugestão.', '_return': getSuggestionItem });
            }
            return response.status(200).json(getSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
    async updateSuggestionItem(request, response) {
        try {
            const suggestionItemService = new SuggestionItemService();
            const updateSuggestionItem = await suggestionItemService.updateSuggestionItem(request.body);
            return response.status(200).json(updateSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
    async deleteSuggestionItem(request, response) {
        try {
            const suggestionItemService = new SuggestionItemService();
            const deleteSuggestionItem = await suggestionItemService.deleteSuggestionItem(request.body);
            if (deleteSuggestionItem == null) {
                return response.status(404).json({ 'message': 'Não foi encontrado o item de sugestão.', '_return': deleteSuggestionItem });
            }
            return response.status(200).json(deleteSuggestionItem);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
    
}