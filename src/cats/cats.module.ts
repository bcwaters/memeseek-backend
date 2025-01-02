import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
//injected provider used for configuration purposes
export class CatsModule {
      constructor(private catsService: CatsService) {}
  }
