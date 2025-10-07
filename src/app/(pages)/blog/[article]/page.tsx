import ArticleHeader from "./_components/ArticleHeader";
import ArticleContent from "./_components/ArticleContent";
import ArticleSideBar from "./_components/ArticleSideBar";
import { getLatestPosts, getNextPost, getPost } from "@/sanity/sanity-utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default async function HomePage({ params }: { params: Promise<{ article: string }> }) {
  const slug = (await params).article;
  const data = await getPost(slug);
  const nextPost = await getNextPost(slug);
  const latestPosts = await getLatestPosts();
  return (
    <>
      <main className="pb-16 antialiased lg:pb-24">
      <div className="absolute top-6 left-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-violet-600 transition-colors duration-200 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back 
          </Link>
        </div>
        <ArticleHeader
          title={data.title}
          backgroundImageUrl={data.mainImage}
          categories={data.categories}
          description={data.description}
        />
        <div className="relative z-20 -m-36 mx-0 flex max-w-screen-xl justify-between rounded bg-white p-6 xl:-m-32 xl:mx-auto xl:p-9 dark:bg-gray-800">
          <ArticleContent data={data} />
          <ArticleSideBar nextPost={nextPost} latestPosts={latestPosts} />
        </div>
      </main>
    </>
  );
}
