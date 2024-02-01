import { Module } from '@nestjs/common';
import { MongooseHealthIndicatorController } from './mongoose-health-indicator.controller';
import { TerminusModule } from '@nestjs/terminus';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TerminusModule,
    MongooseModule.forRoot('mongodb://mongodb:27017/test'),
  ],
  controllers: [MongooseHealthIndicatorController],
})
export class MongooseHealthIndicatorModule {}
