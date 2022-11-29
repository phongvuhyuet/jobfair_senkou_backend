"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const serialize_interceptor_1 = require("../../interceptors/serialize.interceptor");
const user_response_dto_1 = require("./dtos/user-response.dto");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    getPost() {
        return this.userService.getCurrent();
    }
};
__decorate([
    (0, serialize_interceptor_1.Serialize)(user_response_dto_1.UserResponseDto),
    (0, common_1.Get)('/current'),
    (0, swagger_1.ApiExtraModels)(user_response_dto_1.UserResponseDto),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(user_response_dto_1.UserResponseDto),
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404 }),
    (0, swagger_1.ApiOperation)({
        description: 'get current user',
        summary: 'get current user',
    }),
    openapi.ApiResponse({ status: 200, type: require("./dtos/user-response.dto").UserResponseDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getPost", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map