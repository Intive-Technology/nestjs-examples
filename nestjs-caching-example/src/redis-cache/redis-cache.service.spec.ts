import { Test, TestingModule } from '@nestjs/testing';
import { RedisApiService } from './redis-cache.service';

describe('RedisApiService', () => {
  let service: RedisApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RedisApiService],
    }).compile();

    service = module.get<RedisApiService>(RedisApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
