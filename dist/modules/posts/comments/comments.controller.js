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
exports.CommentsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const serialize_interceptor_1 = require("../../../interceptors/serialize.interceptor");
const comment_response_dto_1 = require("./dtos/comment-response.dto");
const create_comment_request_dto_1 = require("./dtos/create-comment-request.dto");
const comments_service_1 = require("./comments.service");
const update_comment_request_dto_1 = require("./dtos/update-comment-request.dto");
const status_resp_dto_1 = require("../../../common-dtos/status-resp.dto");
let CommentsController = class CommentsController {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async createPost(body) {
        const res = await this.commentService.create(body);
        return res;
    }
    async getByPostId(postId) {
        const res = await this.commentService.listByPost(postId);
        return res;
    }
    async update(id, body) {
        const res = await this.commentService.update(id, body);
        return res;
    }
    async delete(id) {
        const res = await this.commentService.delete(id);
        return res;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, serialize_interceptor_1.Serialize)(comment_response_dto_1.CommentResponseDto),
    (0, swagger_1.ApiExtraModels)(comment_response_dto_1.CommentResponseDto),
    (0, swagger_1.ApiOkResponse)({
        status: 201,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(comment_response_dto_1.CommentResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'create comment', summary: 'create comment' }),
    openapi.ApiResponse({ status: 201, type: require("./dtos/comment-response.dto").CommentResponseDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_request_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)('/:postId'),
    (0, serialize_interceptor_1.Serialize)(comment_response_dto_1.CommentResponseDto),
    (0, swagger_1.ApiExtraModels)(comment_response_dto_1.CommentResponseDto),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            type: 'array',
            items: {
                $ref: (0, swagger_1.getSchemaPath)(comment_response_dto_1.CommentResponseDto),
            },
        },
    }),
    (0, swagger_1.ApiOperation)({
        description: 'get comments by post id',
        summary: 'get comments by postId',
    }),
    openapi.ApiResponse({ status: 200, type: [require("./dtos/comment-response.dto").CommentResponseDto] }),
    __param(0, (0, common_1.Param)('postId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "getByPostId", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, serialize_interceptor_1.Serialize)(comment_response_dto_1.CommentResponseDto),
    (0, swagger_1.ApiExtraModels)(comment_response_dto_1.CommentResponseDto),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(comment_response_dto_1.CommentResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({
        description: 'update comment',
        summary: 'update comment',
    }),
    openapi.ApiResponse({ status: 200, type: require("./dtos/comment-response.dto").CommentResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comment_request_dto_1.UpdateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(status_resp_dto_1.StatusResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({
        description: 'update comment',
        summary: 'update comment',
    }),
    openapi.ApiResponse({ status: 200, type: require("../../../common-dtos/status-resp.dto").StatusResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "delete", null);
CommentsController = __decorate([
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map