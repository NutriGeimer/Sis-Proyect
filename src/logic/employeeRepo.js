import { db } from '../config/firebase.js';
import EmployeeModel from '../models/employeeModel.js';

class EmployeeRepo {
    async addEmployee(data) {
        const employee = await db.collection('employees').add({
            fullname: data.fullname,
            email: data.email,
            phone: data.phone,
            address: data.address,
            rfc: data.rfc,
            salary: data.salary,
        });
        return employee.id;
    }

    async updateEmployee(id, data) {
        await db.collection('employees').doc(id).update(data);
    }

    async deleteEmployee(id) {
        await db.collection('employees').doc(id).delete();
    }

    async getAllEmployees() {
        const docs = await db.collection('employees').get();
        const employees = [];
        docs.forEach((doc) => {
            const data = doc.data();
            employees.push(
                new EmployeeModel(
                    doc.id,
                    data.fullname,
                    data.email,
                    data.phone,
                    data.address,
                    data.rfc,
                    data.salary
                )
            );
        });
        return employees;
    }

    async getEmployeeById(id) {
        const doc = await db.collection('employees').doc(id).get();
        if (!doc.exists) return null;
        const data = doc.data();
        return new EmployeeModel(
            doc.id,
            data.fullname,
            data.email,
            data.phone,
            data.address,
            data.rfc,
            data.salary
        );
    }
}

export default EmployeeRepo;
