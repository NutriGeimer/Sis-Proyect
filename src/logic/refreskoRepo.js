import { db } from '../config/firebase.js';
import refreskoModel from '../models/refreskoModel.js';

class refreskoRepo {
    async addRefresko(data) {
        const refresko = await db.collection('refreskos').add({
            productname: data.productname,
            description: data.description,
            flavor: data.flavor,
            small: data.small,
            medium: data.medium,
            large: data.large,
        });
        return refresko.id;
    }

    async updateRefresko(id, data) {
        await db.collection('refreskos').doc(id).update(data);
    }

    async deleteRefresko(id) {
        await db.collection('refreskos').doc(id).delete();
    }

    async getAllRefreskos() {
        const docs = await db.collection('refreskos').get();
        const refreskos = [];
        docs.forEach((doc) => {
            const data = doc.data();
            refreskos.push(
                new refreskoModel(
                    doc.id,
                    data.productname,
                    data.description,
                    data.flavor,
                    data.small,
                    data.medium,
                    data.large
                )
            );
        });
        return refreskos;
    }

    async getRefreskoById(id) {
        const doc = await db.collection('refreskos').doc(id).get();
        if (!doc.exists) return null;
        const data = doc.data();
        return new refreskoModel(
            doc.id,
            data.productname,
            data.description,
            data.flavor,
            data.small,
            data.medium,
            data.large
        );
    }
}

export default refreskoRepo;
