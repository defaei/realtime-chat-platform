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
        from: '"Pooya 👋" <pooya.defaee.wwe@gmail.com>',
      },
      template: {
        dir: process.cwd() + "/src" + "/templates", // where your .ejs files live
        adapter: new EjsAdapter(), // EJS adapter
        options: {
          strict: false, // set true if you want stricter parsing
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
