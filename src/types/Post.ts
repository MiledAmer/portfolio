import type { Author } from "./Author";
import type { Category } from "./Category";

export type Post = {
  _id: string;
  _type: "post";
  title: string;
  description: string; 
  _createdAt: Date;
  slug: string;
  readTime: number;
  author: Partial<Author>; 
  mainImage: string; 
  categories: Category[]; 
  publishedAt?: string; 
  body: BlockContent[]; 
};

// BlockContent Type representing Sanity's rich text
export type BlockContent = {
  _key: string;
  _type: "block";
  style?: "normal";
  children: Array<{
    _key: string;
    _type: string;
    text: string;
    marks?: string[];
  }>;
};
