export type PostType = {
  date?: string;
  description?: string;
  image?: string;
  slug: string;
  title: string;
  name: string;
};

export interface IPost {
  slug: string;
  date: string;
  thumbnail: string;
  title: string;
  description: string;
  prerequisites: string[];
  stacks: string[];
  writer: string;
  name: string;
}
