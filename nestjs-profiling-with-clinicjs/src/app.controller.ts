import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

function sleep(ms) {
  const future = Date.now() + ms;
  while (Date.now() < future);
}

function soManyAllocations() {
  const A = [];
  for (let i = 0; i < 10000; i++) {
    A.push(new Array(2000));
  }
  return A;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    sleep(30);
    return 'Hello World!';
  }

  @Get('many-allocation')
  manyAllocation() {
    const arr = soManyAllocations();
    return arr;
  }
}
