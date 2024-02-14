import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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
}
