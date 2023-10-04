export interface IProvider {
	_id: string;
	name: string;
	dni_ruc: string;
	direction: string;
	condition: string;
	state: boolean;

	createdAt: string;
	updatedAt: string;
}
