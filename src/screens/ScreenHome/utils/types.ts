export interface Image {
  id: number;
  previewURL: string;
  tags: string;
  views: number;
  likes: number;
  downloads: number;
}
export interface ImageStateArray {
  images: Image[];
  loading: boolean;
  error: string | null;
}

export interface ImageCardProps {
  item: Image;
}
export interface HeaderProps {
  userName?: string;
}