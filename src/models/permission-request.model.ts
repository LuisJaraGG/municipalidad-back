import { Schema, Model, models, model } from 'mongoose';
import { IPermissionRequest } from '../interfaces';

const PermissionRequestSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre es obligatorio'],
			trim: true,
		},

		client: {
			type: Schema.Types.ObjectId,
			ref: 'Client',
			required: [true, 'El cliente es obligatorio'],
		},

		type: {
			type: String,
			enum: {
				values: ['Comercial', 'Construcción', 'Demolición', 'Evento'],
				message: '{VALUE} no es un tipo válido',
			},
			required: [true, 'El tipo es obligatorio'],
		},

		state: {
			type: String,
			enum: {
				values: ['Pendiente', 'Aprobado', 'Rechazado'],
				message: '{VALUE} no es un estado válido',
			},
			required: [true, 'El estado es obligatorio'],
		},
	},
	{
		timestamps: true,
	}
);
const PermissionRequest: Model<IPermissionRequest> =
	models.User || model('PermissionRequest', PermissionRequestSchema);

export default PermissionRequest;
