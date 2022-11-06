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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const posts_service_1 = require("./posts.service");
const create_post_dto_1 = require("./dtos/create-post.dto");
const update_post_dto_1 = require("./dtos/update-post.dto");
const status_resp_dto_1 = require("../../common-dtos/status-resp.dto");
const serialize_interceptor_1 = require("../../interceptors/serialize.interceptor");
const post_resp_dto_1 = require("./dtos/post-resp.dto");
let PostsController = class PostsController {
    constructor(postService) {
        this.postService = postService;
    }
    async createPost(body) {
        const res = await this.postService.create(body);
        return res;
    }
    updatePost(body, id) {
        return this.postService.update(id, body);
    }
    deletePost(id) {
        return this.postService.delete(id);
    }
    getPosts() {
        return this.postService.findAll();
    }
    getPost(id) {
        return this.postService.findOne(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiExtraModels)(status_resp_dto_1.StatusResponseDto),
    (0, swagger_1.ApiOkResponse)({
        status: 201,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(status_resp_dto_1.StatusResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'create posts', summary: 'create post' }),
    openapi.ApiResponse({ status: 201, type: require("../../common-dtos/status-resp.dto").StatusResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiResponse)({ status: 404 }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(status_resp_dto_1.StatusResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'update post', summary: 'update post' }),
    openapi.ApiResponse({ status: 200, type: require("../../common-dtos/status-resp.dto").StatusResponseDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_post_dto_1.UpdatePostDto, String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiResponse)({ status: 404 }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(status_resp_dto_1.StatusResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'delete post', summary: 'delete post' }),
    openapi.ApiResponse({ status: 200, type: require("../../common-dtos/status-resp.dto").StatusResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "deletePost", null);
__decorate([
    (0, serialize_interceptor_1.Serialize)(post_resp_dto_1.PostResponseDto),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            type: 'array',
            items: {
                $ref: (0, swagger_1.getSchemaPath)(post_resp_dto_1.PostResponseDto),
            },
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'get list posts', summary: 'get list posts' }),
    openapi.ApiResponse({ status: 200, type: [require("./dtos/post-resp.dto").PostResponseDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPosts", null);
__decorate([
    (0, serialize_interceptor_1.Serialize)(post_resp_dto_1.PostResponseDto),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiExtraModels)(post_resp_dto_1.PostResponseDto),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(post_resp_dto_1.PostResponseDto),
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404 }),
    (0, swagger_1.ApiOperation)({ description: 'get post', summary: 'get post' }),
    openapi.ApiResponse({ status: 200, type: require("./dtos/post-resp.dto").PostResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPost", null);
PostsController = __decorate([
    (0, swagger_1.ApiTags)('posts'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map