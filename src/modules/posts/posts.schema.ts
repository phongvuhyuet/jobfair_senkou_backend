import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
import { Topic } from '../topics/topics.schema';
import { User } from '../users/users.schema';
export type PostDocument = Post & Document & MongooseDelete.SoftDeleteDocument;
export enum PostStatus {
  ACTIVE = 'active',
  PENDING = 'pending',
  REJECTED = 'reject',
}

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'Topic',
  })
  topic_id: Topic;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'User',
  })
  user_id: User;

  @Prop({ default: 0 })
  upvote_count: number;

  @Prop({ default: 0 })
  downvote_count: number;

  @Prop()
  reject_reason?: string;

  @Prop({ default: null })
  publishedAt?: Date;

  @Prop({ default: PostStatus.PENDING })
  status: PostStatus;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post).plugin(
  MongooseDelete,
  { overrideMethods: 'all' },
);
