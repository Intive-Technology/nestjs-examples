import { Module } from '@nestjs/common';
import { CustomHealthIndicatorController } from './custom-health-indicator.controller';
import { TerminusModule } from '@nestjs/terminus';
import { DogModule } from 'src/dog/dog.module';

@Module({
  imports: [TerminusModule, DogModule],
  controllers: [CustomHealthIndicatorController],
})
export class CustomHealthIndicatorModule {}
