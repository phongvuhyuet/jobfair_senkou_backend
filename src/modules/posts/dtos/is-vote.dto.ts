import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class IsVoteResponseDto {
  @Expose()
  @ApiProperty()
  result: 'upvoted' | 'downvoted' | 'none';
}
