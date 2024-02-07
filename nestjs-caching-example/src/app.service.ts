import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class AppService {

  getCacheResult(): string[] {
    const result = [];
    for (let index = 0; index < 100000; index++) {
      result.push(faker.person.jobTitle());
    }
    return result;
  }
}
