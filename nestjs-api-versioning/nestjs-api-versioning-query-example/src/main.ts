import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Request } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor: (req: Request): any => {
      const version = req.query['version'];
      if (version) {
        return version;
      }
      return null;
    }
  });
  const config = new DocumentBuilder()
    .setTitle('NestJS API versioning uri example')
    .setDescription('NestJS API versioning uri example openapi')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
