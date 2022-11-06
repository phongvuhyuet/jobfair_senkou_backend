import mongoose, { Document } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
export declare type UserDocument = User & Document & MongooseDelete.SoftDeleteDocument;
export declare class User {
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;
