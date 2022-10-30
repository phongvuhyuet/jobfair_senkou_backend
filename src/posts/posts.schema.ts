import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: number;

  @Prop({ required: true, default: 0 })
  upvote_count: string;

  @Prop({ required: true, default: 0 })
  downvote_count: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
