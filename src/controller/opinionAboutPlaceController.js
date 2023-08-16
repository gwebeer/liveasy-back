const OpinionAboutPlace = require("../models/opinionAbouPlaceModel");

module.exports = {

    async createOpinionAboutPlace(request, response) {
        /* 
            #swagger.tags = ["opinionAboutPlaceController"]
            #swagger.description = "Função que cria uma nova opinião sobre o lugar"
            #swagger.responses[201] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        try {
            const createOpinionAboutPlace = await OpinionAboutPlace.create(request.body);
            return response.status(201).json({ createOpinionAboutPlace });
        } catch (error) {
            return response.status(400).json({ error: error });
        }
    },

    async getOpinionAboutPlace(request, response) {
        /* 
            #swagger.tags = ["opinionAboutPlaceController"]
            #swagger.description = "Função que busca por uma ou várias opiniões sobre o lugar"
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getOpinionAboutPlace = await OpinionAboutPlace.findOne({ _id: request.params.id })
                return response.status(200).json(getOpinionAboutPlace);
            } catch (error) {
                console.log("Erro ao obter os detalhes da opinião", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getOpinionAboutPlaces = await OpinionAboutPlace.find()
                return response.status(200).json(getOpinionAboutPlaces);
            } catch (error) {
                console.log("Erro ao obter todas as opiniões", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updateOpinionAboutPlace(request, response) {
        /* 
            #swagger.tags = ["opinionAboutPlaceController"]
            #swagger.description = "Função que atualiza uma opinião sobre o lugar"
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        try {
            const updateOpinionAboutPlace = await OpinionAboutPlace.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateOpinionAboutPlace)
        } catch (error) {
            console.log("Erro ao atualizar opinião da coleção OpinionAboutPlace", error);
            return response.status(400).json({ error });
        }
    },

    async deleteOpinionAboutPlace(request, response) {
        /* 
            #swagger.tags = ["opinionAboutPlaceController"]
            #swagger.description = "Função que deleta uma opinião sobre o lugar"
            #swagger.responses[200] = {
                schema: {

                }
            }
            #swagger.responses[400] = {
                schema: {
                    
                }
            }
        */
        try {
            const deleteOpinionAboutPlace = await OpinionAboutPlace.findOneAndDelete({ _id: request.params.id });
            return response.status(200).json(deleteOpinionAboutPlace);
        } catch (error) {
            console.log("Erro ao atualizar opinião da coleção OpinionAboutPlace", error);
            return response.status(400).json({ error });
        }
    },

}