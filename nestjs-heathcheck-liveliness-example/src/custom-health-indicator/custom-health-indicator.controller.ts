import { Controller, Get } from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { DogHealthIndicator } from 'src/dog/dog.health';

@Controller('custom-health-indicator')
export class CustomHealthIndicatorController {
  constructor(
    private health: HealthCheckService,
    private dogHealthIndicator: DogHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      async () => this.dogHealthIndicator.isHealthy('dog'),
    ]);
  }
}
