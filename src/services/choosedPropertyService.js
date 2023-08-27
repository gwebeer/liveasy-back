import ChoosedPropertyModel from '../models/choosedPropertyModel.js';

export default class ChoosedPropertyService {

    async createChoosedProperty(data) {
        const choosedPropertyModel = new ChoosedPropertyModel();
        
        const choosedPropertyExists = await choosedPropertyModel.find({
            property: data.property
        });
        if (choosedPropertyExists) {
            throw Error('Essa propriedade já foi escolhida.');
        }

        const createChoosedProperty = await choosedPropertyModel.create(data);
        return createChoosedProperty;
    }

    async getChoosedProperty(data) {
        const choosedPropertyModel = new ChoosedPropertyModel();

        if (data.id == "all") {
            try {
                const getChoosedProperties = await choosedPropertyModel.find();
                return getChoosedProperties;
            } catch (error) {
                throw Error("Houve problema ao buscar as propriedades escolhidas.");
            }
        } else {
            try {
                const getChoosedProperty = await choosedPropertyModel.findOne({ _id: data.id })
                return getChoosedProperty;
            } catch (error) {
                throw Error("Houve problema ao buscar a propriedade escolhida.");
            }
        }
    }

    async updateChoosedProperty(data) {
        const choosedPropertyModel = new ChoosedPropertyModel();

        const updateChoosedProperty = await choosedPropertyModel.findOneAndUpdate({ _id : data.id }, data);
        return updateChoosedProperty;
    }

    async deleteChoosedProperty(data) {
        const choosedPropertyModel = new ChoosedPropertyModel();
        
        const deleteChoosedProperty = await choosedPropertyModel.findOneAndDelete({ _id: data.id });
        return deleteChoosedProperty;
    }

}