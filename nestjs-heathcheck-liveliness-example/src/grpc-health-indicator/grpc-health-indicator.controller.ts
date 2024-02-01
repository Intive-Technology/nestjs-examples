import { Controller, Get } from '@nestjs/common';
import { GrpcOptions } from '@nestjs/microservices';
import {
  GRPCHealthIndicator,
  HealthCheck,
  HealthCheckService,
} from '@nestjs/terminus';
import { join } from 'path';

@Controller('grpc-health-indicator')
export class GrpcHealthIndicatorController {
  constructor(
    private health: HealthCheckService,
    private grpc: GRPCHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    console.log(join(__dirname, 'news.proto'));
    return this.health.check([
      async () =>
        this.grpc.checkService<GrpcOptions>('news-grpc', 'Health', {
          timeout: 20000,
          package: 'news',
          protoPath: join(__dirname, 'news.proto'),
          url: 'grpc-server-app:50051',
        }),
    ]);
  }
}
