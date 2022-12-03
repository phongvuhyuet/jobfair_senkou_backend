import { CommentResponseDto } from './dtos/comment-response.dto';
import { CreateCommentDto } from './dtos/create-comment-request.dto';
import { CommentsService } from './comments.service';
import { UpdateCommentDto } from './dtos/update-comment-request.dto';
import { StatusResponseDto } from '../../../common-dtos/status-resp.dto';
export declare class CommentsController {
    private commentService;
    constructor(commentService: CommentsService);
    createPost(body: CreateCommentDto): Promise<CommentResponseDto>;
    getByPostId(postId: string): Promise<CommentResponseDto[]>;
    update(id: string, body: UpdateCommentDto): Promise<CommentResponseDto>;
    delete(id: string): Promise<StatusResponseDto>;
}
