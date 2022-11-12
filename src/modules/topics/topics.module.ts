import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopicController } from './topics.controller';
import { Topic, TopicSchema } from './topics.schema';
import { TopicService } from './topics.service';
import { PostsModule } from '../posts/posts.module';

@Module({
  controllers: [TopicController],
  providers: [TopicService],
  imports: [
    MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }]),
    PostsModule,
  ],
})
export class TopicsModule {}
