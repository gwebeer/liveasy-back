import PropertyItem from '../models/propertyItemModel.js';

export default class PropertyItem {
    
    async createPropertyItem(request, response) {
        try {
            const createPropertyItem = await PropertyItem.create(request.body);
            return response.status(201).json(createPropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getPropertyItem(request, response) {
        if (request.params.id == "all") {
            try {
                const getPropertyItems = await PropertyItem.find()
                if (getPropertyItems == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os itens da propriedade.", "_return": getPropertyItems })
                }
                return response.status(200).json(getPropertyItems);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getPropertyItem = await PropertyItem.findOne({ _id: request.params.id })
                if (getPropertyItem == null) {
                    return response.status(404).json({ "message": "Não foi encontrado o item da propriedade.", "_return": getPropertyItem })
                }
                return response.status(200).json(getPropertyItem);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } 
    }
    
    async updatePropertyItem(request, response) {
        try {
            const updatePropertyItem = await PropertyItem.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updatePropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async deletePropertyItem(request, response) {
        try {
            const deletePropertyItem = await PropertyItem.findOneAndDelete({ _id: request.params.id });
            if (deletePropertyItem == null) {
                return response.status(404).json({ "message": "Não foi possível excluir o item da propriedade.", "_return": deletePropertyItem });
            }
            return response.status(200).json(deletePropertyItem);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
}