import Image from "next/image";
import { type Post } from "@/types/Post";

export default function ArticleCard({ post }: { post: Partial<Post> }) {
  return (
    <article className="w-full">
      <div className="mb-5 h-48 w-full overflow-hidden rounded-lg">
        <a href={`/blog/${post.slug}`}>
          <Image
            src={post.mainImage ?? ""}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt={post.title ?? "Article image"}
            quality={100}
            placeholder="blur"
            blurDataURL={post.mainImage ?? ""}
          />
        </a>
      </div>
      <h2 className="mb-2 leading-tight font-bold text-gray-900 md:text-xl dark:text-white">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h2>
      <p className="mb-4 line-clamp-3 text-sm text-gray-500 md:text-base dark:text-gray-400">
        {post.description}
      </p>
      <a
        href={`/blog/${post.slug}`}
        className="text-primary-600 dark:text-primary-500 inline-flex items-center text-sm font-medium underline underline-offset-4 hover:no-underline md:text-base"
      >
        Read in {post.readTime} minutes
      </a>
    </article>
  );
}
