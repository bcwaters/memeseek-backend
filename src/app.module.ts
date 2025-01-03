import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatalogModule } from './catalog/catalog.module'
//import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [CatalogModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('catalog');
  }
}