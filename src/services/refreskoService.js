import refreskoRepo from '../logic/refreskoRepo.js';
import refreskoModel from '../models/refreskoModel.js';

const RefreskoRepo = new refreskoRepo();

class refreskoService {
    async addRefresko(data) {
        const newRefresko = new refreskoModel(
            null,
            data.productname,
            data.description,
            data.flavor,
            data.small,
            data.medium,
            data.large
        );

        const refreskoId = await RefreskoRepo.addRefresko(newRefresko);
        return refreskoId;
    }

    async updateRefresko(id, data) {
        await RefreskoRepo.updateRefresko(id, data);
    }

    async deleteRefresko(id) {
        await RefreskoRepo.deleteRefresko(id);
    }

    async getAllRefreskos() {
        return await RefreskoRepo.getAllRefreskos();
    }

    async getRefreskoById(id) {
        return await RefreskoRepo.getRefreskoById(id);
    }
}

export default refreskoService;
