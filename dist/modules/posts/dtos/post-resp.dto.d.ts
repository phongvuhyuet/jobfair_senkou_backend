export declare class UserInfo {
    name: string;
    _id: string;
}
export declare class TopicInfo {
    name: string;
    _id: string;
}
export declare class PostResponseDto {
    _id: string;
    title: string;
    content: string;
    topic: TopicInfo;
    user: UserInfo;
    upvote_count: number;
    downvote_count: number;
    reject_reason: string;
    publishedAt: Date;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}
