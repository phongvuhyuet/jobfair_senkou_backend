import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTopicDto {
  @IsString()
  @ApiProperty()
  name: string;
}
