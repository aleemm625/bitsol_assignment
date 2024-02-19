import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { adminUserSeedData, normalUserSeedData } from './constants/constants';

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

  async getAll(pageNo): Promise<User[] | any> {
    try {
      const limit = 30;
      const skip = (pageNo - 1) * limit;
      const dbUsers = await this.userModel
        .find()
        .skip(skip)
        .limit(limit)
        .exec();

      return dbUsers;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async create(user: User): Promise<User | any> {
    try {
      let dbUser = await this.findOne(user?.email);
      if (dbUser) {
        throw new Error('User already exists!');
      }
      const newUser = new this.userModel(user);
      dbUser = await newUser.save();

      return dbUser;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  async edit(id: string, user: User | object | any): Promise<User | any> {
    try {
      const dbUser = await this.findByIdAndUpdate(id, user);
      if (!dbUser) {
        throw new Error('User not found');
      }

      return dbUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async delete(id: string): Promise<User | any> {
    try {
      const dbUser = await this.userModel.findByIdAndDelete(id);

      return dbUser;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findByIdAndUpdate(
    id: string,
    userData: User | object | any,
  ): Promise<User> {
    const dbUser = await this.userModel.findByIdAndUpdate(id, userData, {
      new: true,
    });

    return dbUser;
  }

  async findById(id: string): Promise<User> {
    const dbUser = await this.userModel.findById({ _id: id }).exec();

    return dbUser;
  }

  async findOne(email: string): Promise<User> {
    const dbUser = await this.userModel.findOne({ email: email }).exec();

    return dbUser;
  }

  async seedData() {
    const data = [];

    try {
      await this.userModel.deleteMany({});

      for (let n = 0; n < 1000; n++) {
        if (n > 0) {
          data.push(normalUserSeedData(n));
        } else {
          data.push(adminUserSeedData);
        }
      }

      await this.userModel.insertMany(data); // Insert new data

      console.log('Data seeded successfully');
    } catch (error) {
      console.error('Error seeding data:', error);
    }
  }
}
