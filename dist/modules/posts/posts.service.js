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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const posts_schema_1 = require("./posts.schema");
let PostsService = class PostsService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async findAll() {
        const result = await this.postModel
            .find()
            .populate({
            path: 'user_id',
            select: 'name _id',
        })
            .populate({
            path: 'topic_id',
            select: 'name _id',
        })
            .exec();
        return result;
    }
    async filter(topic_id) {
        const result = await this.postModel
            .find({ topic_id: topic_id })
            .populate({
            path: 'user_id',
            select: 'name _id',
        })
            .populate({
            path: 'topic_id',
            select: 'name _id',
        })
            .exec();
        return result;
    }
    async newestPosts(count) {
        return await this.postModel
            .find({})
            .populate({
            path: 'user_id',
            select: 'name _id',
        })
            .populate({
            path: 'topic_id',
            select: 'name _id',
        })
            .sort({ createdAt: 'desc' })
            .limit(count)
            .exec();
    }
    async findOne(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException('Post not found');
        const post = await this.postModel
            .findOne({ _id: id })
            .populate({
            path: 'user_id',
            select: 'name _id',
        })
            .populate({
            path: 'topic_id',
            select: 'name _id',
        })
            .exec();
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        return post;
    }
    async create(body) {
        const newPost = new this.postModel(body);
        return await newPost.save();
    }
    async update(id, body) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException('Post not found');
        const post = await this.postModel.findByIdAndUpdate(id, body);
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        return { message: 'Update Success' };
    }
    async delete(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException('Post not found');
        const post = await this.postModel.findById(id);
        if (!post)
            throw new common_1.NotFoundException('Post not found');
        await post.delete();
        return {
            message: 'Delete Success',
        };
    }
    async updateAll(body) {
        await this.postModel.updateMany({}, body);
        return { message: 'Update Success' };
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(posts_schema_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map