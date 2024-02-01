import { Test, TestingModule } from '@nestjs/testing';
import { GrpcHealthIndicatorController } from './grpc-health-indicator.controller';

describe('GrpcHealthIndicatorController', () => {
  let controller: GrpcHealthIndicatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GrpcHealthIndicatorController],
    }).compile();

    controller = module.get<GrpcHealthIndicatorController>(
      GrpcHealthIndicatorController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
