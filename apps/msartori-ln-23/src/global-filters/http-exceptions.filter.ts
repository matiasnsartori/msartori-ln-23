import {
  ExceptionFilter,
  HttpException,
  Catch,
  ArgumentsHost,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionsFilter.name);

  constructor(private configService: ConfigService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const productionEnv = this.configService.get('NODE_ENV') === 'production';

    this.logger.error(`Error: ${exception.message}, status: ${status}`);
    response.status(status).json(
      productionEnv
        ? { statusCode: status, message: exception.message }
        : {
            statusCode: status,
            timestamp: new Date().toISOString(),
            message: exception.message,
            stacktrace: exception.stack,
          },
    );
  }
}
