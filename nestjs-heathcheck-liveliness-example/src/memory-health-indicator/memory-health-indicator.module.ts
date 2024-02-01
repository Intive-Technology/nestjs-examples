import { Module } from '@nestjs/common';
import { MemoryHealthIndicatorController } from './memory-health-indicator.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [MemoryHealthIndicatorController],
})
export class MemoryHealthIndicatorModule {}
