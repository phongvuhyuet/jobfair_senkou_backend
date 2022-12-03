import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @ApiProperty()
  content: string;

  @IsString()
  @ApiProperty()
  post_id: string;
}
