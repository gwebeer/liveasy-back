import Process from '../models/processModel.js';

export default class Process {
    
    async createProcess(request, response) {
        try {
            const createProcess = await Process.create(request.body);
            return response.status(201).json(createProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async getProcess(request, response) {
        if (request.params.id == "all") {
            try {
                const getProcesses = await Process.find()
                if (getProcesses == null) {
                    return response.status(404).json({ "message": "Não foram encontrados os processos.", "_return": getProcesses });
                }
                return response.json(getProcesses);
            } catch (error) {
                return response.status(400).json({ error });
            }
        } else {
            try {
                const getProcess = await Process.findOne({ _id: request.params.id })
                if (getProcess == null) {
                    return response.status(404).json({ "message": "Não foi encontrado o processo.", "_return": getProcess });
                }
                return response.json(getProcess);
            } catch (error) {
                return response.status(400).json({ error });
            }
        }
    }
    
    async updateProcess(request, response) {
        try {
            const updateProcess = await Process.findOneAndUpdate({ _id: request.params.id }, request.body);
            return response.status(200).json(updateProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
    
    async deleteProcess(request, response) {
        try {
            const deleteProcess = await Process.findOneAndDelete({ _id: request.params.id });
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
            const getProcess = await Process.findOne({ user: request.params.id })
            if (getProcess == null) {
                return response.status(404).json({ "message": "Não foi encontrado o usuário do processo.", "_return": getProcess });
            }
            return response.status(200).json(getProcess);
        } catch (error) {
            return response.status(400).json({ error });
        }
    }
}