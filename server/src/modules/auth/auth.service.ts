import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SendCodeDto } from "src/dtos/auth/send-code.dto";
import { Otp } from "src/entities/otps.entity";
import { CustomGenerate } from "src/helpers/generate";
import { CustomUuid } from "src/utilities/uuid";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Otp)
    private otpsRepository: Repository<Otp>
  ) {}

  async createOtp(sendCodeDto: SendCodeDto): Promise<Otp> {
    const otp = this.otpsRepository.create({
      id: CustomUuid.generateUuid(),
      email: sendCodeDto.email,
      code: CustomGenerate.generateRandomDigitsCodeByLength(6),
    });
    return this.otpsRepository.save(otp);
  }
}
