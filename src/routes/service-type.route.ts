import { Router } from 'express';

import { getServicesTypes } from '../controllers';

const router = Router();

// router.post('/', createRoleValidator, createRole);
router.get('/', getServicesTypes);
// router.patch('/:id', getRoleValidator, updateRole);
// router.delete('/:id', getRoleValidator, deleteRole);

export default router;
