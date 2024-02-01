import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloV1(): string {
    return 'Hello World version 1!';
  }

  getHelloVersion2(): string {
    return 'Hello World from version 2! ';
  }
}
