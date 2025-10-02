import { Category } from "types/Category";
import ArticleCard from "../../../../../components/ArticleCard";
import { getRelatedPosts } from "~/sanity/sanity-utils";

export default async function RelatedArticles({
  categories,
  currentId,
}: {
  categories: Partial<Category[]>;
  currentId: string;
}) {
  const categoryIds = categories.map((category: any) => category._id);
  const relatedPosts = await getRelatedPosts(categoryIds, currentId);

  return (
    <aside
      aria-label="Related articles"
      className="bg-white py-8 dark:bg-gray-900 lg:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white lg:mb-8">
          Related articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          {relatedPosts &&
            relatedPosts.map((post) => <ArticleCard post={post} />)}
        </div>
      </div>
    </aside>
  );
}
