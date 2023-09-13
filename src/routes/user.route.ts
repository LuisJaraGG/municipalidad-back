import { Router } from 'express';

import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateProfileUser,
	updateStateUser,
	updateUser,
} from '../controllers';

import { verifyJWT, createUserValidator, getUserValidator } from '../middlewares';

const router = Router();

router.use(verifyJWT);

router.get('/', getUsers);
router.get('/:id', getUserValidator, getUser);
router.post('/', createUserValidator, createUser);
router.put('/:id', getUserValidator, updateUser);
router.put('/state/:id', getUserValidator, updateStateUser);
router.put('/profile/:id', getUserValidator, updateProfileUser);
router.delete('/:id', getUserValidator, deleteUser);

export default router;
