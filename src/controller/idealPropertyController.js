import IdealProperty from "../models/idealPropertyModel.js";

export default class IdealProperty {
    
    async createIdealProperty(request, response) {
        try {
            const createIdealProperty = await IdealProperty.create(request.body);
            return response.status(201).json(createIdealProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getIdealProperty(request, response) {
        if (request.params.id == "all") {
            try {
                const getIdealProperties = await IdealProperty.find()
                if (getIdealProperties == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os dados da propriedade ideal.", "_return": getIdealProperties });
                }
                return response.status(200).json(getIdealProperties);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getIdealProperty = await IdealProperty.findOne({ _id: request.params.id })
                if (getIdealProperty == null) {
                    return response.status(404).json({ "message": "Não foi encontrado os dados da propriedade ideal.", "_return": getIdealProperty });
                }
                return response.status(200).json(getIdealProperty);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    }

    async updateIdealProperty(request, response) {
        try {
            const updateIdealProperty = await IdealProperty.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateIdealProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async deleteIdealProperty(request, response) {
        try {
            const deleteIdealProperty = await IdealProperty.findOneAndDelete({ _id: request.params.id });
            if (deleteIdealProperty == null) {
                return response.status(404).json({ "message": "Não foi encontrado os dados da propriedade ideal.", "_return": deleteIdealProperty });
            }
            return response.status(200).json(deleteIdealProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

}