import { TopicService } from './topics.service';
import { UpdateTopicDto } from './dtos/update-topic.dto';
import { CreateTopicDto } from './dtos/create-topic.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { TopicRespDto } from './dtos/topic-resp.dto';
import { TopicWithPostCountDto } from './dtos/topic-with-post-count-resp.dto';
export declare class TopicController {
    private topicService;
    constructor(topicService: TopicService);
    createPost(body: CreateTopicDto): Promise<TopicRespDto>;
    updatePost(body: UpdateTopicDto, id: string): Promise<StatusResponseDto>;
    deletePost(id: string): Promise<StatusResponseDto>;
    getPosts(): Promise<TopicRespDto[]>;
    getPost(id: string): Promise<TopicRespDto>;
    getWithPostCount(topic_count: number): Promise<TopicWithPostCountDto>;
}
