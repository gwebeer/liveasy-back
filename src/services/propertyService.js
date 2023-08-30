import PropertyModel from '../models/propertyModel.js';

export default class PropertyService {

    async createProperty(data) {    
        const propertyExists = await PropertyModel.find({
            name: data.name,
            address: data.address,
            zipCode: data.zipCode
        });
        if (propertyExists.length > 0) {
            throw Error("Essa propriedade já existe.");
        }
        const createProperty = await PropertyModel.create(data);
        return createProperty; 
    }

    async getProperty(data) {
        if (data.id == "all") {
            try {
                const getProperties = await PropertyModel.find();
                return getProperties;
            } catch (error) {
                throw Error("Houve um problema ao buscar as propriedades.");
            }
        } else {
            try {
                const getProperty = await PropertyModel.findOne({ _id: data.id });
                return getProperty;
            } catch (error) {
                throw Error("Houve um problema ao buscar a propriedade.");
            }
        }
    }

    async updateProperty(data) {
        const updateProperty = await PropertyModel.findOneAndUpdate({ _id : data.id }, data);
        return updateProperty;
    }

    async deleteProperty(data) {
        const deleteProperty = await PropertyModel.findOneAndDelete({ _id: data.id });
        return deleteProperty;
    }

}