import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Code Metrics Lab API')
  .setDescription('Backend part of Code Metrics Lab')
  .setVersion('1.0')
  .build();
