import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCommentDto } from './dtos/create-comment-request.dto';
import { Comment, CommentDocument } from './comments.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StatusResponseDto } from '../../../common-dtos/status-resp.dto';
import { UpdateCommentDto } from './dtos/update-comment-request.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(body: CreateCommentDto): Promise<CommentDocument> {
    const newComment = new this.commentModel({
      ...body,
      user_id: '6367ca19d8195dbd6c728a0c',
    });
    return await newComment.save();
  }

  async update(id: string, body: UpdateCommentDto): Promise<CommentDocument> {
    const comment = await this.commentModel.findById(id);
    if (!comment) throw new NotFoundException('comment not found');
    console.log(comment.user_id);

    if (comment.user_id.toString() !== '6367ca19d8195dbd6c728a0c') {
      throw new ForbiddenException('not your comment');
    }
    comment.content = body.content;
    return await comment.save();
  }
  async delete(id: string): Promise<StatusResponseDto> {
    const comment = await this.commentModel.findById(id);
    if (!comment) throw new NotFoundException('comment not found');
    if (comment.user_id.toString() !== '6367ca19d8195dbd6c728a0c') {
      throw new ForbiddenException('not your comment');
    }

    await comment.delete();
    return {
      message: 'delete success',
    };
  }
  async listByPost(postId: string): Promise<CommentDocument[]> {
    const comments = await this.commentModel
      .find({ post_id: postId })
      .populate({
        path: 'user_id',
        select: 'name _id',
      })
      .populate({
        path: 'post_id',
        select: 'title _id',
      })
      .sort({ createdAt: 'desc' });

    return comments;
  }
}
