import IdealPropertyModel from '../models/idealPropertyModel.js';

export default class IdealPropertyService {

    async createIdealProperty(data) {        
        try {
            const idealPropertyExists = await IdealPropertyModel.find();
            if (idealPropertyExists.length > 0) {
                throw Error("A propriedade ideal já foi cadastrada.");
            }
            if (data.bathrooms <= 0) {
                throw Error("Deve existir pelo menos 1 banheiro!");
            }
            if (data.propertyType != "apartament" || 
                data.propertyType != "house" || 
                data.propertyType != "loft") {
                throw Error("O tipo da propriedade deve ser válido!")
            }
            if (data.rooms <= 0) {
                throw Error("Deve existir pelo menos 1 quarto!")
            }
            if (data.parkingSpaces < 0) {
                throw Error("As vagas não podem ser negativas!")
            }

            const idealProperty = await IdealPropertyModel.create(data);
            return idealProperty;
        } catch (error) {
            throw Error("Houve um erro ao adicionar uma propriedade ideal");
        }
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