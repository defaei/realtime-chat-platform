import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import type { Response } from "express";
import { SendCodeDto } from "src/dtos/auth/send-code.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("send-code")
  async SendVerificationCode(@Body() sendCodeDto: SendCodeDto) {}
}
