import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Otp } from "src/entities/otps.entity";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
  imports: [TypeOrmModule.forFeature([Otp])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
