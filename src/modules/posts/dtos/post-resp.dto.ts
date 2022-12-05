import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';
export class UserInfo {
  name: string;
  _id: string;
}
export class TopicInfo {
  name: string;
  _id: string;
}
export class PostResponseDto {
  @Expose()
  @Transform((params) => params.obj._id)
  @ApiProperty()
  _id: string;

  @Expose()
  @ApiProperty()
  title: string;

  @Expose()
  @ApiProperty()
  content: string;

  @Expose()
  @Transform((params) => params.obj.topic_id)
  @Type(() => TopicInfo)
  @ApiProperty()
  topic: TopicInfo;

  @Expose()
  @Transform((params) => params.obj.user_id)
  @Type(() => UserInfo)
  @ApiProperty()
  user: UserInfo;

  @Expose()
  @ApiProperty()
  upvote_count: number;

  @Expose()
  @ApiProperty()
  downvote_count: number;

  @Expose()
  @ApiProperty()
  reject_reason: string;

  @Expose()
  @ApiProperty()
  publishedAt: Date;

  @Expose()
  @ApiProperty()
  status: number;

  @Expose()
  @ApiProperty()
  createdAt: Date;

  @Expose()
  @ApiProperty()
  updatedAt: Date;
  @Expose()
  @ApiProperty()
  comment_count: number;
}
