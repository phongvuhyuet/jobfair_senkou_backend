import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Post, PostDocument } from './posts.schema';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { StatusResponseDto } from './dtos/status-resp.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}
  async findAll(): Promise<PostDocument[]> {
    const result = this.postModel.find().exec();
    return result;
  }
  async findOne(id: string): Promise<PostDocument> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('Post not found');

    const post = await this.postModel.findOne({ _id: id }).exec();
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
  async create(body: CreatePostDto): Promise<StatusResponseDto> {
    const newPost = new this.postModel(body);
    await newPost.save();
    return { message: 'Create success' };
  }
  async update(id: string, body: UpdatePostDto): Promise<StatusResponseDto> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('Post not found');
    const post = await this.postModel.findByIdAndUpdate(id, body);
    if (!post) throw new NotFoundException('Post not found');
    return { message: 'Update Success' };
  }
  async delete(id: string): Promise<StatusResponseDto> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('Post not found');
    const post = await this.postModel.findById(id);
    if (!post) throw new NotFoundException('Post not found');
    await post.delete();
    return {
      message: 'Delete Success',
    };
  }
}
