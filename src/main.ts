import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.CORS_ENABLED === 'true') {
    app.enableCors(corsConfig());
  }

  const config = new DocumentBuilder()
    .setTitle('Code Metrics Lab API')
    .setDescription('Backend part of Code Metrics Lab')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
