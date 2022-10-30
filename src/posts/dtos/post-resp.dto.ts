import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';

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
  @ApiProperty()
  topic_id: string;

  @Expose()
  @ApiProperty()
  user_id: string;

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
}
