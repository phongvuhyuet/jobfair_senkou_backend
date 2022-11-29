"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeline = [
    {
        $lookup: {
            from: 'posts',
            localField: '_id',
            foreignField: 'topic_id',
            as: 'posts',
        },
    },
    {
        $unwind: {
            path: '$posts',
            preserveNullAndEmptyArrays: true,
        },
    },
    {
        $match: {
            ['posts.deleted']: false,
        },
    },
    {
        $group: {
            _id: '$_id',
            createdAt: {
                $first: '$createdAt',
            },
            updatedAt: {
                $first: '$updatedAt',
            },
            name: {
                $first: '$name',
            },
            countPost: {
                $sum: {
                    $cond: [
                        {
                            $lte: ['$posts', null],
                        },
                        0,
                        1,
                    ],
                },
            },
        },
    },
    {
        $sort: {
            countPost: -1,
        },
    },
];
exports.default = pipeline;
//# sourceMappingURL=topic-with-post-count.pipeline.js.map