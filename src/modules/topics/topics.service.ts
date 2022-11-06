import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Topic, TopicDocument } from './topics.schema';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { CreateTopicDto } from './dtos/create-topic.dto';
import { UpdateTopicDto } from './dtos/update-topic.dto';

@Injectable()
export class TopicService {
  constructor(
    @InjectModel(Topic.name) private topicModel: Model<TopicDocument>,
  ) {}
  async findAll(): Promise<TopicDocument[]> {
    const result = this.topicModel.find().exec();
    return result;
  }
  async findOne(id: string): Promise<TopicDocument> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('Topic not found');

    const topic = await this.topicModel.findOne({ _id: id }).exec();
    if (!topic) throw new NotFoundException('Topic not found');
    return topic;
  }
  async create(body: CreateTopicDto): Promise<StatusResponseDto> {
    const newPost = new this.topicModel(body);
    await newPost.save();
    return { message: 'Create success' };
  }
  async update(id: string, body: UpdateTopicDto): Promise<StatusResponseDto> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('topic not found');
    const topic = await this.topicModel.findByIdAndUpdate(id, body);
    if (!topic) throw new NotFoundException('topic not found');
    return { message: 'Update Success' };
  }
  async delete(id: string): Promise<StatusResponseDto> {
    if (!mongoose.Types.ObjectId.isValid(id))
      throw new NotFoundException('topic not found');
    const topic = await this.topicModel.findById(id);
    if (!topic) throw new NotFoundException('topic not found');
    await topic.delete();
    return {
      message: 'Delete Success',
    };
  }
}
