import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { TopicService } from './topics.service';
import { UpdateTopicDto } from './dtos/update-topic.dto';
import { CreateTopicDto } from './dtos/create-topic.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { TopicRespDto } from './dtos/topic-resp.dto';
import { TopicWithPostCountDto } from './dtos/topic-with-post-count-resp.dto';

@ApiTags('topics')
@Controller('topics')
export class TopicController {
  constructor(private topicService: TopicService) {}
  @Post()
  @ApiExtraModels(StatusResponseDto)
  @ApiOkResponse({
    status: 201,
    schema: {
      $ref: getSchemaPath(StatusResponseDto),
    },
  })
  @ApiOperation({ description: 'create topics', summary: 'create topic' })
  async createPost(@Body() body: CreateTopicDto): Promise<StatusResponseDto> {
    const res = await this.topicService.create(body);
    return res;
  }

  @Put('/:id')
  @ApiResponse({ status: 404 })
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(StatusResponseDto),
    },
  })
  @ApiOperation({ description: 'update topic', summary: 'update topic' })
  updatePost(
    @Body() body: UpdateTopicDto,
    @Param('id') id: string,
  ): Promise<StatusResponseDto> {
    return this.topicService.update(id, body);
  }

  @Delete('/:id')
  @ApiResponse({ status: 404 })
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(StatusResponseDto),
    },
  })
  @ApiOperation({ description: 'delete topic', summary: 'delete topic' })
  deletePost(@Param('id') id: string): Promise<StatusResponseDto> {
    return this.topicService.delete(id);
  }

  @Serialize(TopicRespDto)
  @Get()
  @ApiOkResponse({
    status: 200,
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(TopicRespDto),
      },
    },
  })
  @ApiOperation({ description: 'get list topics', summary: 'get list topics' })
  getPosts(): Promise<TopicRespDto[]> {
    return this.topicService.findAll() as unknown as Promise<TopicRespDto[]>;
  }

  @Serialize(TopicRespDto)
  @Get('/:id')
  @ApiExtraModels(TopicRespDto)
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(TopicRespDto),
    },
  })
  @ApiResponse({ status: 404 })
  @ApiOperation({ description: 'get topic', summary: 'get topic' })
  getPost(@Param('id') id: string): Promise<TopicRespDto> {
    return this.topicService.findOne(id) as unknown as Promise<TopicRespDto>;
  }

  @Serialize(TopicWithPostCountDto)
  @Get('/all/with-post-count')
  @ApiQuery({ name: 'topic_count', required: false, type: String })
  @ApiExtraModels(TopicWithPostCountDto)
  @ApiOkResponse({
    status: 200,
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(TopicWithPostCountDto),
      },
    },
  })
  @ApiOperation({
    description: 'get topic with post count',
    summary: 'get topic with post count',
  })
  getWithPostCount(
    @Query('topic_count') topic_count: number,
  ): Promise<TopicWithPostCountDto> {
    return this.topicService.getAllWithPostCount(
      topic_count,
    ) as unknown as Promise<TopicWithPostCountDto>;
  }
}
