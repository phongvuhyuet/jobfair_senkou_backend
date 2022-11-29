import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  public async getCurrent() {
    return await this.userModel.findOne({ _id: '6367ca19d8195dbd6c728a0c' });
  }
}
