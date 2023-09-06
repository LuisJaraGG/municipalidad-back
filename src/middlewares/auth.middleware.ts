import { check } from 'express-validator';

import { validateFields } from './field.middleware';

export const loginValidator = [
	check('email', 'El correo es requerido').trim().isEmail(),
	check('password', 'La contraseña es requerida').trim().not().isEmpty().isLength({ min: 6 }),
	validateFields,
];

export const registerValidator = [
	check('name', 'El nombre es requerido').trim().not().isEmpty().isLength({ min: 3 }),
	check('email', 'El correo es requerido').trim().isEmail(),
	check('password', 'La contraseña es requerida').trim().not().isEmpty().isLength({ min: 6 }),
	validateFields,
];
