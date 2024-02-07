import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RedisApiModule } from './redis-cache/redis-cache.module'
import { MemoryCacheModule } from './memory-cache/memory-cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    RedisApiModule,
    MemoryCacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
