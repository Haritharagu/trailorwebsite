
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  category: string;
  title: string;
}

export interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
