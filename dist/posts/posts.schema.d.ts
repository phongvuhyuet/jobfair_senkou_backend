import mongoose, { Document } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
export declare type PostDocument = Post & Document & MongooseDelete.SoftDeleteDocument;
export declare enum PostStatus {
    ACTIVE = "active",
    PENDING = "pending",
    REJECTED = "reject"
}
export declare class Post {
    title: string;
    content: string;
    topic_id: string;
    user_id: string;
    upvote_count: string;
    downvote_count: string;
    reject_reason?: string;
    publishedAt?: Date;
    status: PostStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const PostSchema: mongoose.Schema<Post, mongoose.Model<Post, any, any, any, any>, {}, {}, {}, {}, "type", Post>;
