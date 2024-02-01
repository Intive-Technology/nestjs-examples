import { Module } from '@nestjs/common';
import { GrpcHealthIndicatorController } from './grpc-health-indicator.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [GrpcHealthIndicatorController],
})
export class GrpcHealthIndicatorModule {}
