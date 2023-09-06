import { Schema, Model, models, model } from 'mongoose';
import bcrypt from 'bcrypt';

import { User } from '../interfaces/user.interface';

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'El nombre es obligatorio'],
		},
		email: {
			type: String,
			required: [true, 'El email es obligatorio'],
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'La contraseña es obligatoria'],
		},
		imageURL: {
			type: String,
			default:
				'https://res.cloudinary.com/dbvyaguam/image/upload/v1693714866/default-avatar-profile_uqi3ai.webp',
		},
		state: {
			type: Boolean,
			default: true,
		},
		role: {
			type: String,
			required: [true, 'El rol es obligatorio'],
			enum: {
				values: ['ADMIN', 'SUPER-USER', 'USER'],
				message: '{VALUE} no es un rol válido',
			},
			default: 'USER',
		},
	},
	{
		timestamps: true,
	}
);

UserSchema.pre('save', function (next) {
	const user = this;

	if (!user.isModified('password')) return next();

	bcrypt.genSalt(function (err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password!, salt, function (err, hash) {
			if (err) return next(err);

			user.password = hash;
			next();
		});
	});
});

UserSchema.methods.toJSON = function () {
	const { __v, password, _id, ...user } = this.toObject();
	user.id = _id;
	return user;
};

UserSchema.methods.comparePassword = async function (password: string) {
	return await bcrypt.compare(password, this.password);
};

const User: Model<User> = models.User || model('User', UserSchema);
export default User;
