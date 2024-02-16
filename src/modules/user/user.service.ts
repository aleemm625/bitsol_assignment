import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}
  async getOne(): Promise<any> {
    try {
      return { message: 'one user' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAll(): Promise<any> {
    try {
      return { message: 'all users' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(): Promise<any> {
    try {
      return { message: 'create user' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async edit(): Promise<any> {
    try {
      return { message: 'edit user' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(): Promise<any> {
    try {
      return { message: 'delete user' };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findOne(username: string): Promise<User> {
    // const dbUser = await this.users.find((user) => user.username === username);
    const dbUser = await this.userModel.findOne({ email: username }).exec();
    // console.log(dbUser);

    return dbUser;
  }

  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: '1234',
    },
    {
      userId: 2,
      username: 'maria',
      password: '1234',
    },
  ];
}
