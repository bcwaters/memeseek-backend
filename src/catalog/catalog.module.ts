import { Module } from '@nestjs/common';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';

@Module({
  controllers: [CatalogController],
  providers: [CatalogService],
  exports: [CatalogService]
})
//injected provider used for configuration purposes
export class CatalogModule {
      constructor(private catalogService: CatalogService) {}
  }
