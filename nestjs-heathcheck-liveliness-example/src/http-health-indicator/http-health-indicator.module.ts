import { Module } from '@nestjs/common';
import { HttpHealthIndicatorController } from './http-health-indicator.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HttpHealthIndicatorController],
})
export class HttpHealthIndicatorModule {}
