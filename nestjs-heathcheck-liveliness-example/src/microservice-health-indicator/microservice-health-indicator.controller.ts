import { Controller, Get } from '@nestjs/common';
import {
  RedisOptions,
  TcpClientOptions,
  Transport,
} from '@nestjs/microservices';
import {
  HealthCheck,
  HealthCheckService,
  MicroserviceHealthIndicator,
} from '@nestjs/terminus';

@Controller('microservice-health-indicator')
export class MicroserviceHealthIndicatorController {
  constructor(
    private health: HealthCheckService,
    private microservice: MicroserviceHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      async () =>
        this.microservice.pingCheck<TcpClientOptions>('tcp', {
          transport: Transport.TCP,
          options: { host: 'localhost', port: 8889 },
        }),
      async () =>
        this.microservice.pingCheck<RedisOptions>('redis', {
          transport: Transport.REDIS,
          options: {
            host: 'redis',
            port: 6379,
          },
        }),
    ]);
  }
}
