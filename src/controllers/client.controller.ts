import { Request, Response } from 'express';

import { Client } from '../models';

export const getClients = async (req: Request, res: Response) => {
	try {
		const clients = await Client.find().select('-createdAt -updatedAt -__v').lean();

		return res.json({
			ok: true,
			clients,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const getClient = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const client = await Client.findById(id).select('-createdAt -updatedAt -__v').lean();

		return res.json({
			ok: true,
			client,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const createClient = async (req: Request, res: Response) => {
	try {
		const client = await Client.create(req.body);

		return res.json({
			ok: true,
			client,
		});
	} catch (error) {
		console.log(error);

		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const updateClient = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const client = await Client.findByIdAndUpdate(id, req.body, { new: true })
			.select('-createdAt -updatedAt -__v')
			.lean();

		return res.json({
			ok: true,
			client,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const deleteClient = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		await Client.findByIdAndDelete(id);

		return res.json({
			ok: true,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};
