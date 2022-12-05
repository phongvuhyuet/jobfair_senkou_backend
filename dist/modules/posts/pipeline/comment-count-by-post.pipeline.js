"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commentCountPipeline = [
    {
        $match: {
            deleted: false,
        },
    },
    {
        $group: {
            _id: '$post_id',
            countPost: {
                $sum: 1,
            },
        },
    },
    {
        $sort: {
            countPost: -1,
        },
    },
];
exports.default = commentCountPipeline;
//# sourceMappingURL=comment-count-by-post.pipeline.js.map