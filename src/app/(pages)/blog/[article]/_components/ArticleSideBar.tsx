import { format } from "date-fns";
import { Post } from "types/Post";
import ArticleCard from "./ArticleSidebarCard";
import { ArrowRight } from "lucide-react";

export default async function ArticleSideBar({
  nextPost,
  latestPosts,
}: {
  nextPost: Partial<Post> | null;
  latestPosts: Partial<Post>[];
}) {
  return (
    <aside className="hidden xl:block" aria-labelledby="sidebar-label">
      <div className="sticky top-6 xl:w-[336px]">
        <h3 id="sidebar-label" className="sr-only">
          Sidebar
        </h3>
        {nextPost && (
          <div className="mb-8">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-gray-900 dark:text-white">
              Next Posts
            </h3>
            <ArticleCard post={nextPost} />
          </div>
        )}
        <div className="mb-12">
          <h4 className="mb-4 text-sm font-bold uppercase text-gray-900 dark:text-white">
            Latest news
          </h4>
          <div className="flex flex-col gap-4">
            {latestPosts?.map((post) => (
              <ArticleCard key={post._id} post={post} />
            ))}
          </div>
        </div>
        <div>
          <a
            href="#"
            className="mb-3 flex h-48 w-full items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            <svg
              aria-hidden="true"
              className="h-8 w-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            Students and Teachers, save up to 60% on Flowbite Creative Cloud.
          </p>
          <p className="text-xs uppercase text-gray-400 dark:text-gray-500">
            Ads placeholder
          </p>
        </div>
      </div>
    </aside>
  );
}
