import { Controller, Get, Inject, Query } from '@nestjs/common';
import { MemoryCacheService } from './memory-cache.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Controller('memory-cache')
export class MemoryCacheController {
    constructor(private readonly appService: MemoryCacheService, 
        @Inject(CACHE_MANAGER)
        private readonly cache : Cache) {
      }
  
      @Get()
      async getHello(@Query('query') query: string): Promise<string[]> {
        return this.appService.getCacheResult();
      }
}
