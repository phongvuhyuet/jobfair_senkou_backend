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
exports.TopicController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const topics_service_1 = require("./topics.service");
const update_topic_dto_1 = require("./dtos/update-topic.dto");
const create_topic_dto_1 = require("./dtos/create-topic.dto");
const status_resp_dto_1 = require("../../common-dtos/status-resp.dto");
const serialize_interceptor_1 = require("../../interceptors/serialize.interceptor");
const topic_resp_dto_1 = require("./dtos/topic-resp.dto");
const topic_with_post_count_resp_dto_1 = require("./dtos/topic-with-post-count-resp.dto");
let TopicController = class TopicController {
    constructor(topicService) {
        this.topicService = topicService;
    }
    async createPost(body) {
        const res = await this.topicService.create(body);
        return res;
    }
    updatePost(body, id) {
        return this.topicService.update(id, body);
    }
    deletePost(id) {
        return this.topicService.delete(id);
    }
    getPosts() {
        return this.topicService.findAll();
    }
    getPost(id) {
        return this.topicService.findOne(id);
    }
    getWithPostCount(topic_count) {
        return this.topicService.getAllWithPostCount(topic_count);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, serialize_interceptor_1.Serialize)(topic_resp_dto_1.TopicRespDto),
    (0, swagger_1.ApiExtraModels)(status_resp_dto_1.StatusResponseDto),
    (0, swagger_1.ApiOkResponse)({
        status: 201,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(status_resp_dto_1.StatusResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'create topics', summary: 'create topic' }),
    openapi.ApiResponse({ status: 201, type: require("./dtos/topic-resp.dto").TopicRespDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_topic_dto_1.CreateTopicDto]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "createPost", null);
__decorate([
    (0, common_1.Put)('/:id'),
    (0, swagger_1.ApiResponse)({ status: 404 }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(status_resp_dto_1.StatusResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'update topic', summary: 'update topic' }),
    openapi.ApiResponse({ status: 200, type: require("../../common-dtos/status-resp.dto").StatusResponseDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_topic_dto_1.UpdateTopicDto, String]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiResponse)({ status: 404 }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(status_resp_dto_1.StatusResponseDto),
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'delete topic', summary: 'delete topic' }),
    openapi.ApiResponse({ status: 200, type: require("../../common-dtos/status-resp.dto").StatusResponseDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "deletePost", null);
__decorate([
    (0, serialize_interceptor_1.Serialize)(topic_resp_dto_1.TopicRespDto),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            type: 'array',
            items: {
                $ref: (0, swagger_1.getSchemaPath)(topic_resp_dto_1.TopicRespDto),
            },
        },
    }),
    (0, swagger_1.ApiOperation)({ description: 'get list topics', summary: 'get list topics' }),
    openapi.ApiResponse({ status: 200, type: [require("./dtos/topic-resp.dto").TopicRespDto] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "getPosts", null);
__decorate([
    (0, serialize_interceptor_1.Serialize)(topic_resp_dto_1.TopicRespDto),
    (0, common_1.Get)('/:id'),
    (0, swagger_1.ApiExtraModels)(topic_resp_dto_1.TopicRespDto),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            $ref: (0, swagger_1.getSchemaPath)(topic_resp_dto_1.TopicRespDto),
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404 }),
    (0, swagger_1.ApiOperation)({ description: 'get topic', summary: 'get topic' }),
    openapi.ApiResponse({ status: 200, type: require("./dtos/topic-resp.dto").TopicRespDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "getPost", null);
__decorate([
    (0, serialize_interceptor_1.Serialize)(topic_with_post_count_resp_dto_1.TopicWithPostCountDto),
    (0, common_1.Get)('/all/with-post-count'),
    (0, swagger_1.ApiQuery)({ name: 'topic_count', required: false, type: String }),
    (0, swagger_1.ApiExtraModels)(topic_with_post_count_resp_dto_1.TopicWithPostCountDto),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        schema: {
            type: 'array',
            items: {
                $ref: (0, swagger_1.getSchemaPath)(topic_with_post_count_resp_dto_1.TopicWithPostCountDto),
            },
        },
    }),
    (0, swagger_1.ApiOperation)({
        description: 'get topic with post count',
        summary: 'get topic with post count',
    }),
    openapi.ApiResponse({ status: 200, type: require("./dtos/topic-with-post-count-resp.dto").TopicWithPostCountDto }),
    __param(0, (0, common_1.Query)('topic_count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TopicController.prototype, "getWithPostCount", null);
TopicController = __decorate([
    (0, swagger_1.ApiTags)('topics'),
    (0, common_1.Controller)('topics'),
    __metadata("design:paramtypes", [topics_service_1.TopicService])
], TopicController);
exports.TopicController = TopicController;
//# sourceMappingURL=topics.controller.js.map