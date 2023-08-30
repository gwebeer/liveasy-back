import GiveUpPropertyModel from '../models/giveUpPropertyModel.js';

export default class GiveUpPropertyService {

    async createGiveUpProperty(data) {
        const giveUpPropertyModel = new GiveUpPropertyModel();
        
        const giveUpPropertyExists = await giveUpPropertyModel.find({
            property: data.property,
        });
        if (giveUpPropertyExists) {
            throw Error("Essa propriedade recusada já existe.");
        }

        const createGiveUpProperty = await giveUpPropertyModel.create(data);
        return createGiveUpProperty;
    }

    async getGiveUpProperty(data) {
        const giveUpPropertyModel = new GiveUpPropertyModel();

        if (data.id == "all") {
            try {
                const getGiveUpProperties = await giveUpPropertyModel.find();
                return getGiveUpProperties;
            } catch (error) {
                throw Error("Houve problema ao buscar as propriedades recusadas.");
            }
        } else {
            try {
                const getGiveUpProperty = await giveUpPropertyModel.findOne({ _id: data.id })
                return getGiveUpProperty;
            } catch (error) {
                throw Error("Houve problema ao buscar a propriedade recusada.");
            }
        }
    }

    async updateGiveUpProperty(data) {
        const giveUpPropertyModel = new GiveUpPropertyModel();

        const updateGiveUpProperty = await giveUpPropertyModel.findOneAndUpdate({ _id : data.id }, data);
        return updateGiveUpProperty;
    }

    async deleteGiveUpProperty(data) {
        const giveUpPropertyModel = new GiveUpPropertyModel();

        const deleteGiveUpProperty = await giveUpPropertyModel.findOneAndDelete({ _id: data.id });
        return deleteGiveUpProperty;
    }

}