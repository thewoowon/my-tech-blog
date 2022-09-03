export type PostType = {
  date?: string;
  description?: string;
  image?: string;
  slug: string;
  title: string;
  
};


export interface IPost {
  slug:string;
  date:string;
  thumbnail:string;
  title:string;
  description:string;
  prerequisites:string[];
  stacks:string[];
  writer:string;
}

// 추가적으로 기능을 더할 얘정임