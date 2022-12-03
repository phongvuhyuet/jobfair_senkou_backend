import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform, Type } from 'class-transformer';

export class UserInfo {
  name: string;
  _id: string;
}
export class PostInfo {
  title: string;
  _id: string;
}
export class CommentResponseDto {
  @Expose()
  @Transform((params) => params.obj._id)
  @ApiProperty()
  _id: string;

  @Expose()
  @ApiProperty()
  content: string;

  @Expose()
  @Transform((params) => params.obj.post_id)
  @Type(() => PostInfo)
  @ApiProperty()
  post: PostInfo;

  @Expose()
  @Transform((params) => params.obj.user_id)
  @Type(() => UserInfo)
  @ApiProperty()
  user: UserInfo;

  @Expose()
  @ApiProperty()
  createdAt: Date;

  @Expose()
  @ApiProperty()
  updatedAt: Date;
}
