import { Model } from 'mongoose';
import { PostDocument } from './posts.schema';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { VotePostDto } from './dtos/vote-post.dto';
import { FilterPostDto } from './dtos/filter-post.dto';
import { VoteDocument } from './votes.schema';
import { IsVoteResponseDto } from './dtos/is-vote.dto';
import { CommentDocument } from './comments/comments.schema';
export declare class PostsService {
    private postModel;
    private voteModel;
    private commentModel;
    constructor(postModel: Model<PostDocument>, voteModel: Model<VoteDocument>, commentModel: Model<CommentDocument>);
    findAll(): Promise<PostDocument[]>;
    filter(filter: FilterPostDto): Promise<PostDocument[]>;
    newestPosts(count: number): Promise<PostDocument[]>;
    findOne(id: string): Promise<PostDocument>;
    create(body: CreatePostDto): Promise<PostDocument>;
    update(id: string, body: UpdatePostDto): Promise<StatusResponseDto>;
    delete(id: string): Promise<StatusResponseDto>;
    updateAll(body: UpdatePostDto): Promise<{
        message: string;
    }>;
    votePost(id: string, body: VotePostDto): Promise<StatusResponseDto>;
    getPostVote(id: string): Promise<IsVoteResponseDto>;
}
