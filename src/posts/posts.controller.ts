import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
import { StatusResponseDto } from './dtos/status-resp.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { PostResponseDto } from './dtos/post-resp.dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}
  @Post()
  @ApiExtraModels(StatusResponseDto)
  @ApiOkResponse({
    status: 201,
    schema: {
      $ref: getSchemaPath(StatusResponseDto),
    },
  })
  @ApiOperation({ description: 'create posts', summary: 'create post' })
  async createPost(@Body() body: CreatePostDto): Promise<StatusResponseDto> {
    const res = await this.postService.create(body);
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
  @Get()
  @ApiOkResponse({
    status: 200,
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(PostResponseDto),
      },
    },
  })
  @ApiOperation({ description: 'get list posts', summary: 'get list posts' })
  getPosts(): Promise<PostResponseDto[]> {
    return this.postService.findAll() as unknown as Promise<PostResponseDto[]>;
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
}
