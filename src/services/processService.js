import ProcessModel from '../models/processModel.js';

export default class ProcessService {

    async createProcess(data) {        
        const processExists = await ProcessModel.find();
        // if (processExists.length > 0) {
        //     throw Error("Esse processo já existe.");
        // }
        // criar uma função pra validar se a data de mudança é maior que
        // o dia atual (buscar função de datetime)
        // if (data.movingDate < data_atual) {}

        const createProcess = await ProcessModel.create(data);
        return createProcess;
    }
    
    async getProcess(data) {
        if (data.id == "all") {
            try {
                const getProcesses = await ProcessModel.find();
                return getProcesses;
            } catch (error) {
                throw Error("Houve problema ao buscar os processos.");
            }
        } else {
            try {
                const getProcess = await ProcessModel.findOne({ _id: data.id });
                return getProcess;
            } catch (error) {
                throw Error("Houve problema ao buscar o processo.");
            }
        }
    }
    
    async updateProcess(data) {
        const updateProcess = await ProcessModel.findOneAndUpdate({ _id: data.id }, data);

        let infoCompare = {
            income: updateProcess.income == data.income,    
            budget: updateProcess.budget == data.budget,
            movingDate: updateProcess.movingDate == data.movingDate
        }
        if (!Object.values(infoCompare).includes(false)) {
            return (updateProcess, false);
        } 
        return (updateProcess, true);
    }
    
    async deleteProcess(data) {
        const deleteProcess = await ProcessModel.findOneAndDelete({ _id: data.id });
        return deleteProcess;
    }

    async getUserProcess(data) {        
        const getUserProcess = await ProcessModel.findOne({ user: data.user });
        return getUserProcess;
    }
}