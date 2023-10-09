import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { Role, User } from '../models';

export async function seedData(req: Request, res: Response) {
	try {
		if (process.env.NODE_ENV === 'production') {
			return new Response('No tiene permisos', { status: 401 });
		}

		await Promise.all([Role.deleteMany(), User.deleteMany()]);

		//Roles
		const roles = await Role.insertMany([
			{ name: 'Administrador' },
			{ name: 'Super Usuario' },
			{ name: 'Usuario' },
		]);

		//Usuarios
		await User.insertMany([
			{
				name: 'Administrador',
				email: 'admin@test.com',
				password: bcrypt.hashSync('password', 10),
				role: roles[0]._id,
				address: 'Calle 123',
			},
			{
				name: 'Super Usuario',
				email: 'superusuario@test.com',
				password: bcrypt.hashSync('password', 10),
				role: roles[1]._id,
				address: 'Calle 123',
			},
			{
				name: 'Usuario',
				email: 'usuario@test.com',
				password: bcrypt.hashSync('password', 10),
				role: roles[2]._id,
				address: 'Calle 123',
			},
		]);

		return res.status(200).json({ message: 'Seed ejecutado correctamente' });
	} catch (error) {
		return res.status(500).json({ message: 'Error al ejecutar el seed' });
	}
}
