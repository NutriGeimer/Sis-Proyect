import clientRepo from '../logic/clientRepo.js';
import clientModel from '../models/clientModel.js';

const ClientRepo = new clientRepo();

class clientService {
    async addClient(data) {
        const existClient = await ClientRepo.getClientByUsername(data.username);
        if (existClient) throw new Error('Username already exists');

        const newClient = new clientModel(null, data.name, data.username, data.email, data.phone);
        return await ClientRepo.addClient(newClient);
    }

    async updateClient(id, data) {
        const existClient = await ClientRepo.getClientById(id);
        if (!existClient) throw new Error('Client not found');
        await ClientRepo.updateClient(id, data);
    }

    async getAllClients() {
        return await ClientRepo.getAllClients();
    }

    async deleteClient(id) {
        await ClientRepo.deleteClient(id);
    }

    async getClientById(id) {
        return await ClientRepo.getClientById(id);
    }

    async getClientByUsername(username) {
        return await ClientRepo.getClientByUsername(username);
    }
}

export default clientService;
