/// <reference types="mongoose-delete" />
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getCurrent(): Promise<User & import("mongoose").Document<any, any, any> & import("mongoose-delete").SoftDeleteDocument & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
