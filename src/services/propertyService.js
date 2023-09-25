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

        let infoCompare = {
            isChoosed: updateProperty.isChoosed == data.isChoosed,
            score: updateProperty.score == data.score,
            name: updateProperty.name == data.name,
            address: updateProperty.address == data.address,
            zipCode: updateProperty.zipCode == data.zipCode,
            neighborhood: updateProperty.neighborhood == data.neighborhood,
            type: updateProperty.type == data.type,
            rooms: updateProperty.rooms == data.rooms,
            bathrooms: updateProperty.bathrooms == data.bathrooms,
            parkingSpaces: updateProperty.parkingSpaces == data.parkingSpaces,
            infraestructure: updateProperty.infraestructure == data.infraestructure,
            furnished: updateProperty.furnished == data.furnished,
            isForRent: updateProperty.isForRent == data.isForRent,
            value: updateProperty.value == data.value
        }
        if (!Object.values(infoCompare).includes(false)) {
            return [updateProperty, false]
        }
        return [updateProperty, true];
    }

    async deleteProperty(data) {
        const deleteProperty = await PropertyModel.findOneAndDelete({ _id: data.id });
        return deleteProperty;
    }

}