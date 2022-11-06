import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
export type TopicDocument = Topic &
  Document &
  MongooseDelete.SoftDeleteDocument;

@Schema({ timestamps: true })
export class Topic {
  @Prop({ required: true })
  name: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const TopicSchema = SchemaFactory.createForClass(Topic).plugin(
  MongooseDelete,
  { overrideMethods: 'all' },
);
