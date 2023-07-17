import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import { HttpExceptionsFilter } from './global-filters/http-exceptions.filter';
import { ConfigService } from '@nestjs/config';
import { AllExceptionsFilter } from './global-filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalFilters(
    new HttpExceptionsFilter(app.get(ConfigService)),
    new AllExceptionsFilter(app.get(HttpAdapterHost)),
  );
  await app.listen(3001);
}
bootstrap();
