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
exports.PostResponseDto = exports.TopicInfo = exports.UserInfo = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class UserInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, _id: { required: true, type: () => String } };
    }
}
exports.UserInfo = UserInfo;
class TopicInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, _id: { required: true, type: () => String } };
    }
}
exports.TopicInfo = TopicInfo;
class PostResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, title: { required: true, type: () => String }, content: { required: true, type: () => String }, topic: { required: true, type: () => require("./post-resp.dto").TopicInfo }, user: { required: true, type: () => require("./post-resp.dto").UserInfo }, upvote_count: { required: true, type: () => Number }, downvote_count: { required: true, type: () => Number }, reject_reason: { required: true, type: () => String }, publishedAt: { required: true, type: () => Date }, status: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((params) => params.obj._id),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PostResponseDto.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PostResponseDto.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PostResponseDto.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((params) => params.obj.topic_id),
    (0, class_transformer_1.Type)(() => TopicInfo),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", TopicInfo)
], PostResponseDto.prototype, "topic", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((params) => params.obj.user_id),
    (0, class_transformer_1.Type)(() => UserInfo),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", UserInfo)
], PostResponseDto.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PostResponseDto.prototype, "upvote_count", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PostResponseDto.prototype, "downvote_count", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PostResponseDto.prototype, "reject_reason", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PostResponseDto.prototype, "publishedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PostResponseDto.prototype, "status", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PostResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], PostResponseDto.prototype, "updatedAt", void 0);
exports.PostResponseDto = PostResponseDto;
//# sourceMappingURL=post-resp.dto.js.map