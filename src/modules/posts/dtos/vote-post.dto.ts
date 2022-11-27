import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
export class VotePostDto {
  @IsBoolean()
  @ApiProperty()
  is_upvote: boolean;
}
