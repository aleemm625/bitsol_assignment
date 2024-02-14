import { Delete, Controller, Get, Post, Put, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET ONE USER
  @Get(':id')
  async getOne(@Req() request: any, @Res() response: any): Promise<any> {
    try {
      const dbUser = await this.userService.getOne();

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  // GET ALL USERS
  @Get()
  async getAll(@Req() request: any, @Res() response: any): Promise<any> {
    try {
      const dbUser = await this.userService.getAll();

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  // CREATE USER
  @Post()
  async create(@Req() request: any, @Res() response: any): Promise<any> {
    try {
      const dbUser = await this.userService.create();

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  // UPDATE USER
  @Put()
  async edit(@Req() request: any, @Res() response: any): Promise<any> {
    try {
      const dbUser = await this.userService.edit();

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  // DELETE USER
  @Delete()
  async delete(@Req() request: any, @Res() response: any): Promise<any> {
    try {
      const dbUser = await this.userService.delete();

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}
