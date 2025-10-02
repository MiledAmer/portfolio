import { getCategories, getPostsWithoutDetails } from "@/sanity/sanity-utils";
import { type Post } from "@/types/Post";
import Hero from "@/components/blog/Hero";
import TabsContainer from "@/components/blog/TabsContainer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
      <div className="absolute top-6 left-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-violet-600 transition-colors duration-200 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
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
