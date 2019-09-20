import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { WaboxappRequest } from './models/waboxapp.dto';
import { WaboxappService } from './waboxapp.service';

@Controller('waboxapp')
export class WaboxappController {
	constructor(private waboxapp: WaboxappService) { }

	@Post()
	@HttpCode(200)
	async WaboxAppRequest(@Body() body: WaboxappRequest) {
		console.log(JSON.stringify(body));

		if (body.event !== 'ack') {
			await this.waboxapp.sendMessageToPhone('Hello World!', 'receiver number ex: 34888777666');
		}

		return 'Received!';
	}
}
