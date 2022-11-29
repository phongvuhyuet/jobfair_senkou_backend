import { UserResponseDto } from './dtos/user-response.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getPost(): Promise<UserResponseDto>;
}
