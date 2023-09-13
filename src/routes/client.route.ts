import { Router } from 'express';

import { createClient, deleteClient, getClient, getClients, updateClient } from '../controllers';
import { verifyJWT, createClientValidator, getClientValidator } from '../middlewares';

const router = Router();

router.use(verifyJWT);

router.get('/', getClients);
router.get('/:id', getClientValidator, getClient);
router.post('/', createClientValidator, createClient);
router.put('/:id', getClientValidator, updateClient);
router.delete('/:id', getClientValidator, deleteClient);

export default router;
