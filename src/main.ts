import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.CORS_ENABLED === 'true') {
    app.enableCors(corsConfig());
  }

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
