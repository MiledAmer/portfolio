import { getCategories, getPostsWithoutDetails } from "@/sanity/sanity-utils";
import { type Post } from "@/types/Post";
import Hero from "@/components/blog/Hero";
import TabsContainer from "@/components/blog/TabsContainer";

export default async function Blog({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const category = searchParams.category ?? "";
  const posts = (await getPostsWithoutDetails(category)) as Post[];
  const categories = await getCategories();
  return (
    <div className="container mx-auto">
      <Hero />
      <h2 className="mb-6 text-center text-2xl font-bold sm:text-left">
        Latest Blog Posts
      </h2>
      <TabsContainer
        posts={posts}
        categories={categories}
        currentCategory={category}
      />
    </div>
  );
}
