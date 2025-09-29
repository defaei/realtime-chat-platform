import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SendCodeDto } from "src/dtos/auth/send-code.dto";
import type { Response } from "express";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CustomResponses } from "src/utilities/responses";

@ApiTags("Authentication Management")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "Send Two-Factor Verification Code for Email" })
  @Post("send-code")
  async SendVerificationCode(@Body() sendCodeDto: SendCodeDto, @Res() res: Response) {
    await this.authService.createOtp(sendCodeDto);
    return CustomResponses.successResponse(res, "Code has been Sent to your Email", HttpStatus.CREATED);
  }
}
