import EmployeeRepo from '../logic/employeeRepo.js';
import EmployeeModel from '../models/employeeModel.js';

const employeeRepo = new EmployeeRepo();

class EmployeeService {
    async addEmployee(data) {
        const newEmployee = new EmployeeModel(
            null,
            data.fullname,
            data.email,
            data.phone,
            data.address,
            data.rfc,
            data.salary
        );

        const employeeId = await employeeRepo.addEmployee(newEmployee);
        return employeeId;
    }

    async updateEmployee(id, data) {
        const existingEmployee = await employeeRepo.getEmployeeById(id);
        if (!existingEmployee) throw new Error('Employee not found');

        await employeeRepo.updateEmployee(id, data);
    }

    async deleteEmployee(id) {
        await employeeRepo.deleteEmployee(id);
    }

    async getAllEmployees() {
        return await employeeRepo.getAllEmployees();
    }

    async getEmployeeById(id) {
        return await employeeRepo.getEmployeeById(id);
    }
}

export default EmployeeService;
