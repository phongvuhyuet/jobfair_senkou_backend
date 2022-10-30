import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @Get()
  getPosts() {
    return this.postService.findAll();
  }
  @Get('/:id')
  getPost(@Param('id') id: string) {
    return this.postService.findOne(id);
  }
}
