"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const topics_controller_1 = require("./topics.controller");
const topics_schema_1 = require("./topics.schema");
const topics_service_1 = require("./topics.service");
let TopicsModule = class TopicsModule {
};
TopicsModule = __decorate([
    (0, common_1.Module)({
        controllers: [topics_controller_1.TopicController],
        providers: [topics_service_1.TopicService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: topics_schema_1.Topic.name, schema: topics_schema_1.TopicSchema }]),
        ],
    })
], TopicsModule);
exports.TopicsModule = TopicsModule;
//# sourceMappingURL=topics.module.js.map