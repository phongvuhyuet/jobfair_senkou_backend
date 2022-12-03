import { CreateCommentDto } from './dtos/create-comment-request.dto';
import { CommentDocument } from './comments.schema';
import { Model } from 'mongoose';
import { StatusResponseDto } from '../../../common-dtos/status-resp.dto';
import { UpdateCommentDto } from './dtos/update-comment-request.dto';
export declare class CommentsService {
    private commentModel;
    constructor(commentModel: Model<CommentDocument>);
    create(body: CreateCommentDto): Promise<CommentDocument>;
    update(id: string, body: UpdateCommentDto): Promise<CommentDocument>;
    delete(id: string): Promise<StatusResponseDto>;
    listByPost(postId: string): Promise<CommentDocument[]>;
}
