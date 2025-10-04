import { Controller, Get, Res } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { MailService } from "./mail.service";

@ApiTags("Mail Management")
@Controller("mail")
export class MailController {
  constructor(private readonly mailService: MailService) {}
}
