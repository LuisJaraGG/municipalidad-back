import { Schema, Model, models, model } from 'mongoose';
import { IPaymentHistory } from '../interfaces';

const PaymentHistorySchema = new Schema(
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

const PaymentHistory: Model<IPaymentHistory> =
	models.User || model('PaymentHistory', PaymentHistorySchema);

export default PaymentHistory;
