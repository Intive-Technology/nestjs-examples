import { Test, TestingModule } from '@nestjs/testing';
import { HttpHealthIndicatorController } from './http-health-indicator.controller';

describe('HttpHealthIndicatorController', () => {
  let controller: HttpHealthIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HttpHealthIndicatorController],
    }).compile();

    controller = module.get<HttpHealthIndicatorController>(HttpHealthIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
