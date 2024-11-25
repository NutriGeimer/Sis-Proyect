import incomeService from '../services/incomeService.js';

const IncomeService = new incomeService();

const addIncome = async (req, res) => {
    try {
        const amount = req.body.amount;
        const newTotalIncome = await IncomeService.addIncome(amount);
        res.status(201).json({
            success: true,
            totalIncome: newTotalIncome,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const updateIncome = async (req, res) => {
    try {
        const id = req.params.id;
        const amount = req.body.amount;
        const updatedIncome = await IncomeService.updateIncome(id, amount);
        res.status(200).json({
            success: true,
            totalIncome: updatedIncome,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getIncomeById = async (req, res) => {
    try {
        const id = req.params.id;
        const income = await IncomeService.getIncomeById(id);
        if (!income) {
            return res.status(404).json({
                success: false,
                message: 'Income not found',
            });
        }
        res.status(200).json({
            success: true,
            income,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getTotalIncome = async (req, res) => {
    try {
        const totalIncome = await IncomeService.getTotalIncome();
        res.status(200).json({
            success: true,
            totalIncome,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllIncomeRecords = async (req, res) => {
    try {
        const incomeRecords = await IncomeService.getAllIncomeRecords();
        res.status(200).json({
            success: true,
            incomeRecords,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteIncome = async (req, res) => {
    try {
        const id = req.params.id;
        const message = await IncomeService.deleteIncome(id);
        res.status(200).json({
            success: true,
            message,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export {
    addIncome,
    updateIncome,
    getIncomeById,
    getTotalIncome,
    getAllIncomeRecords,
    deleteIncome
}; 
