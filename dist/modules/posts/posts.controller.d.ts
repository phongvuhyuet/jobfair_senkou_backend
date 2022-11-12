import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { PostResponseDto } from './dtos/post-resp.dto';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    createPost(body: CreatePostDto): Promise<PostResponseDto>;
    updatePost(body: UpdatePostDto, id: string): Promise<StatusResponseDto>;
    deletePost(id: string): Promise<StatusResponseDto>;
    filterPostByTopic(topic_id: string): Promise<PostResponseDto[]>;
    getLatestPost(): Promise<PostResponseDto[]>;
    getPost(id: string): Promise<PostResponseDto>;
}
