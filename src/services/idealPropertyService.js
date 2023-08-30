import IdealPropertyModel from '../models/idealPropertyModel.js';

export default class IdealPropertyService {

    async createIdealProperty(data) {
        const idealPropertyModel = new IdealPropertyModel();
        
        const idealPropertyExists = await idealPropertyModel.find();
        if (idealPropertyExists != null) {
            throw Error("A propriedade ideal já foi cadastrada.");
        }

        const idealProperty = await idealPropertyModel.create(data);
        return idealProperty;
    }

    async getIdealProperty(data) {
        const idealPropertyModel = new IdealPropertyModel();

        if (data.id == "all") {
            try {
                const getIdealProperties = await idealPropertyModel.find();
                return getIdealProperties;
            } catch (error) {
                throw Error("");
            }
        } else {
            try {
                const getIdealProperty = await idealPropertyModel.findOne({ _id: data.id });
                return getIdealProperty;
            } catch (error) {
                throw Error("");
            }
        }
    }

    async updateIdealProperty(data) {
        const idealPropertyModel = new IdealPropertyModel();

        const updateIdealProperty = await idealPropertyModel.findOneAndUpdate({ _id : data.id }, data);
        return updateIdealProperty;
    }

    async deleteIdealProperty(data) {
        const idealPropertyModel = new IdealPropertyModel();

        const deleteIdealProperty = await idealPropertyModel.findOneAndDelete({ _id: data.id });
        return deleteIdealProperty;
    }
    
}