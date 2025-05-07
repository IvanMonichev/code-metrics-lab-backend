import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsConfig } from './config/cors.config';
import { swaggerConfig } from './config/swagger.config';
import { SwaggerModule as SW } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup CORS
  if (process.env.CORS_ENABLED === 'true') {
    app.enableCors(corsConfig());
  }

  // Setup Swagger Documentation
  const documentFactory = () => SW.createDocument(app, swaggerConfig);
  SW.setup('docs', app, documentFactory);

  // Run the application
  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
