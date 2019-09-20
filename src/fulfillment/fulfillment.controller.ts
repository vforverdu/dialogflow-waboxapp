import { Controller, Get, Post, Body } from '@nestjs/common';
import { FulfillmentRequest } from './models/fulfillment-request.dto';
import { FulfillmentResponse } from './models/fulfillment-response.dto';
import { FulfillmentService } from './fulfillment.service';

@Controller('fulfillment')
export class FulfillmentController {
	constructor(private readonly fulfillmentService: FulfillmentService) { }

	@Get()
	Status() {
		return 'Dialogflow Controller is running';
	}

	@Post()
	async Query(@Body() body: FulfillmentRequest): Promise<FulfillmentResponse> {
		console.log(JSON.stringify(body));

		const message: string = body.queryResult.queryText;

		const response: FulfillmentResponse = { fulfillmentText: message };

		return response;
	}
}
