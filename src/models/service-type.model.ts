import { Schema, Model, models, model } from 'mongoose';
import { IServiceType,PaymentType} from '../interfaces';

const ServiceTypeSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre es obligatorio'],
			trim: true,
			unique: true,
			uppercase: true,
		},
		description: {
			type: String,
			enum: PaymentType,
			required: [true, 'La descripcion debe ser obligatoria'],
		},
		state: {
			type: Boolean,
			default: true,
		}
	},
	{
		timestamps: true,
	}
);

const ServiceType: Model<IServiceType> = models.ServiceType || model('ServiceType',ServiceTypeSchema );
export default ServiceType;