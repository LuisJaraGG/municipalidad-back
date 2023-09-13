import { check } from 'express-validator';
import { Client } from '../models';
import { validateFields } from './field.middleware';

export const isExistClientByDNI = async (dni: string) => {
	const client = await Client.findOne({ dni }).select('+_id').lean();

	if (client) {
		throw new Error(`El client con DNI ${dni} ya está registrado`);
	}
};

const IsNotExistClientById = async (id: string) => {
	const client = await Client.findById(id).select('+_id').lean();

	if (!client) {
		throw new Error(`No existe un client con el id ${id}`);
	}
};

export const createClientValidator = [
	check('first_name', 'El nombre es requerido').trim().not().isEmpty(),
	check('last_name', 'El apellido es requerido').trim().not().isEmpty(),
	check('phone', 'El teléfono es requerido').trim().not().isEmpty(),
	check('direction', 'La dirección es requerida').trim().not().isEmpty(),
	check('type').trim().not().isEmpty().isIn(['Jurídico', 'Natural']),
	check('dni').trim().not().isEmpty().isLength({ min: 8, max: 8 }),
	check('dni').custom(isExistClientByDNI),
	validateFields,
];

export const getClientValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(IsNotExistClientById),
	validateFields,
];
