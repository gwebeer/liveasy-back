const ChoosedProperty = require("../models/choosedPropertyModel");

module.exports = {

    async createChoosedProperty(request, response) {
        try {
            const createChoosedProperty = await ChoosedProperty.create(request.body);
            return response.status(201).json(createChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getChoosedProperty(request, response) {
        if (request.params.id == "all") {
            try {
                const getChoosedPropertys = await ChoosedProperty.find()
                return response.status(200).json(getChoosedPropertys);
            } catch (error) {
                return response.status(404).json({ error });
            }
        } else {
            try {
                const getChoosedProperty = await ChoosedProperty.findOne({ _id: request.params.id })
                return response.status(200).json(getChoosedProperty);
            } catch (error) {
                return response.status(404).json({ error });
            }
        }
    },

    async updateChoosedProperty(request, response) {
        try {
            const updateChoosedProperty = await ChoosedProperty.findOneAndUpdate({ _id : request.params.id }, request.body);
            return response.status(200).json(updateChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async deleteChoosedProperty(request, response) {
        try {
            const deleteChoosedProperty = await ChoosedProperty.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteChoosedProperty);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

}