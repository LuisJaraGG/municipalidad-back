import { Request, Response } from 'express';

import User from '../models/user.model';
import { generateJWT } from '../helpers/generate-jwt.helper';

export const loginUser = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const userInDB = await User.findOne({ email, state: true })
			.select('-createdAt -updatedAt -__v')
			.populate('role', 'name');

		if (!userInDB) throw new Error('El usuario no se encuentra registrado');

		const isMatch = await userInDB.comparePassword(password);

		if (!isMatch) throw new Error('El email o la contraseña son incorrectos');

		const accessToken = await generateJWT(userInDB._id, 'access-token');
		const refreshToken = await generateJWT(userInDB._id, 'refresh-token');

		return res.json({
			ok: true,
			accessToken,
			refreshToken,
			user: userInDB,
		});
	} catch (error) {
		if (error instanceof Error) {
			return res.status(500).json({ error: error.message });
		}
	}
};

export const refreshTokenUser = async (req: Request, res: Response) => {
	const id = req.id;
	try {
		const user = await User.findOne({ _id: id, state: true })
			.select('-createdAt -updatedAt -__v')
			.populate('role', 'name');

		if (!user) throw new Error('El usuario no se encuentra registrado');

		const accessToken = await generateJWT(user._id, 'access-token');
		const refreshToken = await generateJWT(user._id, 'refresh-token');

		return res.json({
			ok: true,
			accessToken,
			refreshToken,
			user,
		});
	} catch (error) {
		if (error instanceof Error) {
			return res.status(500).json({ error: error.message });
		}
	}
};
