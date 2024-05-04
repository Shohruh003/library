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
  image: undefined | File | string | null;
  author: string;
  published: number;
  pages: number;
}
