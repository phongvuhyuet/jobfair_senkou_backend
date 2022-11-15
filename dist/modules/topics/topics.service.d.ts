import { Model } from 'mongoose';
import { TopicDocument } from './topics.schema';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { CreateTopicDto } from './dtos/create-topic.dto';
import { UpdateTopicDto } from './dtos/update-topic.dto';
import { TopicWithPostCountDto } from './dtos/topic-with-post-count-resp.dto';
import { PostsService } from '../posts/posts.service';
export declare class TopicService {
    private topicModel;
    private postsService;
    constructor(topicModel: Model<TopicDocument>, postsService: PostsService);
    findAll(): Promise<TopicDocument[]>;
    findOne(id: string): Promise<TopicDocument>;
    create(body: CreateTopicDto): Promise<TopicDocument>;
    update(id: string, body: UpdateTopicDto): Promise<StatusResponseDto>;
    delete(id: string): Promise<StatusResponseDto>;
    getAllWithPostCount(topic_count: number): Promise<TopicWithPostCountDto[]>;
}
