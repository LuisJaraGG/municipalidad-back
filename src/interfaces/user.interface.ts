import { IRole } from './role.interface';

export interface IUser {
	_id: string;
	name: string;
	password: string;
	role: IRole;
	email: string;
	imageURL: string;
	state: boolean;
	createdAt: string;
	updatedAt: string;

	//Methods
	comparePassword(password: string): Promise<boolean>;
}
