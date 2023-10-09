import { Schema, Model, models, model } from 'mongoose';
import { IServiceType } from '../interfaces';

const ServiceTypeSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre es obligatorio'],
			trim: true,
			unique: true,
		},
		description: {
			type: String,
			trim: true,
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

const ServiceType: Model<IServiceType> =
	models.ServiceType || model('ServiceType', ServiceTypeSchema);
export default ServiceType;
