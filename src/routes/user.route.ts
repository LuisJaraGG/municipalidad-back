import { Router } from 'express';

import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateProfileUser,
	updateStateUser,
	updateUser,
} from '../controllers/user.controller';
import { verifyJWT } from '../middlewares/jwt-verify-token.middleware';
import {
	createUserValidator,
	deleteUserValidator,
	getUserValidator,
	updateUserValidator,
} from '../middlewares/user.middleware';

const router = Router();

router.use(verifyJWT);

router.get('/', getUsers);
router.get('/:id', getUserValidator, getUser);
router.post('/', createUserValidator, createUser);
router.put('/:id', updateUserValidator, updateUser);
router.put('/state/:id', updateUserValidator, updateStateUser);
router.put('/profile/:id', updateUserValidator, updateProfileUser);
router.delete('/:id', deleteUserValidator, deleteUser);

export default router;
