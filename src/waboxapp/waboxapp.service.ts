import { Injectable, HttpService } from '@nestjs/common';
import * as QueryString from 'querystring';
import { Guid } from 'guid-typescript';

@Injectable()
export class WaboxappService {
	constructor(private readonly axios: HttpService) { }

	async sendMessageToPhone(message: string, phone: string) {
		const config = {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		};

		const body = {
			token: 'your waboxapp token',
			uid: 'your phone number ex: 34666777888',
			to: phone,
			custom_uid: Guid.create(),
			text: message,
		};

		const url = 'https://www.waboxapp.com/api/send/chat';

		const encodedBody = QueryString.stringify(body);

		try {
			const response = await this.axios.post(url, encodedBody, config).toPromise();
			console.log(JSON.stringify(response.data));
		} catch (error) {
			console.log(error);
		}
	}
}
