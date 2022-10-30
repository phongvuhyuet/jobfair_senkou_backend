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
exports.UpdatePostDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const posts_schema_1 = require("../posts.schema");
class UpdatePostDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: false, type: () => String }, content: { required: false, type: () => String }, topic_id: { required: false, type: () => String }, user_id: { required: false, type: () => String }, upvote_count: { required: false, type: () => Number, minimum: 0 }, downvote_count: { required: false, type: () => Number, minimum: 0 }, status: { required: false, type: () => Number }, publishedAt: { required: false, type: () => String }, reject_reason: { required: false, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "topic_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ required: false, minimum: 0 }),
    __metadata("design:type", Number)
], UpdatePostDto.prototype, "upvote_count", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    (0, swagger_1.ApiProperty)({ required: false, minimum: 0 }),
    __metadata("design:type", Number)
], UpdatePostDto.prototype, "downvote_count", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(posts_schema_1.PostStatus),
    (0, swagger_1.ApiProperty)({ required: false, enum: posts_schema_1.PostStatus }),
    __metadata("design:type", Number)
], UpdatePostDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "publishedAt", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdatePostDto.prototype, "reject_reason", void 0);
exports.UpdatePostDto = UpdatePostDto;
//# sourceMappingURL=update-post.dto.js.map