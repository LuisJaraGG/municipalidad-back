export type PermissionRequestType = 'Comercial' | 'Construcción' | 'Demolición' | 'Evento';

export type PermissionRequestState = 'Pendiente' | 'Aprobado' | 'Rechazado';

export interface IPermissionRequest {
	name: string;
	client: string;
	type: PermissionRequestType;
	state: PermissionRequestState;

	_id: string;
	createdAt: string;
	updatedAt: string;
}
