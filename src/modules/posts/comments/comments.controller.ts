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
  getSchemaPath,
} from '@nestjs/swagger';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { CommentResponseDto } from './dtos/comment-response.dto';
import { CreateCommentDto } from './dtos/create-comment-request.dto';
import { CommentsService } from './comments.service';
import { UpdateCommentDto } from './dtos/update-comment-request.dto';
import { StatusResponseDto } from '../../../common-dtos/status-resp.dto';

@Controller('comments')
export class CommentsController {
  constructor(private commentService: CommentsService) {}

  @Post()
  @Serialize(CommentResponseDto)
  @ApiExtraModels(CommentResponseDto)
  @ApiOkResponse({
    status: 201,
    schema: {
      $ref: getSchemaPath(CommentResponseDto),
    },
  })
  @ApiOperation({ description: 'create comment', summary: 'create comment' })
  async createPost(
    @Body() body: CreateCommentDto,
  ): Promise<CommentResponseDto> {
    const res = await this.commentService.create(body);
    return res as unknown as CommentResponseDto;
  }

  @Get('/:postId')
  @Serialize(CommentResponseDto)
  @ApiExtraModels(CommentResponseDto)
  @ApiOkResponse({
    status: 200,
    schema: {
      type: 'array',
      items: {
        $ref: getSchemaPath(CommentResponseDto),
      },
    },
  })
  @ApiOperation({
    description: 'get comments by post id',
    summary: 'get comments by postId',
  })
  async getByPostId(
    @Param('postId') postId: string,
  ): Promise<CommentResponseDto[]> {
    const res = await this.commentService.listByPost(postId);
    return res as unknown as CommentResponseDto[];
  }

  @Put('/:id')
  @Serialize(CommentResponseDto)
  @ApiExtraModels(CommentResponseDto)
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(CommentResponseDto),
    },
  })
  @ApiOperation({
    description: 'update comment',
    summary: 'update comment',
  })
  async update(
    @Param('id') id: string,
    @Body() body: UpdateCommentDto,
  ): Promise<CommentResponseDto> {
    const res = await this.commentService.update(id, body);
    return res as unknown as CommentResponseDto;
  }

  @Delete('/:id')
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(StatusResponseDto),
    },
  })
  @ApiOperation({
    description: 'update comment',
    summary: 'update comment',
  })
  async delete(@Param('id') id: string): Promise<StatusResponseDto> {
    const res = await this.commentService.delete(id);
    return res as StatusResponseDto;
  }
}
