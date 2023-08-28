import ProcessModel from '../models/processModel.js';

export default class ProcessService {

    async createProcess(data) {
        const processModel = new ProcessModel();
        
        const processExists = await processModel.find({
            step: data.step
        });
        if (processExists) {
            throw Error("Esse processo já existe.");
        }

        const createProcess = await processModel.create(data);
        return createProcess;
    }
    
    async getProcess(data) {
        const processModel = new ProcessModel();

        if (data.id == "all") {
            try {
                const getProcesses = await processModel.find();
                return getProcesses;
            } catch (error) {
                throw Error("Houve problema ao buscar os processos.");
            }
        } else {
            try {
                const getProcess = await processModel.findOne({ _id: data.id });
                return getProcess;
            } catch (error) {
                throw Error("Houve problema ao buscar o processo.");
            }
        }
    }
    
    async updateProcess(data) {
        const processModel = new ProcessModel();

        const updateProcess = await processModel.findOneAndUpdate({ _id: data.id }, data);
        return updateProcess;
    }
    
    async deleteProcess(data) {
        const processModel = new ProcessModel();

        const deleteProcess = await processModel.findOneAndDelete({ _id: data.id });
        return deleteProcess;
    }

    async getUserProcess(data) {
        const processModel = new ProcessModel();
        
        const getUserProcess = await processModel.findOne({ user: data.id });
        return getUserProcess;
    }
}