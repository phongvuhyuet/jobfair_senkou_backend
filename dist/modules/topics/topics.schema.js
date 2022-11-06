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
exports.TopicSchema = exports.Topic = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const MongooseDelete = require("mongoose-delete");
let Topic = class Topic {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Topic.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Topic.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Topic.prototype, "updatedAt", void 0);
Topic = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Topic);
exports.Topic = Topic;
exports.TopicSchema = mongoose_1.SchemaFactory.createForClass(Topic).plugin(MongooseDelete, { overrideMethods: 'all' });
//# sourceMappingURL=topics.schema.js.map