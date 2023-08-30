import PropertyItemModel from '../models/propertyItemModel.js';

export default class PropertyItemService {

    async createPropertyItem(data) {
        const propertyItemExists = await PropertyItemModel.find({
            title: data.title
        });
        if (propertyItemExists.length > 0) {
            throw Error("Esse item da propriedade já existe.");
        }

        const createPropertyItem = await PropertyItemModel.create(data);
        return createPropertyItem;
    }

    async getPropertyItem(data) {
        if (data.id == "all") {
            try {
                const getPropertyItems = await PropertyItemModel.find();
                return getPropertyItems;
            } catch (error) {
                throw Error("Houve problema ao buscar os itens da propriedade.");
            }
        } else {
            try {
                const getPropertyItem = await PropertyItemModel.findOne({ _id: data.id });
                return getPropertyItem;
            } catch (error) {
                throw Error("Houve problema ao buscar o item da propriedade.");
            }
        } 
    }

    async updatePropertyItem(data) {
        const updatePropertyItem = await PropertyItemModel.findOneAndUpdate({ _id: data.id }, data);
        return updatePropertyItem;
    }

    async deletePropertyItem(data) {
        const deletePropertyItem = await PropertyItemModel.findOneAndDelete({ _id: data.id });
        return deletePropertyItem;
    }

}