const OpinionAboutPlace = require("../models/opinionAbouPlaceModel");

module.exports = {

    async createOpinionAboutPlace(request, response) {
        /* 
            #swagger.tags = ["opinionAboutPlaceController"]
            #swagger.description = "Função que cria uma nova opinião sobre o lugar"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: true,
                schema: { 
                    "$ref": "#/definitions/OpinionAboutPlaceSchema"
                }
            }
            #swagger.responses[201] = {
                schema: {
                    "place": "64de635a21d6b023c4b73ffb",
                    "user": "64d93e582de00e40576bfa5c",
                    "pros": [
                        "Lugar muito bom de morar",
                        "Tem posto de combustível perto"
                    ],
                    "cons": [
                        "Pega pouco sol",
                        "Cheiro de mofo"
                    ],
                    "_id": "64de676081cc374bf89bf82f",
                    "createdAt": "2023-08-17T18:30:56.010Z",
                    "updatedAt": "2023-08-17T18:30:56.010Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "errors": { },
                        "_message": "ErrorMessageExample",
                        "name": "ExampleError",
                        "message": "ErrorMessageExample: some message error here"
                    }
                }
            }
        */
        try {
            const createOpinionAboutPlace = await OpinionAboutPlace.create(request.body);
            return response.status(201).json(createOpinionAboutPlace);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async getOpinionAboutPlace(request, response) {
        /* 
            #swagger.tags = ["opinionAboutPlaceController"]
            #swagger.description = "Função que busca por uma ou várias opiniões sobre o lugar"
            #swagger.responses[200] = {
                schema: [
                    {
                        "_id": "64de676081cc374bf89bf82f",
                        "place": "64de635a21d6b023c4b73ffb",
                        "user": "64d93e582de00e40576bfa5c",
                        "pros": [
                            "Lugar muito bom de morar",
                            "Tem posto de combustível perto"
                        ],
                        "cons": [
                            "Pega pouco sol",
                            "Cheiro de mofo"
                        ],
                        "createdAt": "2023-08-17T18:30:56.010Z",
                        "updatedAt": "2023-08-17T18:30:56.010Z",
                        "__v": 0
                    }
                ]
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "_id",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
                }
            }
        */
        if (request.params.id == "all") {
            try {
                const getOpinionAboutPlaces = await OpinionAboutPlace.find()
                return response.status(200).json(getOpinionAboutPlaces);
            } catch (error) {
                console.log("Erro ao obter todas as opiniões", error)
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getOpinionAboutPlace = await OpinionAboutPlace.findOne({ _id: request.params.id })
                return response.status(200).json(getOpinionAboutPlace);
            } catch (error) {
                console.log("Erro ao obter os detalhes da opinião", error)
                return response.status(400).json({ error });
            }
        }
    },

    async updateOpinionAboutPlace(request, response) {
        /* 
            #swagger.tags = ["opinionAboutPlaceController"]
            #swagger.description = "Função que atualiza uma opinião sobre o lugar"
            #swagger.parameters['obj'] = {
                in: 'body',
                required: false,
                schema: { 
                    
                }
            }
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
                    "_id": "64de676081cc374bf89bf82f",
                    "place": "64de635a21d6b023c4b73ffb",
                    "user": "64d93e582de00e40576bfa5c",
                    "pros": [
                        "Lugar muito bom de morar",
                        "Tem posto de combustível perto"
                    ],
                    "cons": [
                        "Pega pouco sol",
                        "Cheiro de mofo"
                    ],
                    "createdAt": "2023-08-17T18:30:56.010Z",
                    "updatedAt": "2023-08-17T18:30:56.010Z",
                    "__v": 0
                }
            }
            #swagger.responses[400] = {
                schema: {
                    "error": {
                        "stringValue": "",
                        "valueType": "",
                        "kind": "",
                        "value": "",
                        "path": "_id",
                        "reason": {},
                        "name": "ExampleError",
                        "message": "Example of a Message Error"
                    }
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