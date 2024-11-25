import express from 'express';
import { check } from 'express-validator';
import {
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployees,
    getEmployeeById,
} from '../controller/employeeController.js';

const router = express.Router();

router.post(
    '/add',
    [
        check('fullname').notEmpty().withMessage('Full name is required'),
        check('email').isEmail().withMessage('Valid email is required'),
        check('phone').notEmpty().withMessage('Phone number is required'),
        check('rfc').notEmpty().withMessage('RFC is required'),
        check('salary').isNumeric().withMessage('Salary must be a number'),
    ],
    addEmployee
);

router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);
router.get('/all', getAllEmployees);
router.get('/id/:id', getEmployeeById);

export default router;
