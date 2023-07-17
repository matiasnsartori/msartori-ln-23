import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { error } from 'console';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  constructor(private httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const context = host.switchToHttp();

    const httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
    this.logger.error(`Error: ${exception.message}, status: ${httpStatus}`);

    const responseBody = {
      statusCode: httpStatus,
      message: '🥲 Internal server error 🥲',

    };

    httpAdapter.reply(context.getResponse(), responseBody, httpStatus);
  }
}
