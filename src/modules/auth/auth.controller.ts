import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(
    @Req() resquest: any,
    @Res() response: any,
    @Body() signInDto: { email: string; password: string },
  ) {
    try {
      const token = await this.authService.signIn(
        signInDto.email,
        signInDto.password,
      );

      return response.status(200).json(token);
    } catch (error) {
      return response.status(500).json(error.message);
    }
  }
}
