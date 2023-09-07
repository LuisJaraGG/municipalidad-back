import { check } from 'express-validator';
import Role from '../models/role.model';
import { validateFields } from './field.middleware';

export const isAdminValidator = async (_id: string) => {};

export const isExistRoleByName = async (name: string) => {
	const role = await Role.findOne({ name }).select('+_id').lean();

	if (role) {
		throw new Error(`Ya existe un rol con el nombre ${name}`);
	}
};

export const isNotExistRoleById = async (id: string) => {
	const role = await Role.findById(id).select('+_id').lean();

	if (!role) {
		throw new Error(`No existe un rol con el id ${id}`);
	}
};

export const createRoleValidator = [
	check('name', 'El nombre es requerido').trim().not().isEmpty().isLength({ min: 3 }),
	check('name').custom(isExistRoleByName),
	validateFields,
];

export const getRoleValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(isNotExistRoleById),
	validateFields,
];

export const updateRoleValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(isNotExistRoleById),
	check('name', 'El nombre es requerido').trim().not().isEmpty().isLength({ min: 3 }),
	validateFields,
];

export const deleteRoleValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(isNotExistRoleById),
	validateFields,
];
