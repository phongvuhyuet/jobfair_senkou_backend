import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Post, PostDocument } from './posts.schema';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { VotePostDto } from './dtos/vote-post.dto';
import { FilterPostDto } from './dtos/filter-post.dto';
import { Vote, VoteDocument } from './votes.schema';
import { IsVoteResponseDto } from './dtos/is-vote.dto';
import { Comment, CommentDocument } from './comments/comments.schema';
import commentCountPipeline from './pipeline/comment-count-by-post.pipeline';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    @InjectModel(Vote.name) private voteModel: Model<VoteDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}
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
      .sort({
        createdAt: 'desc',
      })
      .exec();
    const commentCount = await this.commentModel.aggregate(
      commentCountPipeline,
    );
    return result.map((post) => ({
      comment_count:
        commentCount.find((el) => el._id.toString() === post._id.toString())
          ?.countPost || 0,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...post._doc,
    }));
  }
  async newestPosts(count: number): Promise<PostDocument[]> {
    const result = await this.postModel
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
    const commentCount = await this.commentModel.aggregate(
      commentCountPipeline,
    );
    return result.map((post) => ({
      comment_count:
        commentCount.find((el) => el._id.toString() === post._id.toString())
          ?.countPost || 0,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...post._doc,
    }));
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

    const vote = await this.voteModel.findOne({
      post_id: id,
      user_id: '6367ca19d8195dbd6c728a0c',
    });
    if (vote && vote.isUpvote === body.is_upvote) {
      post[!body.is_upvote ? 'downvote_count' : 'upvote_count'] =
        post[!body.is_upvote ? 'downvote_count' : 'upvote_count'] - 1;
      await vote.delete();
      await post.save();
      return {
        message: 'deleted vote',
      };
    }
    if (vote) {
      vote.isUpvote = body.is_upvote;
      post[body.is_upvote ? 'downvote_count' : 'upvote_count'] =
        post[body.is_upvote ? 'downvote_count' : 'upvote_count'] - 1;
      await vote.save();
    } else {
      const newVote = new this.voteModel({
        post_id: id,
        user_id: '6367ca19d8195dbd6c728a0c',
        isUpvote: body.is_upvote,
      });
      await newVote.save();
    }

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

  async getPostVote(id: string): Promise<IsVoteResponseDto> {
    const vote = await this.voteModel.findOne({
      post_id: id,
      user_id: '6367ca19d8195dbd6c728a0c',
    });
    if (vote) {
      if (vote.isUpvote)
        return {
          result: 'upvoted',
        };
      return {
        result: 'downvoted',
      };
    }
    return {
      result: 'none',
    };
  }
}
