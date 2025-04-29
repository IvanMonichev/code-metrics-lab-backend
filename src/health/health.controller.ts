import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  @Get()
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'All is fine',
  })
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
