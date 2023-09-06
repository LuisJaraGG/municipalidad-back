import { Request, Response } from 'express';

import User from '../models/user.model';

export const loginUser = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	try {
		const userInDB = await User.findOne({ email });

		if (!userInDB) throw new Error('El usuario no se encuentra registrado');

		const isMatch = await userInDB.comparePassword(password);

		if (!isMatch) throw new Error('El email o la contraseña son incorrectos');

		return res.json(userInDB);
	} catch (error) {
		if (error instanceof Error) {
			return res.status(400).json({ error: error.message });
		}
	}
};
