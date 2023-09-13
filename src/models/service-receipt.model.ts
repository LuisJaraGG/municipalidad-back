import { Schema, Model, models, model } from 'mongoose';
import { IServiceReceipt } from '../interfaces';

const ServiceReceiptSchema = new Schema(
	{
		client: {
			type: Schema.Types.ObjectId,
			ref: 'Client',
			required: [true, 'El cliente es obligatorio'],
		},
		service: {
			type: Schema.Types.ObjectId,
			ref: 'Service',
			required: [true, 'El servicio es obligatorio'],
		},
		amount: {
			type: Number,
			required: [true, 'El monto es obligatorio'],
		},
	},
	{
		timestamps: true,
	}
);

const ServiceReceipt: Model<IServiceReceipt> =
	models.User || model('ServiceReceipt', ServiceReceiptSchema);

export default ServiceReceipt;
