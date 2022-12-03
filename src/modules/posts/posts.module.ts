import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { Post, PostSchema } from './posts.schema';
import { PostsService } from './posts.service';
import { Vote, VoteSchema } from './votes.schema';
import { CommentsModule } from './comments/comments.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    MongooseModule.forFeature([{ name: Vote.name, schema: VoteSchema }]),
    CommentsModule,
  ],
})
export class PostsModule {}
