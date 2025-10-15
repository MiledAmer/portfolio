import { groq } from "next-sanity";
import { type Post } from "@/types/Post";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { type ImageUrlBuilder } from "sanity";
import { type Category } from "@/types/Category";
import { type Contact } from "@/types/Contact";

export async function getPostsWithoutDetails(
  category?: string,
): Promise<Partial<Post>[]> {
  let posts: Partial<Post>[] = [];

  if (category) {
    posts = await client.fetch(
      groq`*[_type == "post" && $category in categories[]->slug.current]{
        _id, 
        _createdAt, 
        title,
        description,
        readTime,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "categories": categories[]->{
          _id, 
          title, 
          "slug": slug.current
        }
      }`,
      { category },
    );
  } else {
    posts = await client.fetch(
      groq`*[_type == "post"]{
        _id, 
        _createdAt, 
        readTime,
        title,
        description,
        "slug": slug.current,
        "mainImage": mainImage.asset->url,
        "categories": categories[]->{
          _id, 
          title, 
          "slug": slug.current
        }
      }`,
    );
  }

  return posts ?? [];
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(
    groq`*[_type =="post"  && slug.current == $slug][0]{
      _id, 
      _createdAt, 
      title,
      description,
      readTime,
      "author": {
        "name": author->name, 
        "image": author->image.asset->url
      },
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      categories[]->{_id, title,"slug":slug.current},
      publishedAt,
      body
    }`,
    { slug },
  );
}
export const getNextPost = async (
  slug: string,
): Promise<Partial<Post> | null> => {
  const post = await getPost(slug);
  const nextPost = await client.fetch<{ slug: string } | null>(
    groq`*[_type == "post" && _createdAt > $publishedAt] | order(_createdAt asc)[0]{
      "slug": slug.current,
      title,
      "mainImage": mainImage.asset->url,
      description,
      "categories": categories[]->{
        _id, 
        title, 
        "slug": slug.current
      },
      readTime
    }`,
    { publishedAt: post.publishedAt },
  );
  return nextPost;
};

export async function getRelatedPosts(
  categoryIds: string[],
  currentPostId: string,
): Promise<Partial<Post>[]> {
  return await client.fetch(
    groq`*[_type == "post" && _id != $currentPostId && count(categories[@._ref in $categoryIds]) > 0] | order(_createdAt desc)[0...3]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt,
      readTime
    }`,
    { categoryIds, currentPostId },
  );
}

export async function getLatestPosts(limit = 3): Promise<Partial<Post>[]> {
  return await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt,
      readTime,
      description

    }`,
    { limit },
  );
}

export async function getCategories(): Promise<Category[]> {
  return await client.fetch(
    groq`*[_type == "category"] {
      title,
      "slug": slug.current,
    }`,
  );
}

export async function createMessage(data: Contact): Promise<Contact> {
  try {
    const document = {
      _type: "message",
      ...data,
    };

    const response: Contact = await client.create<Contact>(document);
    return response;
  } catch (error) {
    console.error("Error creating message:", (error as Error).message);
    throw error;
  }
}

// const builder: ImageUrlBuilder = imageUrlBuilder(client);

// eslint-disable-next-line
export function urlFor(source: any): ImageUrlBuilder {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return imageUrlBuilder(client).image(source);
}

export interface ImageValue {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}
