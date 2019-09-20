import { Test, TestingModule } from '@nestjs/testing';
import { WaboxappController } from './waboxapp.controller';

describe('Waboxapp Controller', () => {
  let controller: WaboxappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaboxappController],
    }).compile();

    controller = module.get<WaboxappController>(WaboxappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
