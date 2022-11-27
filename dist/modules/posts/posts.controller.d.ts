import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { PostResponseDto } from './dtos/post-resp.dto';
import { VotePostDto } from './dtos/vote-post.dto';
import { FilterPostDto } from './dtos/filter-post.dto';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    createPost(body: CreatePostDto): Promise<PostResponseDto>;
    updatePost(body: UpdatePostDto, id: string): Promise<StatusResponseDto>;
    deletePost(id: string): Promise<StatusResponseDto>;
    filterPosts(filter: FilterPostDto): Promise<PostResponseDto[]>;
    getLatestPost(): Promise<PostResponseDto[]>;
    getPost(id: string): Promise<PostResponseDto>;
    votePost(id: string, votePostReq: VotePostDto): Promise<StatusResponseDto>;
}
