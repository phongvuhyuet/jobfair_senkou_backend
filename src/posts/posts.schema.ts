import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { SoftDeleteDocument } from 'mongoose-delete';
import * as MongooseDelete from 'mongoose-delete';
export type PostDocument = Post & Document & SoftDeleteDocument;
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

  @Prop({ type: mongoose.Schema.Types.ObjectId, default: null })
  topic_id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, default: null })
  user_id: string;

  @Prop({ default: 0 })
  upvote_count: string;

  @Prop({ default: 0 })
  downvote_count: string;

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
