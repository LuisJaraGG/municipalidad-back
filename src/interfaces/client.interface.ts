export type ClientType = 'Jurídico' | 'Natural';

export interface IClient {
	first_name: string;
	last_name: string;
	phone: string;
	direction: string;
	type: ClientType;
	dni: string;

	_id: string;
	createdAt: string;
	updatedAt: string;
}
