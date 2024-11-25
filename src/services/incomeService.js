import incomeRepo from '../logic/incomeRepo.js';

const IncomeRepo = new incomeRepo();

class incomeService {
    async addIncome(amount) {
        // Valida que el monto sea positivo
        if (!amount || amount <= 0) {
            throw new Error('Amount must be greater than 0');
        }

        // Obtiene el total de ingresos actuales
        const currentIncome = await IncomeRepo.getTotalIncome();

        // Calcula el nuevo total de ingresos
        const newTotalIncome = currentIncome + amount;

        // Registra el nuevo ingreso en la base de datos
        await IncomeRepo.addIncome(newTotalIncome);
        return newTotalIncome;
    }

    async updateIncome(id, amount) {
        // Actualiza el ingreso si el ID y el monto son válidos
        const income = await IncomeRepo.getIncomeById(id);
        if (!income) throw new Error('Income not found');

        const updatedIncome = income.totalIncome + amount;
        await IncomeRepo.updateIncome(id, updatedIncome);
        return updatedIncome;
    }

    async getIncomeById(id) {
        return await IncomeRepo.getIncomeById(id);
    }

    async getTotalIncome() {
        return await IncomeRepo.getTotalIncome();
    }
    
    async getAllIncomeRecords() {
        return await IncomeRepo.getAllIncomeRecords();
    }

    async deleteIncome(id) {
        // Verificar que el ID sea válido y eliminar el ingreso
        const income = await IncomeRepo.getIncomeById(id);
        if (!income) {
            throw new Error('Income not found');
        }
        await IncomeRepo.deleteIncome(id);
        return `Income with ID ${id} has been deleted`;
    }
    
}

export default incomeService;
