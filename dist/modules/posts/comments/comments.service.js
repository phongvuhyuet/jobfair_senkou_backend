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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const comments_schema_1 = require("./comments.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CommentsService = class CommentsService {
    constructor(commentModel) {
        this.commentModel = commentModel;
    }
    async create(body) {
        const newComment = new this.commentModel(Object.assign(Object.assign({}, body), { user_id: '6367ca19d8195dbd6c728a0c' }));
        return await newComment.save();
    }
    async update(id, body) {
        const comment = await this.commentModel.findById(id);
        if (!comment)
            throw new common_1.NotFoundException('comment not found');
        console.log(comment.user_id);
        if (comment.user_id.toString() !== '6367ca19d8195dbd6c728a0c') {
            throw new common_1.ForbiddenException('not your comment');
        }
        comment.content = body.content;
        return await comment.save();
    }
    async delete(id) {
        const comment = await this.commentModel.findById(id);
        if (!comment)
            throw new common_1.NotFoundException('comment not found');
        if (comment.user_id.toString() !== '6367ca19d8195dbd6c728a0c') {
            throw new common_1.ForbiddenException('not your comment');
        }
        await comment.delete();
        return {
            message: 'delete success',
        };
    }
    async listByPost(postId) {
        const comments = await this.commentModel
            .find({ post_id: postId })
            .populate({
            path: 'user_id',
            select: 'name _id',
        })
            .populate({
            path: 'post_id',
            select: 'title _id',
        })
            .sort({ createdAt: 'desc' });
        return comments;
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(comments_schema_1.Comment.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map