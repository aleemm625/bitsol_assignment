import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../user/user.service';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async signIn(email: string, pass: string) {
    try {
      const dbUser = await this.userService.findOne(email);

      if (dbUser?.password !== pass) {
        throw new UnauthorizedException();
      }
      const payload = { name: dbUser.name, sub: dbUser._id };

      return {
        access_token: await this.jwtService.signAsync(payload, {
          secret: jwtConstants.secret,
        }),
      };
    } catch (error) {
      throw new Error(error);
    }
  }
}
