import Property from "../models/propertyModel.js";

export default class Property {
    
    async createProperty(request, response) {
        try {
            const createProperty = await Property.create(request.body);
            return response.status(201).json(createProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getProperty(request, response) {
        if (request.params.id == "all") {
            try {
                const getProperties = await Property.find()
                if (getProperties == null) {
                    return response.status(404).json({"message": "Não foram encontradas as propriedades.", "_return": getProperties})
                }
                return response.status(200).json(getProperties);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getProperty = await Property.findOne({ _id: request.params.id })
                if (getProperty == null) {
                    return response.status(404).json({"message": "Não foi encontrada a propriedade.", "_return": getProperty})
                }
                return response.status(200).json(getProperty);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    }

    async updateProperty(request, response) {
        try {
            const updateProperty = await Property.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async deleteProperty(request, response) {
        try {
            const deleteProperty = await Property.findOneAndDelete({ _id: request.params.id });
            if (deleteProperty == null) {
                return response.status(404).json({ 'message': 'Não foi possível excluir a propriedade.', '_return': deleteProperty })
            }
            return response.status(200).json(deleteProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

}