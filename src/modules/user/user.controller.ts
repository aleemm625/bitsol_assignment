import {
  Delete,
  Controller,
  Get,
  Post,
  Put,
  Req,
  Res,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

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
      const pageNo = request.query.pageNo;
      const dbUser = await this.userService.getAll(pageNo);

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  // CREATE USER
  @Post()
  async create(
    @Body() user: User,
    @Req() request: any,
    @Res() response: any,
  ): Promise<any> {
    try {
      // console.log(user);
      const dbUser = await this.userService.create(user);

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  // UPDATE USER
  @Put(':id')
  async edit(
    @Req() request: any,
    @Res() response: any,
    @Body() user: User | any,
    @Param('id') id: string,
  ): Promise<any> {
    try {
      const dbUser = await this.userService.edit(id, user);

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  // DELETE USER
  @Delete(':id')
  async delete(@Req() request: any, @Res() response: any): Promise<any> {
    try {
      const id = request.params.id;
      const dbUser = await this.userService.delete(id);

      return response.status(200).json(dbUser);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }
}
