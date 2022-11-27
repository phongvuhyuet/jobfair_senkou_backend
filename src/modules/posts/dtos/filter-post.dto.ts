import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
export class FilterPostDto {
  @IsOptional()
  @ApiProperty({ required: false })
  topic_id?: string;

  @IsOptional()
  @ApiProperty({ required: false })
  title?: string;
}
