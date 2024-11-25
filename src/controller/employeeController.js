import EmployeeService from '../services/employeeService.js';

const employeeService = new EmployeeService();

const addEmployee = async (req, res) => {
    try {
        const id = await employeeService.addEmployee(req.body);
        res.status(201).json({ success: true, employeeId: id });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        await employeeService.updateEmployee(id, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        await employeeService.deleteEmployee(id);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.status(200).json({ success: true, employees });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await employeeService.getEmployeeById(id);
        if (!employee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.status(200).json({ success: true, employee });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployees,
    getEmployeeById,
};
