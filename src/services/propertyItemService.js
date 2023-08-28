import PropertyItemController from '../controller/propertyItemController.js';

export default class PropertyItemService {

    async createPropertyItem(data) {
        const propertyItemModel = new propertyItemModel();

        const propertyItemExists = await propertyItemModel.find({
            title: data.title
        });
        if (propertyItemExists) {
            throw Error("Esse item da propriedade já existe.");
        }

        const createPropertyItem = await propertyItemModel.create(data);
        return createPropertyItem;
    }

    async getPropertyItem(data) {
        const propertyItemModel = new propertyItemModel();

        if (data.id == "all") {
            try {
                const getPropertyItems = await propertyItemModel.find();
                return getPropertyItems;
            } catch (error) {
                throw Error("Houve problema ao buscar os itens da propriedade.");
            }
        } else {
            try {
                const getPropertyItem = await propertyItemModel.findOne({ _id: data.id });
                return getPropertyItem;
            } catch (error) {
                throw Error("Houve problema ao buscar o item da propriedade.");
            }
        } 
    }

    async updatePropertyItem(data) {
        const propertyItemModel = new propertyItemModel();

        const updatePropertyItem = await propertyItemModel.findOneAndUpdate({ _id: data.id }, data);
        return updatePropertyItem;
    }

    async deletePropertyItem(data) {
        const propertyItemModel = new propertyItemModel();

        const deletePropertyItem = await propertyItemModel.findOneAndDelete({ _id: data.id });
        return deletePropertyItem;
    }

}