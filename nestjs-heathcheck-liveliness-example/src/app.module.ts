import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomHealthIndicatorModule } from './custom-health-indicator/custom-health-indicator.module';
import { MongooseHealthIndicatorModule } from './mongoose-health-indicator/mongoose-health-indicator.module';
import { MicroserviceHealthIndicatorModule } from './microservice-health-indicator/microservice-health-indicator.module';
import { GrpcHealthIndicatorModule } from './grpc-health-indicator/grpc-health-indicator.module';
import { MemoryHealthIndicatorModule } from './memory-health-indicator/memory-health-indicator.module';
import { SequelizeHealthIndicatorModule } from './sequelize-health-indicator/sequelize-health-indicator.module';
import { HttpHealthIndicatorModule } from './http-health-indicator/http-health-indicator.module';
import { TypeormHealthIndicatorModule } from './typeorm-health-indicator/typeorm-health-indicator.module';

@Module({
  imports: [
    CustomHealthIndicatorModule,
    MongooseHealthIndicatorModule,
    MicroserviceHealthIndicatorModule,
    GrpcHealthIndicatorModule,
    MemoryHealthIndicatorModule,
    SequelizeHealthIndicatorModule,
    HttpHealthIndicatorModule,
    TypeormHealthIndicatorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
