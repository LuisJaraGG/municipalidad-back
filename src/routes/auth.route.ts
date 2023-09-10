import { Router } from 'express';

import { loginUser, refreshTokenUser } from '../controllers/auth.controller';
import { loginValidator } from '../middlewares/auth.middleware';
import { verifyJWT } from '../middlewares/jwt-verify-token.middleware';

const router = Router();

router.post('/login', loginValidator, loginUser);
router.get('/refresh-token', verifyJWT, refreshTokenUser);

export default router;
