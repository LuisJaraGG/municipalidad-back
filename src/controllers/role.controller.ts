import { Request, Response } from 'express';
import Role from '../models/role.model';

export const createRole = async (req: Request, res: Response) => {
	const { name } = req.body;

	try {
		const role = await Role.create({ name });

		res.status(201).json({
			ok: true,
			role,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const getRoles = async (req: Request, res: Response) => {
	try {
		const roles = await Role.find().select('-createdAt -updatedAt -__v').lean();

		return res.json({
			ok: true,
			roles,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const getRole = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const role = await Role.findById(id).select('-createdAt -updatedAt -__v').lean();

		return res.json({
			ok: true,
			role,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const updateRole = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const roleUpdated = await Role.findByIdAndUpdate(id, req.body, { new: true })
			.select('-createdAt -updatedAt -__v')
			.lean();

		return res.json({
			ok: true,
			role: roleUpdated,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const deleteRole = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		await Role.findByIdAndUpdate(id, { state: false });

		return res.json({
			ok: true,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};
