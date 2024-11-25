import salesService from '../services/salesService.js';

const SalesService = new salesService();

const addSale = async (req, res) => {
    try {
        const saleData = req.body;
        const saleId = await SalesService.addSale(saleData);
        res.status(201).json({
            success: true,
            saleId,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const updateSale = async (req, res) => {
    try {
        const id = req.params.id;
        await SalesService.updateSale(id, req.body);
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteSale = async (req, res) => {
    try {
        const id = req.params.id;
        await SalesService.deleteSale(id);
        res.status(200).json({
            success: true,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getSaleById = async (req, res) => {
    try {
        const id = req.params.id;
        const sale = await SalesService.getSaleById(id);
        if (!sale) {
            return res.status(404).json({
                success: false,
                message: 'Sale not found',
            });
        }
        res.status(200).json({
            success: true,
            sale,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getSalesByRefresko = async (req, res) => {
    try {
        const refreskoId = req.params.refreskoId;
        const sales = await SalesService.getSalesByRefresko(refreskoId);
        res.status(200).json({
            success: true,
            sales,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllSales = async (req, res) => {
    try {
        const sales = await SalesService.getAllSales();
        res.status(200).json({
            success: true,
            sales,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

export {
    addSale,
    updateSale,
    deleteSale,
    getSaleById,
    getSalesByRefresko,
    getAllSales
};
