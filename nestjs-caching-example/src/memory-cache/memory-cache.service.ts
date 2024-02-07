import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MemoryCacheService {
    getCacheResult(): string[] {
        const result = [];
        for (let index = 0; index < 100000; index++) {
          result.push(faker.person.jobTitle() + ' '+ faker.person.jobArea()+ ' '+ faker.company.name());
        }
        return result;
      }
}
