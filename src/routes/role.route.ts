import { Router } from 'express';

import {
	createRole,
	deleteRole,
	getRole,
	getRoles,
	updateRole,
} from '../controllers/role.controller';

import {
	createRoleValidator,
	deleteRoleValidator,
	getRoleValidator,
	updateRoleValidator,
} from '../middlewares/role.middleware';

import { verifyJWT } from '../middlewares/jwt-verify-token.middleware';

const router = Router();

router.use(verifyJWT);

router.post('/', createRoleValidator, createRole);
router.get('/', getRoles);
router.get('/:id', getRoleValidator, getRole);
router.put('/:id', updateRoleValidator, updateRole);
router.delete('/:id', deleteRoleValidator, deleteRole);

export default router;
