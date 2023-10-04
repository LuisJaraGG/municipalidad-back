import { Router } from 'express';

import {
	createProvider,
	deleteProvider,
	getProvider,
	getProviders,
	updateProvider,
} from '../controllers';
import { verifyJWT, createProviderValidator, getProviderValidator } from '../middlewares';

const router = Router();

router.use(verifyJWT);

router.get('/', getProviders);
router.get('/:id', getProviderValidator, getProvider);
router.post('/', createProviderValidator, createProvider);
router.put('/:id', getProviderValidator, updateProvider);
router.delete('/:id', getProviderValidator, deleteProvider);

export default router;
