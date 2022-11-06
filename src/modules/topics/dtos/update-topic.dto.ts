import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
export class UpdateTopicDto {
  @IsString()
  @ApiProperty()
  name?: string;
}
