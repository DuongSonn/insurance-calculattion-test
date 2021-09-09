import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET, PUT, POST, DELETE',
  });
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
