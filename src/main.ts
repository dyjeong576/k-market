import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //nestFactory의 Appmodule을 호출하고
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }))
  await app.listen(3000); //어플리케이션은 3000번의 포트를 리스닝하고 있음
}
bootstrap();

//파이프 = 미들웨어
