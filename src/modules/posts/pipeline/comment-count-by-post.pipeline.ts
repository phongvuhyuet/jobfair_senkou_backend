import { PipelineStage } from 'mongoose';

const commentCountPipeline: PipelineStage[] = [
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
export default commentCountPipeline;
