export type DocumentType = 'DNI' | 'RUC';

export interface IClient {
	_id: string;
	name: string;
	email: string;
	phone: string;
	address: string;
	document_type: DocumentType;
	dni_ruc: string;
	state: boolean;  
	
}

