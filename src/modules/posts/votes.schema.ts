import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../users/users.schema';
import { Post } from './posts.schema';
export type VoteDocument = Vote & Document;
export enum PostStatus {
  ACTIVE = 'active',
  PENDING = 'pending',
  REJECTED = 'reject',
}

@Schema({ timestamps: true })
export class Vote {
  @Prop({ default: true })
  isUpvote: boolean;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Post',
  })
  post_id: Post;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  })
  user_id: User;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
