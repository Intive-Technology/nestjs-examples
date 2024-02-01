import { Module } from '@nestjs/common';
import { TypeormHealthIndicatorController } from './typeorm-health-indicator.controller';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TerminusModule,
  ],
  controllers: [TypeormHealthIndicatorController],
})
export class TypeormHealthIndicatorModule {}
