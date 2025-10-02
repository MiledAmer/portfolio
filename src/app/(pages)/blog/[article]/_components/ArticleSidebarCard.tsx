import Image from "next/image";
import { type Post } from "types/Post";

export default function ArticleCard({ post }: { post: Partial<Post> }) {
  return (
    <article className="w-full">
      <div className="mb-3 w-full overflow-hidden rounded-lg">
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
      <h4 className="mb-2 text-lg font-bold capitalize leading-tight text-gray-900 dark:text-white">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h4>
      <p className="mb-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
        {post.description}
      </p>
      <a
        href={`/blog/${post.slug}`}
        className="text-primary-600 *:dark:text-primary-500 inline-flex items-center text-sm font-medium underline underline-offset-4 hover:no-underline"
      >
        Read in {post.readTime} minutes
      </a>
    </article>
  );
}
