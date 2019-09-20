import { Module, HttpModule } from '@nestjs/common';
import { WaboxappController } from './waboxapp.controller';
import { WaboxappService } from './waboxapp.service';

@Module({
	imports: [HttpModule],
	controllers: [WaboxappController],
	providers: [WaboxappService],
})
export class WaboxappModule { }
