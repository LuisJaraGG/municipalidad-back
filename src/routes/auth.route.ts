import { Router } from 'express';

import { loginUser } from '../controllers/auth.controller';
import { loginValidator } from '../middlewares/auth.middleware';

const router = Router();

router.post('/login', loginValidator, loginUser);

export default router;
