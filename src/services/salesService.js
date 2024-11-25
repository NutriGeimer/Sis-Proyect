import salesRepo from '../logic/salesRepo.js';
import salesModel from '../models/salesModel.js';
import incomeService from './incomeService.js';  // Servicio de ingresos

const SalesRepo = new salesRepo();
const IncomeService = new incomeService();

class salesService {
    async addSale(data) {
        // Validar campos obligatorios
       /* if (!data.refreskoId || !data.size || !data.quantity || !data.totalPrice) {
            throw new Error('refreskoId, size, quantity, and totalPrice are required');
        }*/

        // Crear un nuevo objeto de venta
        const newSale = new salesModel(
            null, // ID generado automáticamente
            data.refreskoId,
            data.size,
            data.quantity,
            data.totalPrice
        );

        // Añadir la venta en el repositorio de ventas
        const saleId = await SalesRepo.addSale(newSale);
        
        // Agregar el ingreso relacionado con esta venta
        await IncomeService.addIncome(data.totalPrice);

        // Retornar el ID de la venta creada
        return saleId;
    }

    async updateSale(id, data) {
        // Verificar si la venta existe
        const sale = await SalesRepo.getSaleById(id);
        if (!sale) throw new Error('Sale not found');
        
        // Actualizar la venta en el repositorio de ventas
        await SalesRepo.updateSale(id, data);
    }

    async deleteSale(id) {
        // Verificar si la venta existe
        const sale = await SalesRepo.getSaleById(id);
        if (!sale) throw new Error('Sale not found');
        
        // Eliminar la venta del repositorio de ventas
        await SalesRepo.deleteSale(id);
    }

    async getSaleById(id) {
        // Obtener la venta por su ID
        return await SalesRepo.getSaleById(id);
    }

    async getSalesByRefresko(refreskoId) {
        // Obtener todas las ventas de un refresko específico
        return await SalesRepo.getSalesByRefresko(refreskoId);
    }

    async getAllSales() {
        return await SalesRepo.getAllSales();
    }
}

export default salesService;
