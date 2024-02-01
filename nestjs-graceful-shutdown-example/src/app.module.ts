import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    TerminusModule.forRoot({
      gracefulShutdownTimeoutMs: 5000,
      errorLogStyle: 'json',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
