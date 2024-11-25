import clientService from '../services/clientService.js';

const ClientService = new clientService();

const addClient = async (req, res) => {
    try {
        const id = await ClientService.addClient(req.body);
        res.status(201).json({ success: true, clientId: id });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateClient = async (req, res) => {
    try {
        await ClientService.updateClient(req.params.id, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteClient = async (req, res) => {
    try {
        await ClientService.deleteClient(req.params.id);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAllClients = async (req, res) => {
    try {
        const clients = await ClientService.getAllClients();
        res.status(200).json({ success: true, clients });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getClientById = async (req, res) => {
    try {
        const client = await ClientService.getClientById(req.params.id);
        if (!client) return res.status(404).json({ success: false, message: 'Client not found' });
        res.status(200).json({ success: true, client });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export { addClient, updateClient, deleteClient, getAllClients, getClientById };
