import { Request, Response } from 'express';

import User from '../models/user.model';
import { IUser } from '../interfaces/user.interface';

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find()
			.select('-password -createdAt -updatedAt -__v')
			.populate('role', 'name')
			.lean();

		return res.json({
			ok: true,
			users,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const user = await User.findById(id)
			.select('-password -createdAt -updatedAt -__v')
			.populate('role', 'name')
			.lean();

		return res.json({
			ok: true,
			user,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const createUser = async (req: Request, res: Response) => {
	try {
		const user = await User.create(req.body);

		return res.json({
			ok: true,
			user,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;
	const { password, state } = req.body as IUser;

	try {
		let user;
		if ((password && password !== '') || state) {
			user = await User.findById(id);

			if (password && password !== '') {
				user!.password = password;
			}

			if (state) {
				user!.state = true;
			}
			await user?.save();
		} else {
			user = await User.findById(id);
			user?.name && (user.name = req.body.name);
			user?.email && (user.email = req.body.email);
			user?.role && (user.role = req.body.role);
			user?.imageURL && (user.imageURL = req.body.imageURL);
			await user?.save();
		}
		return res.json({
			ok: true,
			user,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		await User.findByIdAndUpdate(id, { state: false });

		return res.json({
			ok: true,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};
