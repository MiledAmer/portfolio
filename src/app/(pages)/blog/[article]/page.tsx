import ArticleHeader from "./_components/ArticleHeader";
import ArticleContent from "./_components/ArticleContent";
import ArticleSideBar from "./_components/ArticleSideBar";
import { getLatestPosts, getNextPost, getPost } from "@/sanity/sanity-utils";

type propType = {
  article: string;
};

export default async function HomePage({ params }: { params: propType }) {
  const slug = params.article;
  const data = await getPost(slug);
  const nextPost = await getNextPost(slug);
  const latestPosts = await getLatestPosts();
  return (
    <>
      <main className="pb-16 antialiased lg:pb-24">
        <ArticleHeader
          title={data.title}
          backgroundImageUrl={data.mainImage}
          categories={data.categories}
        />
        <div className="relative z-20 -m-36 mx-4 flex max-w-screen-xl justify-between rounded bg-white p-6 xl:-m-32 xl:mx-auto xl:p-9 dark:bg-gray-800">
          <ArticleContent data={data} />
          <ArticleSideBar nextPost={nextPost} latestPosts={latestPosts} />
        </div>
      </main>
    </>
  );
}
