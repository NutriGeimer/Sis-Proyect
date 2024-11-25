import { db } from '../config/firebase.js';
import clientModel from '../models/clientModel.js';

class clientRepo {
    async addClient(data) {
        const client = await db.collection('clientes').add({
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
        });
        return client.id;
    }

    async updateClient(id, data) {
        await db.collection('clientes').doc(id).update({
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
        });
    }

    async deleteClient(id) {
        await db.collection('clientes').doc(id).delete();
    }

    async getAllClients() {
        const docs = await db.collection('clientes').get();
        return docs.docs.map(doc => {
            const data = doc.data();
            return new clientModel(doc.id, data.name, data.username, data.email, data.phone);
        });
    }

    async getClientById(id) {
        const doc = await db.collection('clientes').doc(id).get();
        if (!doc.exists) return null;
        const data = doc.data();
        return new clientModel(doc.id, data.name, data.username, data.email, data.phone);
    }

    async getClientByUsername(username) {
        const query = await db.collection('clientes').where('username', '==', username).get();
        if (query.empty) return null;
        const doc = query.docs[0];
        const data = doc.data();
        return new clientModel(doc.id, data.name, data.username, data.email, data.phone);
    }
}

export default clientRepo;
