import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceHealthIndicatorController } from './microservice-health-indicator.controller';

describe('MicroserviceHealthIndicatorController', () => {
  let controller: MicroserviceHealthIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceHealthIndicatorController],
    }).compile();

    controller = module.get<MicroserviceHealthIndicatorController>(MicroserviceHealthIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
