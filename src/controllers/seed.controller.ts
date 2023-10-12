import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { Role, Service, ServiceType, User } from '../models';

export async function seedData(req: Request, res: Response) {
	try {
		if (process.env.NODE_ENV === 'production') {
			return res.status(401).json({ message: 'No tiene permisos' });
		}

		await Promise.all([Role.deleteMany(), User.deleteMany(),Service.deleteMany(),ServiceType.deleteMany()]);

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

		const serviceTypes = await ServiceType.insertMany([
			{ name: 'Agua y Desague',description:'Mensual' },
			{ name: 'Baja Policia' ,description:'Mensual'},
			{ name: 'Registro Civil' ,description:'Evento'},
			{ name: 'SISA' ,description:'Mensual'},
			{ name: 'Eventos Deportivos' ,description:'Evento'},
		]);

		await Service.insertMany([
			{ name: 'Agua y Desague',state:true, type: serviceTypes[0]._id },
			{ name: 'Baja Policia',state:true, type: serviceTypes[1]._id },
			{ name: 'SISA',state:true, type: serviceTypes[3]._id },
			{ name: 'Deportivo',state:true, type: serviceTypes[4]._id },
			{ name: 'Matrimonios',state:true, type: serviceTypes[2]._id },
			{ name: 'Nacimientos',state:true, type: serviceTypes[2]._id },
			{ name: 'Defunciones',state:true, type: serviceTypes[2]._id },
			{ name: 'Inscripciones',state:true, type: serviceTypes[2]._id },
		]);

		return res.status(200).json({ message: 'Seed ejecutado correctamente' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Error al ejecutar el seed' });
	}
}
