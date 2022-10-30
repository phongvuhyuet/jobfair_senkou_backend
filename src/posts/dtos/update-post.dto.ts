import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { PostStatus } from '../posts.schema';
export class UpdatePostDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  title?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  content?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  topic_id?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  user_id?: string;

  @IsOptional()
  @Min(0)
  @ApiProperty({ required: false, minimum: 0 })
  upvote_count?: number;

  @IsOptional()
  @Min(0)
  @ApiProperty({ required: false, minimum: 0 })
  downvote_count?: number;

  @IsOptional()
  @IsEnum(PostStatus)
  @ApiProperty({ required: false, enum: PostStatus })
  status?: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty({ required: false })
  publishedAt?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  reject_reason?: string;
}
