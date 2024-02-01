import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeHealthIndicatorController } from './sequelize-health-indicator.controller';

describe('SequelizeHealthIndicatorController', () => {
  let controller: SequelizeHealthIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SequelizeHealthIndicatorController],
    }).compile();

    controller = module.get<SequelizeHealthIndicatorController>(SequelizeHealthIndicatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
