export interface Contact {
	uid: string;
	name: string;
	type: string;
}

export interface Body {
	text: string;
}

export interface Message {
	dtm: string;
	uid: string;
	cuid: string;
	dir: string;
	type: string;
	body: Body;
	ack: string;
}

export interface WaboxappRequest {
	event: string;
	token: string;
	contact: Contact;
	message: Message;
}