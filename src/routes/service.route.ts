import { Router } from 'express';

import {
	createService,
	deleteService,
	getService,
	getServices,
	updateService,
} from '../controllers';

import { createServiceValidator, getServiceValidator } from '../middlewares';

const router = Router();

router.post('/', createServiceValidator, createService);
router.get('/', getServices);
router.get('/:id', getServiceValidator, getService);
router.patch('/:id', getServiceValidator, updateService);
router.delete('/:id', getServiceValidator, deleteService);

export default router;
