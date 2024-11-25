import express from 'express';
import { addClient, updateClient, deleteClient, getAllClients, getClientById } from '../controller/clientController.js';

const router = express.Router();

router.post('/add', addClient);
router.put('/update/:id', updateClient);
router.delete('/delete/:id', deleteClient);
router.get('/all', getAllClients);
router.get('/id/:id', getClientById);

export default router;
