import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(email: string, username: string, token: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: "Welcome 🎉",
      template: "./welcome", // looks for welcome.ejs
      context: {
        // passed into EJS template
        username,
        token,
      },
    });
  }
}
