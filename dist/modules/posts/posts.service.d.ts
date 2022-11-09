import { Model } from 'mongoose';
import { PostDocument } from './posts.schema';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
export declare class PostsService {
    private postModel;
    constructor(postModel: Model<PostDocument>);
    findAll(): Promise<PostDocument[]>;
    findOne(id: string): Promise<PostDocument>;
    create(body: CreatePostDto): Promise<PostDocument>;
    update(id: string, body: UpdatePostDto): Promise<StatusResponseDto>;
    delete(id: string): Promise<StatusResponseDto>;
    updateAll(body: UpdatePostDto): Promise<{
        message: string;
    }>;
}
