import { Model } from 'mongoose';
import { TopicDocument } from './topics.schema';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { CreateTopicDto } from './dtos/create-topic.dto';
import { UpdateTopicDto } from './dtos/update-topic.dto';
export declare class TopicService {
    private topicModel;
    constructor(topicModel: Model<TopicDocument>);
    findAll(): Promise<TopicDocument[]>;
    findOne(id: string): Promise<TopicDocument>;
    create(body: CreateTopicDto): Promise<StatusResponseDto>;
    update(id: string, body: UpdateTopicDto): Promise<StatusResponseDto>;
    delete(id: string): Promise<StatusResponseDto>;
}
