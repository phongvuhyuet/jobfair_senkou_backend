import mongoose, { Document } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
import { User } from 'src/modules/users/users.schema';
import { Post } from '../posts.schema';
export declare type CommentDocument = Comment & Document & MongooseDelete.SoftDeleteDocument;
export declare class Comment {
    content: string;
    post_id: Post;
    user_id: User | string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const CommentSchema: mongoose.Schema<Comment, mongoose.Model<Comment, any, any, any, any>, {}, {}, {}, {}, "type", Comment>;
