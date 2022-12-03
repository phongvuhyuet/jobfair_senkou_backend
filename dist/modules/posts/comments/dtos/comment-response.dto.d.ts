export declare class UserInfo {
    name: string;
    _id: string;
}
export declare class PostInfo {
    title: string;
    _id: string;
}
export declare class CommentResponseDto {
    _id: string;
    content: string;
    post: PostInfo;
    user: UserInfo;
    createdAt: Date;
    updatedAt: Date;
}
