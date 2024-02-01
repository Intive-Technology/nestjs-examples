import { Test, TestingModule } from '@nestjs/testing';
import { CustomHealthIndicatorController } from './custom-health-indicator.controller';

describe('CustomHealthIndicatorController', () => {
  let controller: CustomHealthIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomHealthIndicatorController],
    }).compile();

    controller = module.get<CustomHealthIndicatorController>(
      CustomHealthIndicatorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
