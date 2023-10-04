import { Schema, Model, models, model } from 'mongoose';
import { IProvider } from '../interfaces';

const ProviderSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre es obligatorio'],
			unique: true,
			trim: true,
		},
		dni_ruc: {
			type: String,
			required: [true, 'El DNI/RUC es obligatorio'],
			unique: true,
			trim: true,
		},
		direction: {
			type: String,
			required: [true, 'El monto es obligatorio'],
		},
		condition: {
			type: String,
			required: [true, 'La condición es obligatoria'],
		},
		state: {
			type: Boolean,
			required: [true, 'El estado es obligatorio'],
		},
		document_type: {
			type: String,
			required: [true, 'El tipo de documento es obligatorio'],
		},
	},
	{
		timestamps: true,
	}
);

const Provider: Model<IProvider> = models.IProvider || model('Provider', ProviderSchema);

export default Provider;
