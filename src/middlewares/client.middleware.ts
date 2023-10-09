import { check } from 'express-validator';
import { Client } from '../models';
import { validateFields } from './field.middleware';

export const isExistClientByDNI = async (dni_ruc: string) => {
	const client = await Client.findOne({ dni_ruc }).select('+_id').lean();

	if (client) {
		throw new Error(`El cliente con DNI/RUC ${dni_ruc} ya está registrado`);
	}
};

const IsNotExistClientById = async (id: string) => {
	const client = await Client.findById(id).select('+_id').lean();

	if (!client) {
		throw new Error(`No existe un cliente con el id ${id}`);
	}
};

export const createClientValidator = [
	check('name', 'El nombre es requerido').trim().not().isEmpty(),
	check('email', 'El correo es requerido').trim().not().isEmpty().isEmail(),
	check('phone', 'El teléfono es requerido').trim().not().isEmpty(),
	check('address', 'La dirección es requerida').trim().not().isEmpty(),
	check('document_type').trim().not().isEmpty().isIn(['DNI', 'RUC']),
	check('dni_ruc').trim().not().isEmpty(),
	check('dni_ruc').custom(isExistClientByDNI),
	validateFields,
];

export const getClientValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(IsNotExistClientById),
	validateFields,
];
