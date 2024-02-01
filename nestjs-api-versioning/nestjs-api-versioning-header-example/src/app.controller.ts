import { Controller, Get, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiHeader } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Version('1')

  getHello(): string {
    return this.appService.getHello();
  }

  @ApiHeader({
    name: 'X-API-VERSION',
    description: 'Version of the API',
  })
  @Get()
  @Version('2')
  getHelloVersion2(): string {
    return this.appService.getHelloVersion2();
  }
}
