export interface IFormUsers {
  id: string;
  name: string;
  email: string;
  key: string;
  secret: string;
}

export interface IFormBook {
  id: string;
  title: string;
  author: string;
  image: File | string | null;
  published: number;
  pages: number;
}
