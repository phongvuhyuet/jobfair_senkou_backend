import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserResponseDto } from './dtos/user-response.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Serialize(UserResponseDto)
  @Get('/current')
  @ApiExtraModels(UserResponseDto)
  @ApiOkResponse({
    status: 200,
    schema: {
      $ref: getSchemaPath(UserResponseDto),
    },
  })
  @ApiResponse({ status: 404 })
  @ApiOperation({
    description: 'get current user',
    summary: 'get current user',
  })
  getPost(): Promise<UserResponseDto> {
    return this.userService.getCurrent() as unknown as Promise<UserResponseDto>;
  }
}
