import type { Response } from "express";

export class CustomResponses {
  static successResponse(res: Response, message: string, statusCode: number = 200, data: any = null) {
    return res.status(statusCode).json({ message, data, statusCode });
  }

  static errorResponse(res: Response, message: string, statusCode: number = 400, data: any = null) {
    return res.status(statusCode).json({ message, data, statusCode });
  }
}
