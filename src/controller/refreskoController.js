import refreskoService from '../services/refreskoService.js';

const RefreskoService = new refreskoService();

// Agregar un refresko
const addRefresko = async (req, res) => {
    try {
        const id = await RefreskoService.addRefresko(req.body);
        res.status(201).json({ success: true, refreskoId: id });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Actualizar un refresko
const updateRefresko = async (req, res) => {
    try {
        const id = req.params.id;
        await RefreskoService.updateRefresko(id, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Eliminar un refresko
const deleteRefresko = async (req, res) => {
    try {
        const id = req.params.id;
        await RefreskoService.deleteRefresko(id);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener todos los refreskos
const getAllRefreskos = async (req, res) => {
    try {
        const refreskos = await RefreskoService.getAllRefreskos();
        res.status(200).json({ success: true, refreskos });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// Obtener un refresko por ID
const getRefreskoById = async (req, res) => {
    try {
        const id = req.params.id;
        const refresko = await RefreskoService.getRefreskoById(id);
        if (!refresko) {
            return res.status(404).json({ success: false, message: 'Refresko not found' });
        }
        res.status(200).json({ success: true, refresko });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export { addRefresko, updateRefresko, deleteRefresko, getAllRefreskos, getRefreskoById };
