import express from 'express';
import { check } from 'express-validator';
import {
    addRefresko,
    updateRefresko,
    deleteRefresko,
    getAllRefreskos,
    getRefreskoById,
} from '../controller/refreskoController.js';

const router = express.Router();

router.post(
    '/add',
    [
        check('productname').notEmpty().withMessage('Product name is required'),
        check('small').isNumeric().withMessage('Small price must be a number'),
        check('medium').isNumeric().withMessage('Medium price must be a number'),
        check('large').isNumeric().withMessage('Large price must be a number'),
    ],
    addRefresko
);

router.put('/update/:id', updateRefresko);
router.delete('/delete/:id', deleteRefresko);
router.get('/all', getAllRefreskos);
router.get('/id/:id', getRefreskoById);

export default router;
