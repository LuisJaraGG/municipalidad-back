import { Router } from 'express';

import { createClient, deleteClient, getClient, getClients, updateClient } from '../controllers';
import { createClientValidator, getClientValidator } from '../middlewares';

const router = Router();

router.get('/', getClients);
router.get('/:id', getClientValidator, getClient);
router.post('/', createClientValidator, createClient);
router.patch('/:id', getClientValidator, updateClient);
router.delete('/:id', getClientValidator, deleteClient);

export default router;
