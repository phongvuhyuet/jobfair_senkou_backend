import { PipelineStage } from 'mongoose';

const pipeline: PipelineStage[] = [
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
export default pipeline;
