import { Module } from '@nestjs/common';
import { SequelizeHealthIndicatorController } from './sequelize-health-indicator.controller';
import { TerminusModule } from '@nestjs/terminus';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      autoLoadModels: true,
      synchronize: true,
    }),
    TerminusModule,
  ],
  controllers: [SequelizeHealthIndicatorController],
})
export class SequelizeHealthIndicatorModule {}
