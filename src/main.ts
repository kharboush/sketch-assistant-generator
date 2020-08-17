import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as rateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  // app.use(
  //   rateLimit({
  //     windowMs: 5 * 60 * 1000, // 15 minutes
  //     max: 100, // limit each IP to 100 requests per windowMs
  //   }),
  // );
  await app.listen(5000);
}
bootstrap();
