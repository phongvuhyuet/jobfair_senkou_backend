import mongoose, { Document } from 'mongoose';
import * as MongooseDelete from 'mongoose-delete';
export declare type TopicDocument = Topic & Document & MongooseDelete.SoftDeleteDocument;
export declare class Topic {
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const TopicSchema: mongoose.Schema<Topic, mongoose.Model<Topic, any, any, any, any>, {}, {}, {}, {}, "type", Topic>;
