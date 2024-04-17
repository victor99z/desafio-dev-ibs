import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signIn(username: string, pw: string): Promise<any> {
    // Just for testing purpose
    // FIX that in the future implementations
    const hash = await bcrypt.hash(pw, 10);

    return {
      access_token: await this.jwtService.sign({ username, hash }),
    };
  }
}
