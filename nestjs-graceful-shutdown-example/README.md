# NestJS Graceful Shutdown Example
Graceful shutdown in NestJS is a process that allows a running application to stop its operations safely and correctly. This is especially important in production environments where abrupt termination of the application can lead to data loss or corruption, and other undesirable effects.

NestJS provides a built-in module called TerminusModule for implementing graceful shutdown in your application. This module allows you to handle system signals like SIGTERM and SIGINT, which are sent when the application is about to be terminated.

Here is an example of how to use TerminusModule to implement graceful shutdown in a NestJS application:

```
import { TerminusModule } from '@nestjs/terminus';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TerminusModule.forRoot({
      gracefulShutdownTimeoutMs: 10000,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
In `main.ts` file we also need to enable `enableShutdownHooks`.

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
```

In this example, the TerminusModule is configured to wait before terminating the app. When the application receives a SIGTERM or SIGINT signal, it will stop accepting new requests, finish handling ongoing requests, and then shut down.

##### Contributing
Contributions are welcome. Please make sure to update tests as appropriate.

License
[MIT](https://choosealicense.com/licenses/mit/)