import ReasonService from "../services/reasonService.js";

export default class Reason {

    async createReason(request, response) {
        try {
            const reasonService = new ReasonService();
            const createReason = await reasonService.createReason(request.body);
            return response.status(201).json(createReason);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async getReason(request, response) {
        try {
            const reasonService = new ReasonService();
            const getReason = await reasonService.getReason(request.params);
            if (getReason == null) {
                return response.status(404).json({ msg: "Não foi(ram) encontrada(s) a(s) razão(ões).", "_return": getReason });
            }
            return response.status(200).json(getReason);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async updateReason(request, response) {
        try {
            const reasonService = new ReasonService();
            const updateReason = await reasonService.updateReason(request.body);
            if (updateReason[1] == false) {
                return response.status(204).json({msg: "Nenhum dado foi alterado"})
            }
            return response.status(200).json(updateReason[0]);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

    async deleteReason(request, response) {
        try {
            const reasonService = new ReasonService();
            const deleteReason = await reasonService.deleteReason(request.params); 
            if (deleteReason == null) {
                return response.status(404).json({ msg: "Não foi encontrada propriedade escolhida.", "_return": deleteReason });
            }
            return response.status(200).json(deleteReason);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }

}