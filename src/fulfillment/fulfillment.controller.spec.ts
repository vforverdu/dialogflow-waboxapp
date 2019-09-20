import { Test, TestingModule } from '@nestjs/testing';
import { FulfillmentController } from './fulfillment.controller';

describe('Fulfillment Controller', () => {
  let controller: FulfillmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FulfillmentController],
    }).compile();

    controller = module.get<FulfillmentController>(FulfillmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
