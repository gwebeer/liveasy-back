import PropertyModel from '../models/propertyModel.js';

export default class PropertyService {

    async createProperty(data) {
        const propertyModel = new PropertyModel(data);
    
        const propertyExists = await propertyModel.find({
            name: data.name,
            zipCode: data.zipCode
        });
        if (propertyExists) {
            throw Error("Essa propriedade já existe.");
        }

        const createProperty = await propertyModel.create(data);
        return createProperty; 
    }

    async getProperty(data) {
        const propertyModel = new PropertyModel();

        if (data.id == "all") {
            try {
                const getProperties = await propertyModel.find();
                return getProperties;
            } catch (error) {
                throw Error("Houve um problema ao buscar as propriedades.");
            }
        } else {
            try {
                const getProperty = await propertyModel.findOne({ _id: data.id });
                return getProperty;
            } catch (error) {
                throw Error("Houve um problema ao buscar a propriedade.");
            }
        }
    }

    async updateProperty(data) {
        const propertyModel = new PropertyModel(data);

        const updateProperty = await propertyModel.findOneAndUpdate({ _id : data.id }, data);
        return updateProperty;
    }

    async deleteProperty(data) {
        const propertyModel = new PropertyModel(data);

        const deleteProperty = await propertyModel.findOneAndDelete({ _id: data.id });
        return deleteProperty;
    }

}