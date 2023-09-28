import IdealPropertyModel from '../models/idealPropertyModel.js';

export default class IdealPropertyService {

    async createIdealProperty(data) {      
        const idealPropertyExists = await IdealPropertyModel.find({
            user: data.user
        });
        if (idealPropertyExists.length > 0) {
            throw Error("A propriedade ideal já foi cadastrada para esse usuário.");
        }
        if (data.propertyType !== "apartament" && data.propertyType !== "house" && data.propertyType !== "loft") {
            throw Error("O tipo da propriedade deve ser válido!")
        }
        if (data.bathrooms != "one-bathroom" &&
            data.bathrooms != "two-bathrooms" &&
            data.bathrooms != "more-bathrooms" ) {
            throw Error("Os banheiros devem ser válidos!");
        }
        if (data.rooms != "one-room" &&
            data.rooms != "two-rooms" &&
            data.rooms != "more-rooms") {
            throw Error("Os quartos devem ser válidos!")
        }
        if (data.parkingSpaces != "no-vehicle" &&
            data.parkingSpaces != "one-vehicle" &&
            data.parkingSpaces != "more-vehicles") {
            throw Error("As vagas devem ser válidas!")
        }

        if (data.bathrooms != "one-bathroom") {
            data.bathrooms = 1
        } else if (data.bathrooms != "two-bathrooms") {
            data.bathrooms = 2
        } else {
            data.bathrooms = 3
        }

        if (data.rooms != "one-room") {
            data.rooms = 1
        } else if (data.rooms != "two-room") {
            data.rooms = 2
        } else {
            data.rooms = 3
        }

        if (data.parkingSpaces != "no-vehicle") {
            data.parkingSpaces = 0
        } else if (data.parkingSpaces != "one-vehicle") {
            data.parkingSpaces = 1
        } else {
            data.parkingSpaces = 2
        }

        const idealProperty = await IdealPropertyModel.create(data);
        return idealProperty;
    }

    async getIdealProperty(data) {
        if (data.id == "all") {
            try {
                const getIdealProperties = await IdealPropertyModel.find();
                return getIdealProperties;
            } catch (error) {
                throw Error("Houve um erro ao buscar as informações da propriedade ideal.");
            }
        } else {
            try {
                const getIdealProperty = await IdealPropertyModel.findOne({ _id: data.id });
                return getIdealProperty;
            } catch (error) {
                throw Error("Houve um erro ao procurar as informações da propriedade ideal.");
            }
        }
    }

    async updateIdealProperty(data) {
        const updateIdealProperty = await IdealPropertyModel.findOneAndUpdate({ _id : data.id }, data);

        let infoCompare = {
            peopleLiving: updateIdealProperty.peopleLiving == data.peopleLiving,
            type: updateIdealProperty.type == data.type,
            rooms: updateIdealProperty.rooms == data.rooms,
            bathrooms: updateIdealProperty.bathrooms == data.bathrooms,
            parkingSpaces: updateIdealProperty.parkingSpaces == data.parkingSpaces,
            infraestructure: updateIdealProperty.infraestructure == data.infraestructure,
            furnished: updateIdealProperty.furnished == data.furnished,
            priceRange: updateIdealProperty.priceRange == data.priceRange,
            isForRent: updateIdealProperty.isForRent == data.isForRent
        }
        if (!Object.values(infoCompare).includes(false)) {
            return [updateIdealProperty, false]
        }
        return [updateIdealProperty, true];
    }

    async deleteIdealProperty(data) {
        const deleteIdealProperty = await IdealPropertyModel.findOneAndDelete({ _id: data.id });
        return deleteIdealProperty;
    }
    
}