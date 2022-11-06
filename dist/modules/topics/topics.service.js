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
exports.TopicService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const topics_schema_1 = require("./topics.schema");
let TopicService = class TopicService {
    constructor(topicModel) {
        this.topicModel = topicModel;
    }
    async findAll() {
        const result = this.topicModel.find().exec();
        return result;
    }
    async findOne(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException('Topic not found');
        const topic = await this.topicModel.findOne({ _id: id }).exec();
        if (!topic)
            throw new common_1.NotFoundException('Topic not found');
        return topic;
    }
    async create(body) {
        const newPost = new this.topicModel(body);
        await newPost.save();
        return { message: 'Create success' };
    }
    async update(id, body) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException('topic not found');
        const topic = await this.topicModel.findByIdAndUpdate(id, body);
        if (!topic)
            throw new common_1.NotFoundException('topic not found');
        return { message: 'Update Success' };
    }
    async delete(id) {
        if (!mongoose_2.default.Types.ObjectId.isValid(id))
            throw new common_1.NotFoundException('topic not found');
        const topic = await this.topicModel.findById(id);
        if (!topic)
            throw new common_1.NotFoundException('topic not found');
        await topic.delete();
        return {
            message: 'Delete Success',
        };
    }
};
TopicService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(topics_schema_1.Topic.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TopicService);
exports.TopicService = TopicService;
//# sourceMappingURL=topics.service.js.map