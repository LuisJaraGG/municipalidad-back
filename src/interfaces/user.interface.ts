export interface User {
	_id: string;
	name: string;
	password: string;
	role: string;
	email: string;
	imageURL: string;
	state: string;
	createdAt: string;
	updatedAt: string;

	//Methods
	comparePassword(password: string): Promise<boolean>;
}
