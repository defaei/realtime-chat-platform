import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendVerifyCodeForRegister(email: string, code: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: `Welcome to our Platform 🎉`,
      template: "./register-code",
      context: {
        code,
      },
    });
  }

  async sendVerifyCodeForLogin(email: string, code: string, username: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: `Welcome to our Platform 🎉`,
      template: "./login-code",
      context: {
        username,
        code,
      },
    });
  }
}
