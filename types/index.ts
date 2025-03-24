export interface ReviewProps {
    id: number;
    img: string;
    username: string;
    stars: number;
    createdAt: string,
    content: string;
    images?: string[];
}
export interface IEditProfile {
  username: string;
  bio: string;
  instagram: string;
  tiktok: string;
}