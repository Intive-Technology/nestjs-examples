import { Test, TestingModule } from '@nestjs/testing';
import { TypeormHealthIndicatorController } from './typeorm-health-indicator.controller';

describe('TypeormHealthIndicatorController', () => {
  let controller: TypeormHealthIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeormHealthIndicatorController],
    }).compile();

    controller = module.get<TypeormHealthIndicatorController>(TypeormHealthIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
