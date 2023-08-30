import ReasonModel from '../models/reasonModel.js';

export default class ReasonService {

    async createReason(data) {        
        const choosedPropertyExists = await ReasonModel.find({
            property: data.property,
            reason: data.reason
        });
        if (choosedPropertyExists.length > 0) {
            throw Error('Essa razão para essa propriedade já foi criada.');
        }

        const createReason = await ReasonModel.create(data);
        return createReason;
    }

    async getReason(data) {
        if (data.id == "all") {
            try {
                const getChoosedProperties = await ReasonModel.find();
                return getChoosedProperties;
            } catch (error) {
                throw Error("Houve problema ao buscar as razões.");
            }
        } else {
            try {
                const getReason = await ReasonModel.findOne({ _id: data.id })
                return getReason;
            } catch (error) {
                throw Error("Houve problema ao buscar a razão.");
            }
        }
    }

    async updateReason(data) {
        const updateReason = await ReasonModel.findOneAndUpdate({ _id : data.id }, data);
        return updateReason;
    }

    async deleteReason(data) {        
        const deleteReason = await ReasonModel.findOneAndDelete({ _id: data.id });
        return deleteReason;
    }

}