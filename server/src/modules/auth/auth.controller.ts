import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SendCodeDto } from "src/dtos/auth/send-code.dto";
import type { Response } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CustomResponses } from "src/utilities/responses";
import { UsersService } from "../users/users.service";
import { MailService } from "../mails/mail.service";

@ApiTags("Authentication Management")
@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private mailService: MailService
  ) {}

  @ApiOperation({ summary: "Send Two-Factor Verification Code for Email" })
  @Post("send-code")
  async SendVerificationCode(@Body() sendCodeDto: SendCodeDto, @Res() res: Response) {
    const otp = await this.authService.createOtp(sendCodeDto);
    const isEmailExists = await this.usersService.findUserByEmail(sendCodeDto.email);
    if (isEmailExists) {
      await this.mailService.sendVerifyCodeForLogin(sendCodeDto.email, otp.code, isEmailExists.username);
    } else {
      await this.mailService.sendVerifyCodeForRegister(sendCodeDto.email, otp.code);
    }
    return CustomResponses.successResponse(res, "Code has been Sent to your Email", HttpStatus.CREATED);
  }
}
