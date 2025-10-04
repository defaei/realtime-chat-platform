import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmDataSource } from "./utilities/data-source";
import { AuthModule } from "./modules/auth/auth.module";
import { MailModule } from "./modules/mails/mail.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(TypeOrmDataSource.options),
    AuthModule,
    MailModule,
    UsersModule,
  ],
})
export class AppModule {}
