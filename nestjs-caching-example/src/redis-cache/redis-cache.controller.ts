import { Controller, Get, Inject, Query, UseInterceptors } from '@nestjs/common';
import { RedisApiService } from './redis-cache.service';
import { HttpCacheInterceptor } from 'src/common/http-caching.interceptor';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER, CacheTTL } from '@nestjs/cache-manager';

@Controller('redis-cache')
@CacheTTL(120000)
@UseInterceptors(HttpCacheInterceptor)
export class RedisApiController {
    constructor(private readonly appService: RedisApiService, 
      @Inject(CACHE_MANAGER)
      private readonly cache : Cache) {
    }

    @Get()
    async getHello(@Query('query') query: string): Promise<string[]> {
      return this.appService.getCacheResult();
    }
}
