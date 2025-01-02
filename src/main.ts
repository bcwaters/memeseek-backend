import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  // Specify Express to expose express platform
  //const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

}
bootstrap();
