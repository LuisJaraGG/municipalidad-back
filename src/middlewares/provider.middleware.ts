import { check } from 'express-validator';
import { Provider } from '../models';
import { validateFields } from './field.middleware';

export const isExistproviderByDNIRUC = async (dni_ruc: string) => {
	const provider = await Provider.findOne({ dni_ruc }).select('+_id').lean();

	if (provider) {
		throw new Error(`El provider con DNI/RUC ${dni_ruc} ya está registrado`);
	}
};

const IsNotExistProviderById = async (id: string) => {
	const provider = await Provider.findById(id).select('+_id').lean();

	if (!provider) {
		throw new Error(`No existe un provider con el id ${id}`);
	}
};

export const createProviderValidator = [
	check('name', 'El nombre es requerido').trim().not().isEmpty(),
	check('direction', 'La dirección es requerida').trim().not().isEmpty(),
	check('document_type').trim().not().isEmpty().isIn(['DNI', 'RUC']),
	check('state').trim().not().isEmpty().isIn(['ACTIVO', 'INACTIVO']),
	check('condition').trim().not().isEmpty().isIn(['HABIDO', 'NO HABIDO']),
	check('dni_ruc').trim().not().isEmpty(),
	check('dni_ruc').custom(isExistproviderByDNIRUC),
	validateFields,
];

export const getProviderValidator = [
	check('id', 'El id es requerido').trim().not().isEmpty().isMongoId(),
	check('id').custom(IsNotExistProviderById),
	validateFields,
];
