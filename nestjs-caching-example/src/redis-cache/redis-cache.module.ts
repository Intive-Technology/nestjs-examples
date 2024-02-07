import { Module } from '@nestjs/common';
import { RedisApiController } from './redis-cache.controller';
import { RedisApiService } from './redis-cache.service';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import type { RedisClientOptions } from 'redis';
@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      socket:{
        host: 'redis',
        port: 6379,
      },
      database: 0,
    })
  ],
  controllers: [RedisApiController],
  providers: [RedisApiService]
})
export class RedisApiModule { }
