import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicController } from './topics.controller';
import { Topic, TopicSchema } from './topics.schema';
import { TopicService } from './topics.service';

@Module({
  controllers: [TopicController],
  providers: [TopicService],
  imports: [
    MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }]),
  ],
})
export class TopicsModule {}
