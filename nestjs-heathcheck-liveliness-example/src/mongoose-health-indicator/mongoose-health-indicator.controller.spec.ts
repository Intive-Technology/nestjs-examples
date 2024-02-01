import { Test, TestingModule } from '@nestjs/testing';
import { MongooseHealthIndicatorController } from './mongoose-health-indicator.controller';

describe('MongooseHealthIndicatorController', () => {
  let controller: MongooseHealthIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongooseHealthIndicatorController],
    }).compile();

    controller = module.get<MongooseHealthIndicatorController>(MongooseHealthIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
