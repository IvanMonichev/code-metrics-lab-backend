import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsConfig = (): CorsOptions => {
  const origins = process.env.CORS_ORIGINS?.split(',') || [];
  const methods = process.env.CORS_METHODS?.split(',') || [
    'GET',
    'HEAD',
    'PUT',
    'PATCH',
    'POST',
    'DELETE',
  ];

  return {
    origin: origins,
    methods: methods,
    credentials: process.env.CORS_CREDENTIALS === 'true',
    maxAge: parseInt(process.env.CORS_MAX_AGE || '3600', 10),
  };
};
