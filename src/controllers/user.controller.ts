import { Request, Response } from 'express';

import User from '../models/user.model';

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find({ state: true })
			.select('-password -createdAt -updatedAt -__v -state')
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
			.select('-password -createdAt -updatedAt -__v -state')
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
		const user = new User(req.body);

		await user.save();

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

	try {
		const user = await User.findByIdAndUpdate(id, req.body, { new: true })
			.select('-password -createdAt -updatedAt -__v -state')
			.lean();

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
		await User.findByIdAndDelete(id).lean();

		return res.json({
			ok: true,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};
