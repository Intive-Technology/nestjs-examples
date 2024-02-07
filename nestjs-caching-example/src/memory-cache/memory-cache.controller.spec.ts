import { Test, TestingModule } from '@nestjs/testing';
import { MemoryCacheController } from './memory-cache.controller';

describe('MemoryCacheController', () => {
  let controller: MemoryCacheController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemoryCacheController],
    }).compile();

    controller = module.get<MemoryCacheController>(MemoryCacheController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
