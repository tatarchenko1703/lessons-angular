export interface IBlog {
    id: number;
    userId: number;
    postedBy: string;
    topic: string;
    msgdate: Date;
    message: string;
}