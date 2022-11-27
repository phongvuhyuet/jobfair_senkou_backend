import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Post, PostDocument } from './posts.schema';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { PostResponseDto } from './dtos/post-resp.dto';
import { VotePostDto } from './dtos/vote-post.dto';
import { FilterPostDto } from './dtos/filter-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}
  async findAll(): Promise<PostDocument[]> {
    const result = await this.postModel
      .find()
      .populate({
        path: 'user_id',
        select: 'name _id',
      })
      .populate({
        path: 'topic_id',
        select: 'name _id',
      })
      .exec();

    return result;
  }
  async filter(filter: FilterPostDto): Promise<PostDocument[]> {
    const result = await this.postModel
      .find({
        ...(filter.topic_id ? { topic_id: filter.topic_id } : {}),
        ...(filter.title ? { title: { $regex: `.*${filter.title}.*` } } : {}),
      })
      .populate({
        path: 'user_id',
        select: 'name _id',
      })
      .populate({
        path: 'topic_id',
        select: 'name _id',
      })
      .exec();
    return result.sort((a: PostDocument, b: PostDocument) => {
      return (
        b.upvote_count - b.downvote_count - (a.upvote_count - a.upvote_count)
      );
    });
  }
  async newestPosts(count: number): Promise<PostDocument[]> {
    return await this.postModel
      .find({})
      .populate({
        path: 'user_id',
        select: 'name _id',
      })
      .populate({
        path: 'topic_id',
        select: 'name _id',
      })
      .sort({ createdAt: 'desc' })
      .limit(count)
      .exec();
  }
  async findOne(id: string): Promise<PostDocument> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('Post not found');

    const post = await this.postModel
      .findOne({ _id: id })
      .populate({
        path: 'user_id',
        select: 'name _id',
      })
      .populate({
        path: 'topic_id',
        select: 'name _id',
      })
      .exec();
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
  async create(body: CreatePostDto): Promise<PostDocument> {
    const newPost = new this.postModel(body);
    return await newPost.save();
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
  async updateAll(body: UpdatePostDto) {
    await this.postModel.updateMany({}, body);
    return { message: 'Update Success' };
  }
  async votePost(id: string, body: VotePostDto): Promise<StatusResponseDto> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('Post not found');

    const post = await this.postModel.findOne({ _id: id }).exec();
    if (!post) throw new NotFoundException('Post not found');
    // TODO: handle user-vote relations
    if (body.is_upvote) {
      post.upvote_count = post.upvote_count + 1;
    } else {
      post.downvote_count = post.downvote_count + 1;
    }
    await post.save();
    return {
      message: 'vote success',
    };
  }
}
