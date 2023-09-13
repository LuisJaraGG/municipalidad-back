import { Schema, Model, models, model } from 'mongoose';
import { IClient } from '../interfaces';

const ClientSchema = new Schema(
	{
		first_name: {
			type: String,
			required: [true, 'El nombre es obligatorio'],
			trim: true,
		},
		last_name: {
			trim: true,
			type: String,
			required: [true, 'El apellido es obligatorio'],
		},
		phone: {
			type: String,
			required: [true, 'El teléfono es obligatorio'],
			trim: true,
		},
		direction: {
			type: String,
			trim: true,
		},
		dni: {
			type: String,
			required: [true, 'El DNI es obligatorio'],
			trim: true,
			unique: true,
		},
		type: {
			type: String,
			enum: {
				values: ['Jurídico', 'Natural'],
				message: '{VALUE} no es un tipo válido',
			},
			required: [true, 'El tipo es obligatorio'],
		},
	},
	{
		timestamps: true,
	}
);

const Client: Model<IClient> = models.User || model('Client', ClientSchema);
export default Client;
