import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { CustomResponses } from "./responses";

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Somethings Went Wrong!";
    let data = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const errorResponse = exception.getResponse();

      if (typeof errorResponse === "object" && errorResponse !== null) {
        message = (errorResponse as any).message || message;
        data = (errorResponse as any).data || null;
      } else {
        message = errorResponse as string;
      }

      return CustomResponses.errorResponse(res, message, status, data);
    }

    console.log(exception);
    return CustomResponses.errorResponse(res, message, status);
  }
}
