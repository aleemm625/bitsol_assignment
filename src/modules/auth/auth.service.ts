import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async signIn(username: string, pass: string) {
    const dbUser = await this.userService.findOne(username);

    if (dbUser?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: dbUser.username, sub: dbUser._id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
