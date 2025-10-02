import { type Category } from "@/types/Category";
import ArticleCard from "./ArticleSidebarCard";
import { getRelatedPosts } from "@/sanity/sanity-utils";

export default async function RelatedArticles({
  categories,
  currentId,
}: {
  categories: Partial<Category>[];
  currentId: string;
}) {
  const categoryIds = categories
    .map((category) => category._id)
    .filter((id): id is string => id !== undefined);
  const relatedPosts = await getRelatedPosts(categoryIds, currentId);

  return (
    <aside aria-label="Related articles">
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 lg:mb-8 dark:text-white">
          Related articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          {relatedPosts?.map((post) => (
            <ArticleCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </aside>
  );
}
