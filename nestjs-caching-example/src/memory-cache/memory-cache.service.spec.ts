import { Test, TestingModule } from '@nestjs/testing';
import { MemoryCacheService } from './memory-cache.service';

describe('MemoryCacheService', () => {
  let service: MemoryCacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryCacheService],
    }).compile();

    service = module.get<MemoryCacheService>(MemoryCacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
