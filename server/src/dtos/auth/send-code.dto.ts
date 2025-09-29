import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches } from "class-validator";
import { emailRegexp } from "src/helpers/regex";

export class SendCodeDto {
  @ApiProperty({ name: "email", example: "example@gmail.com" })
  @IsString({ message: "email should be a string" })
  @IsNotEmpty({ message: "please enter your Email" })
  @Matches(emailRegexp, { message: "Email is not Valid" })
  email: string;
}
