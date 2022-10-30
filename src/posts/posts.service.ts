import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './posts.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}
  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }
  async findOne(id: string): Promise<Post> {
    return this.postModel.findOne({ id }).exec();
  }
}