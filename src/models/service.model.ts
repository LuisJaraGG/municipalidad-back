import { Schema, Model, models, model } from 'mongoose';
import { IService } from '../interfaces';

const ServiceSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre es obligatorio'],
			trim: true,
			unique: true,
		},
		description: {
			type: String,
			required: [true, 'La descripción es obligatoria'],
			trim: true,
		},
		price: {
			type: Number,
			required: [true, 'El precio es obligatorio'],
		},
		state: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	}
);

const Service: Model<IService> = models.User || model('Service', ServiceSchema);
export default Service;
