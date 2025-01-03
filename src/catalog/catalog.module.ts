import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CatalogController } from './catalog.controller';
import { CatalogService } from './catalog.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import {MockCatalog} from './mockDb/MockCatalog'

// inject mockcatalog into service: {provide: 'MockCatalog', useValue: MockCatalog}
@Module({
  imports: [ PrismaModule ],
  controllers: [CatalogController],
  providers: [ MockCatalog, CatalogService],
  exports: [CatalogService]
})
//injected provider used for configuration purposes
export class CatalogModule {
      constructor(private catalogService: CatalogService) {}
  }
