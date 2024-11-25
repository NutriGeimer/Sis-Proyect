import { Router } from 'express';
import clientRoutes from './clientRoutes.js';
import authRoutes from './authRoutes.js';
import refreskoRoutes from './refreskoRoutes.js';
import salesRoutes from './salesRoutes.js'; // Asegúrate de tener este archivo
import employeeRoutes from './employeeRoutes.js'; // Importar las rutas de empleados
import incomeRoutes from './incomeRoutes.js'; // Importar las rutas de ingresos

const router = Router();

// Registrar las rutas en sus respectivos endpoints
router.use('/client', clientRoutes);
router.use('/auth', authRoutes);
router.use('/refresko', refreskoRoutes); // Para las rutas de refreskos
router.use('/sales', salesRoutes); // Para las rutas de ventas
router.use('/employee', employeeRoutes); // Para las rutas de empleados
router.use('/income', incomeRoutes); // Registrar las rutas de ingresos

export default router;
