export interface ImageState {
    images: any[];
    loading: boolean;
    error: string | null;
  }

 export interface ImageCardProps {
    item: {
        id:number;
      previewURL: string;
      tags: string;
      views: number;
      likes: number;
    };
  }
  export interface Image {
    id: number;
    previewURL: string;
    tags: string;
    views: number;
    likes: number;
  }
  export interface HeaderProps {
    userName: string | undefined;
  }