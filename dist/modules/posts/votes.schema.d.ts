import mongoose, { Document } from 'mongoose';
import { User } from '../users/users.schema';
import { Post } from './posts.schema';
export declare type VoteDocument = Vote & Document;
export declare enum PostStatus {
    ACTIVE = "active",
    PENDING = "pending",
    REJECTED = "reject"
}
export declare class Vote {
    isUpvote: boolean;
    post_id: Post;
    user_id: User;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const VoteSchema: mongoose.Schema<Vote, mongoose.Model<Vote, any, any, any, any>, {}, {}, {}, {}, "type", Vote>;
