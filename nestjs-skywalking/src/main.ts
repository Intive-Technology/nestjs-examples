import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import agent from 'skywalking-backend-js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  agent.start({
    serviceName: 'nest_backend',
    serviceInstance: process.env.HOSTNAME,
    collectorAddress: 'skywalking-logger:11800',
  });

  await app.listen(3000);
}
bootstrap();
