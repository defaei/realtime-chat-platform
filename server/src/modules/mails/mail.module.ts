import { Module } from "@nestjs/common";
import { MailController } from "./mail.controller";
import { MailService } from "./mail.service";
import { EjsAdapter } from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import { MailerModule } from "@nestjs-modules/mailer";

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: "pooya.defaee.wwe@gmail.com",
          pass: "xzzx lnki odcw hgkf ",
        },
      },
      defaults: {
        from: '"RealTime Chat Platform" <pooya.defaee.wwe@gmail.com>',
      },
      template: {
        dir: process.cwd() + "/src" + "/templates",
        adapter: new EjsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
