import { Module } from '@nestjs/common';
import { MemoryCacheController } from './memory-cache.controller';
import { MemoryCacheService } from './memory-cache.service';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports:[
    CacheModule.register({
      store: 'memory',
    })
  ],
  controllers: [MemoryCacheController],
  providers: [MemoryCacheService]
})
export class MemoryCacheModule {}
