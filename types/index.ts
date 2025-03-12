export interface ReviewProps {
    id: number;
    img: string;
    username: string;
    stars: number;
    createdAt: string,
    content: string;
    images?: string[];
}