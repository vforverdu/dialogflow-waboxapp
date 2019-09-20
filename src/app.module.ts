import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaboxappModule } from './waboxapp/waboxapp.module';
import { FulfillmentModule } from './fulfillment/fulfillment.module';

@Module({
	imports: [WaboxappModule, FulfillmentModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
