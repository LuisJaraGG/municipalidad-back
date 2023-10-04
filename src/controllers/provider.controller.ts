import { Request, Response } from 'express';

import { Provider } from '../models';

export const getProviders = async (req: Request, res: Response) => {
	try {
		const providers = await Provider.find().select('-createdAt -updatedAt -__v').lean();

		return res.json({
			ok: true,
			providers,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const getProvider = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		const provider = await Provider.findById(id).select('-createdAt -updatedAt -__v').lean();

		return res.json({
			ok: true,
			provider,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const createProvider = async (req: Request, res: Response) => {
	const { state, ...resBody } = req.body;

	try {
		const provider = await Provider.create({
			...resBody,
			state: state === 'ACTIVO' ? true : false,
		});

		return res.json({
			ok: true,
			provider,
		});
	} catch (error) {
		console.log(error);
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const updateProvider = async (req: Request, res: Response) => {
	const { id } = req.params;

	const { state, ...resBody } = req.body;

	try {
		const provider = await Provider.findByIdAndUpdate(
			id,
			{ ...resBody, state: state === 'ACTIVO' ? true : false },
			{ new: true }
		)
			.select('-createdAt -updatedAt -__v')
			.lean();

		return res.json({
			ok: true,
			provider,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};

export const deleteProvider = async (req: Request, res: Response) => {
	const { id } = req.params;

	try {
		await Provider.findByIdAndDelete(id);

		return res.json({
			ok: true,
		});
	} catch (error) {
		return res.json({ ok: false, message: 'Error interno del servidor' });
	}
};
