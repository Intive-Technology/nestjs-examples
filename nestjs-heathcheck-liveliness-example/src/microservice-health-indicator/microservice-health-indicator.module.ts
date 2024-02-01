import { Module } from '@nestjs/common';
import { MicroserviceHealthIndicatorController } from './microservice-health-indicator.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [MicroserviceHealthIndicatorController],
})
export class MicroserviceHealthIndicatorModule {}
