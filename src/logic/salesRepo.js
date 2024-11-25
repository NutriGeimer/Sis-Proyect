import { db } from '../config/firebase.js';
import salesModel from '../models/salesModel.js';

class salesRepo {
    async addSale(data) {
        // Validar que los datos requeridos existan
        /*if (!data.refreskoId || !data.size || !data.quantity || !data.totalPrice) {
            throw new Error('Missing required fields: refreskoId, size, quantity, totalPrice');
        }*/

        const sale = await db.collection('sales').add({
            refreskoId: data.refreskoId,
            size: data.size,
            quantity: data.quantity,
            totalPrice: data.totalPrice,
        });

        return sale.id;
    }

    async updateSale(id, data) {
        if (!id) throw new Error('Sale ID is required');
        await db.collection('sales').doc(id).update(data);
    }

    async deleteSale(id) {
        if (!id) throw new Error('Sale ID is required');
        await db.collection('sales').doc(id).delete();
    }

    async getSaleById(id) {
        const doc = await db.collection('sales').doc(id).get();
        if (!doc.exists) return null;

        const data = doc.data();
        return new salesModel(doc.id, data.refreskoId, data.size, data.quantity, data.totalPrice);
    }

    async getSalesByRefresko(refreskoId) {
        const query = await db.collection('sales').where('refreskoId', '==', refreskoId).get();
        return query.docs.map((doc) => 
            new salesModel(
                doc.id,
                doc.data().refreskoId,
                doc.data().size,
                doc.data().quantity,
                doc.data().totalPrice
            )
        );
    }

    async getAllSales() {
        const querySnapshot = await db.collection('sales').get();
        return querySnapshot.docs.map(doc => 
            new salesModel(
                doc.id,
                doc.data().refreskoId,
                doc.data().size,
                doc.data().quantity,
                doc.data().totalPrice
            )
        );
    }
}

export default salesRepo;
