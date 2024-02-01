import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProduces, ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Version([VERSION_NEUTRAL])
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Version(['1.0'])
  @Get()
  getHelloV1(): string {
    return this.appService.getHello();
  }

  @Version('2.0')
  @Get('/')
  @ApiProduces('application/json', 'application/json;v=1.0','application/json;v=2.0')
  async getHelloV2(): Promise<string> {
    return this.appService.getHello() + ' v2';
  }
}

