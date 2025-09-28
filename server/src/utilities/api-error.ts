import { HttpException } from "@nestjs/common";

export class ApiError extends HttpException {
  constructor(message: string, statusCode: number, data?: any) {
    super({ message, data }, statusCode);
  }
}
