import { Request, Response } from 'express';
import { ServiceType } from '../models';

export const getServicesTypes = async (req: Request, res: Response) => {
	try {
		const serviceTypes = await ServiceType.find().lean();
		return res.json(serviceTypes);
	} catch (error) {
		return res.json({ message: 'Error interno del servidor' });
	}
};
