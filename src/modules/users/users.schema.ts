import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
export type UserDocument = User & Document & MongooseDelete.SoftDeleteDocument;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User).plugin(
  MongooseDelete,
  { overrideMethods: 'all' },
);
