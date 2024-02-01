import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  SequelizeHealthIndicator,
} from '@nestjs/terminus';

@Controller('sequelize-health-indicator')
export class SequelizeHealthIndicatorController {
  constructor(
    private health: HealthCheckService,
    private db: SequelizeHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([async () => this.db.pingCheck('sequelize')]);
  }
}
