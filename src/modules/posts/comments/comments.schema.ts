import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
import { User } from 'src/modules/users/users.schema';
import { Post } from '../posts.schema';
export type CommentDocument = Comment &
  Document &
  MongooseDelete.SoftDeleteDocument;

@Schema({ timestamps: true })
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'Post',
  })
  post_id: Post;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'User',
  })
  user_id: User | string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment).plugin(
  MongooseDelete,
  { overrideMethods: 'all' },
);
