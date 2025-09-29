import { Controller, Get, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { MailService } from "./mail.service";
import type { Response } from "express";
import { CustomResponses } from "src/utilities/responses";

@ApiTags("Mail Management")
@Controller("mail")
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  async send(@Res() res: Response): Promise<Response> {
    this.mailService.sendWelcomeEmail("pooya.defaee@gmail.com", "POOOOuya", "8765");
    return CustomResponses.successResponse(res, "");
  }
}
