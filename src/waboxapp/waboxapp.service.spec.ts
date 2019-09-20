import { Test, TestingModule } from '@nestjs/testing';
import { WaboxappService } from './waboxapp.service';

describe('WaboxappService', () => {
  let service: WaboxappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaboxappService],
    }).compile();

    service = module.get<WaboxappService>(WaboxappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
