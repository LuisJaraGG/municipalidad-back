import { Schema, Model, models, model } from 'mongoose';

import { Role } from '../interfaces/role.interface';

const RoleSchema = new Schema(
	{
		name: {
			type: String,
			trim: true,
			unique: true,
			uppercase: true,
			required: [true, 'El nombre es obligatorio'],
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

const Role: Model<Role> = models.Role || model('Role', RoleSchema);
export default Role;
