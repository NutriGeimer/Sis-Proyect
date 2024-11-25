import { db } from '../config/firebase.js'; // Suponiendo que usas Firebase para la base de datos
import incomeModel from '../models/incomeModel.js';

class incomeRepo {
    async addIncome(amount) {
        if (!amount || amount <= 0) {
            throw new Error('Amount must be greater than 0');
        }

        const incomeDoc = await db.collection('income').add({
            totalIncome: amount
        });

        return incomeDoc.id;
    }

    async updateIncome(id, amount) {
        if (!id || amount <= 0) {
            throw new Error('Invalid ID or Amount');
        }

        await db.collection('income').doc(id).update({
            totalIncome: amount
        });
    }

    async getIncomeById(id) {
        const doc = await db.collection('income').doc(id).get();
        if (!doc.exists) return null;

        const data = doc.data();
        return new incomeModel(doc.id, data.totalIncome);
    }

    async getTotalIncome() {
        const querySnapshot = await db.collection('income').get();
        let totalIncome = 0;
        querySnapshot.forEach(doc => {
            totalIncome += doc.data().totalIncome;
        });
        return totalIncome;
    }

    async getAllIncomeRecords() {
        const querySnapshot = await db.collection('income').get();
        return querySnapshot.docs.map(doc => 
            new incomeModel(
                doc.id,
                doc.data().totalIncome
            )
        );
    }
    
    async deleteIncome(id) {
        if (!id) {
            throw new Error('ID is required to delete income');
        }
    
        const incomeDoc = await db.collection('income').doc(id).get();
        if (!incomeDoc.exists) {
            throw new Error('Income not found');
        }
    
        await db.collection('income').doc(id).delete();
    }
}

export default incomeRepo;
 