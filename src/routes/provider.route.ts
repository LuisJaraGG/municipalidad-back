import { Router } from 'express';

import {
	createProvider,
	deleteProvider,
	getProvider,
	getProviders,
	updateProvider,
} from '../controllers';
import { createProviderValidator, getProviderValidator } from '../middlewares';

const router = Router();

router.get('/', getProviders);
router.get('/:id', getProviderValidator, getProvider);
router.post('/', createProviderValidator, createProvider);
router.patch('/:id', getProviderValidator, updateProvider);
router.delete('/:id', getProviderValidator, deleteProvider);

export default router;
