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
exports.CommentResponseDto = exports.PostInfo = exports.UserInfo = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class UserInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, _id: { required: true, type: () => String } };
    }
}
exports.UserInfo = UserInfo;
class PostInfo {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, _id: { required: true, type: () => String } };
    }
}
exports.PostInfo = PostInfo;
class CommentResponseDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { _id: { required: true, type: () => String }, content: { required: true, type: () => String }, post: { required: true, type: () => require("./comment-response.dto").PostInfo }, user: { required: true, type: () => require("./comment-response.dto").UserInfo }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } };
    }
}
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((params) => params.obj._id),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "_id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CommentResponseDto.prototype, "content", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((params) => params.obj.post_id),
    (0, class_transformer_1.Type)(() => PostInfo),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", PostInfo)
], CommentResponseDto.prototype, "post", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)((params) => params.obj.user_id),
    (0, class_transformer_1.Type)(() => UserInfo),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", UserInfo)
], CommentResponseDto.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CommentResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], CommentResponseDto.prototype, "updatedAt", void 0);
exports.CommentResponseDto = CommentResponseDto;
//# sourceMappingURL=comment-response.dto.js.map