import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Version('1')
  getHelloVersion1(): string {
    return this.appService.getHelloV1();
  }

  @Get()
  @Version('2')
  @ApiQuery({ name: 'version', required: false, enum: ['1', '2'] })

  getHelloVersion2(): string {
    return this.appService.getHelloVersion2();
  }

  @Get()
  @Version(VERSION_NEUTRAL)
  getHello(): string {
    return this.appService.getHello();
  }

}
