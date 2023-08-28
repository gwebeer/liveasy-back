import ProcessService from '../services/processService.js';

export default class Process {
    
    async createProcess(request, response) {
        try {
            const processService = new ProcessService();
            const createProcess = await processService.createProcess(request.body);
            return response.status(201).json(createProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async getProcess(request, response) {
        try {
            const processService = new ProcessService();
            const getProcesses = await processService.getProcess(request.body);
            if (getProcess == null) {
                return response.status(404).json({ "message": "Não foi(ram) encontrado(s) o(s) processo(s).", "_return": getProcess });
            }
            return response.json(getProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async updateProcess(request, response) {
        try {
            const processService = new ProcessService();
            const updateProcess = await processModel.updateProcess(request.body);
            return response.status(200).json(updateProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async deleteProcess(request, response) {
        try {
            const processService = new ProcessService();
            const deleteProcess = await processService.deleteProcess(request.body);
            if (deleteProcess == null) {
                return response.status(404).json({ "message": "Não foi encontrado o processo.", "_return": deleteProcess });
            }
            return response.status(200).json(deleteProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }

    async getUserProcess(request, response) {
        try {
            const processService = new ProcessService();
            const getUserProcess = await processService.getUserProcess(request.body);
            if (getUserProcess == null) {
                return response.status(404).json({ "message": "Não foi encontrado o usuário do processo.", "_return": getUserProcess });
            }
            return response.status(200).json(getUserProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
}