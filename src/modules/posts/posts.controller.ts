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
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { StatusResponseDto } from 'src/common-dtos/status-resp.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { PostResponseDto } from './dtos/post-resp.dto';
import { VotePostDto } from './dtos/vote-post.dto';
import { FilterPostDto } from './dtos/filter-post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}
  @Post()
  @Serialize(PostResponseDto)
  @ApiExtraModels(PostResponseDto)
  @ApiOkResponse({
    status: 201,
    schema: {
      $ref: getSchemaPath(PostResponseDto),
    },
  })
  @ApiOperation({ description: 'create posts', summary: 'create post' })
  async createPost(@Body() body: CreatePostDto): Promise<PostResponseDto> {
    const res = await this.postService.create(body);
    return res as unknown as PostResponseDto;
  }

  @Put('/:id')
  @ApiResponse({ status: 404 })
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(StatusResponseDto),
    },
  })
  @ApiOperation({ description: 'update post', summary: 'update post' })
  updatePost(
    @Body() body: UpdatePostDto,
    @Param('id') id: string,
  ): Promise<StatusResponseDto> {
    return this.postService.update(id, body);
  }

  @Delete('/:id')
  @ApiResponse({ status: 404 })
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(StatusResponseDto),
    },
  })
  @ApiOperation({ description: 'delete post', summary: 'delete post' })
  deletePost(@Param('id') id: string): Promise<StatusResponseDto> {
    return this.postService.delete(id);
  }

  @Serialize(PostResponseDto)
  @Get('/filter')
  @ApiOkResponse({
    status: 200,
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(PostResponseDto),
      },
    },
  })
  @ApiOperation({
    description: 'filter list posts by topic and title',
    summary: 'filter list post by topic posts and title',
  })
  filterPosts(@Query() filter: FilterPostDto): Promise<PostResponseDto[]> {
    return this.postService.filter(filter) as unknown as Promise<
      PostResponseDto[]
    >;
  }

  @Serialize(PostResponseDto)
  @Get('newest')
  @ApiOkResponse({
    status: 200,
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(PostResponseDto),
      },
    },
  })
  @ApiOperation({
    description: 'newest 5 post',
    summary: 'newest 5 post',
  })
  getLatestPost(): Promise<PostResponseDto[]> {
    const DEFAULT_POST_COUNT = 5;
    return this.postService.newestPosts(
      DEFAULT_POST_COUNT,
    ) as unknown as Promise<PostResponseDto[]>;
  }

  @Serialize(PostResponseDto)
  @Get('/:id')
  @ApiExtraModels(PostResponseDto)
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(PostResponseDto),
    },
  })
  @ApiResponse({ status: 404 })
  @ApiOperation({ description: 'get post', summary: 'get post' })
  getPost(@Param('id') id: string): Promise<PostResponseDto> {
    return this.postService.findOne(id) as unknown as Promise<PostResponseDto>;
  }

  @Post('/:id/vote')
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(StatusResponseDto),
    },
  })
  @ApiResponse({ status: 404 })
  @ApiOperation({ description: 'vote post', summary: 'vote post' })
  votePost(
    @Param('id') id: string,
    @Body() votePostReq: VotePostDto,
  ): Promise<StatusResponseDto> {
    return this.postService.votePost(
      id,
      votePostReq,
    ) as unknown as Promise<StatusResponseDto>;
  }
}
