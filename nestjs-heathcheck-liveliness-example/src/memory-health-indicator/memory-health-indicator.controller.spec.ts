import { Test, TestingModule } from '@nestjs/testing';
import { MemoryHealthIndicatorController } from './memory-health-indicator.controller';

describe('MemoryHealthIndicatorController', () => {
  let controller: MemoryHealthIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemoryHealthIndicatorController],
    }).compile();

    controller = module.get<MemoryHealthIndicatorController>(MemoryHealthIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
