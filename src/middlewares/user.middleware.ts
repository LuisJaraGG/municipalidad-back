import { check } from 'express-validator';
import User from '../models/user.model';
import { validateFields } from './field.middleware';
import { isNotExistRoleById } from './role.middleware';

export const isExistUserByEmail = async (email: string) => {
	const user = await User.findOne({ email }).select('+_id').lean();

	if (user) {
		throw new Error(`El correo ${email} ya está registrado`);
	}
};

const IsNotExistUserById = async (id: string) => {
	const user = await User.findById(id).select('+_id').lean();

	if (!user) {
		throw new Error(`No existe un usuario con el id ${id}`);
	}
};

export const createUserValidator = [
	check('name', 'El nombre es requerido').trim().not().isEmpty().isLength({ min: 3 }),
	check('email', 'El correo es requerido').trim().isEmail(),
	check('password', 'La contraseña es requerida').trim().not().isEmpty().isLength({ min: 6 }),
	check('role', 'El rol es requerido').trim().not().isEmpty().isMongoId(),
	check('role').custom(isNotExistRoleById),
	check('email').custom(isExistUserByEmail),
	validateFields,
];

export const getUserValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(IsNotExistUserById),
	validateFields,
];

export const updateUserValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(IsNotExistUserById),
	validateFields,
];

export const deleteUserValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(IsNotExistUserById),
	validateFields,
];
