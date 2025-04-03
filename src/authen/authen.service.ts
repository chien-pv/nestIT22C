import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenService {
  constructor(private jwtService: JwtService) {}

  async signIn() {
    const payload = {
      email: 'abc@gmail.com',
      name: 'Nguyen van a',
    };
    return await this.jwtService.signAsync(payload);
  }
}
