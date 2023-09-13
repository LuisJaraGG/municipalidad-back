import { Router } from 'express';

import { createRole, deleteRole, getRole, getRoles, updateRole } from '../controllers';

import { verifyJWT, createRoleValidator, getRoleValidator } from '../middlewares';

const router = Router();

router.use(verifyJWT);

router.post('/', createRoleValidator, createRole);
router.get('/', getRoles);
router.get('/:id', getRoleValidator, getRole);
router.put('/:id', getRoleValidator, updateRole);
router.delete('/:id', getRoleValidator, deleteRole);

export default router;
