import { type Post } from "@/types/Post";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { type ImageValue, urlFor } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const ptComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <div className="relative my-6 h-96 w-full">
          <Image
            alt={value.alt ?? ""}
            loading="lazy"
            src={urlFor(value)
              .width(800)
              .height(384)
              .fit("max")
              .auto("format")
              .url()}
            fill
            className="object-contain"
            quality={90}
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="my-4 text-4xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="my-4 text-3xl font-semibold tracking-tight">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="my-4 text-2xl font-medium tracking-tight">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="my-4 text-xl font-medium tracking-tight">{children}</h4>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="my-6 border-l-4 border-gray-200 pl-4 text-gray-600 italic dark:border-gray-700 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="my-4 leading-7">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="my-6 ml-6 list-disc space-y-2">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="leading-7">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value: { href: string };
    }) => {
      const rel = !value.href.startsWith("/")
        ? "noopener noreferrer"
        : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="decoration-primary hover:text-primary underline underline-offset-4 transition-colors"
        >
          {children}
        </Link>
      );
    },
  },
};

export default function ArticleContent({ data }: { data: Post }) {
  return (
    <article className="format format-sm sm:format-base lg:format-lg format-blue dark:format-invert w-full max-w-none xl:w-[828px]">
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <div className="mb-2 flex items-center space-x-3 text-base text-gray-500 lg:mb-0 dark:text-gray-400">
          <span>
            By{" "}
            <a
              href="#"
              className="font-semibold text-gray-900 no-underline hover:underline dark:text-white"
            >
              {data.author.name}
            </a>
          </span>
          <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-400"></span>
          <span>
            <time
              className="text-xs font-normal text-gray-500 uppercase dark:text-gray-400"
              dateTime={data._createdAt.toString()}
              title={data._createdAt.toString()}
            >
              {/* August 3, 2022, 2:20am EDT */}
              {format(data._createdAt, "MMMM d, yyyy, h:mm a")}
            </time>
          </span>
          <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-400"></span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {data.readTime} min read
          </span>
        </div>
        <aside aria-label="Share social media">
          <div className="not-format">
            <a
              data-tooltip-target="tooltip-facebook"
              className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-50 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              href={`https://www.facebook.com/sharer/sharer.php?u=${siteUrl}/blog/${data.slug}`}
              target="_blank"
            >
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div
              id="tooltip-facebook"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
              Share on Facebook
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

            <a
              data-tooltip-target="tooltip-twitter"
              className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-50 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              href={`https://www.twitter.com/share?url=${siteUrl}/blog/${data.slug}`}
              target="_blank"
            >
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                />
              </svg>
            </a>
            <div
              id="tooltip-twitter"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
              Share on Twitter
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

            <a
              data-tooltip-target="tooltip-reddit"
              className="inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-50 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              href={`https://www.reddit.com/submit?url=${siteUrl}/blog/${data.slug}`}
              target="_blank"
            >
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_13676_82300)">
                  <path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" />
                  <path
                    d="M15.0004 8.99997C15.0004 8.27365 14.411 7.68418 13.6846 7.68418C13.3267 7.68418 13.011 7.82102 12.7794 8.0526C11.8846 7.41049 10.6425 6.98944 9.27412 6.93681L9.87412 4.12628L11.8215 4.53681C11.8425 5.03155 12.2531 5.43155 12.7583 5.43155C13.2741 5.43155 13.6952 5.01049 13.6952 4.4947C13.6952 3.97891 13.2741 3.55786 12.7583 3.55786C12.3899 3.55786 12.0741 3.76839 11.9267 4.08418L9.7478 3.62102C9.68464 3.61049 9.62148 3.62102 9.56885 3.6526C9.51622 3.68418 9.48464 3.73681 9.46359 3.79997L8.80043 6.93681C7.40043 6.97891 6.1478 7.38944 5.24254 8.0526C5.01096 7.83155 4.68464 7.68418 4.33727 7.68418C3.61096 7.68418 3.02148 8.27365 3.02148 8.99997C3.02148 9.53681 3.33727 9.98944 3.80043 10.2C3.77938 10.3263 3.76885 10.4631 3.76885 10.6C3.76885 12.621 6.11622 14.2526 9.02149 14.2526C11.9267 14.2526 14.2741 12.621 14.2741 10.6C14.2741 10.4631 14.2636 10.3368 14.2425 10.2105C14.6741 9.99997 15.0004 9.53681 15.0004 8.99997ZM6.00043 9.93681C6.00043 9.42102 6.42148 8.99997 6.93727 8.99997C7.45306 8.99997 7.87412 9.42102 7.87412 9.93681C7.87412 10.4526 7.45306 10.8737 6.93727 10.8737C6.42148 10.8737 6.00043 10.4526 6.00043 9.93681ZM11.232 12.4105C10.5899 13.0526 9.36885 13.0947 9.01096 13.0947C8.65306 13.0947 7.42148 13.0421 6.7899 12.4105C6.69517 12.3158 6.69517 12.1579 6.7899 12.0631C6.88464 11.9684 7.04254 11.9684 7.13727 12.0631C7.53727 12.4631 8.40043 12.6105 9.02149 12.6105C9.64254 12.6105 10.4952 12.4631 10.9057 12.0631C11.0004 11.9684 11.1583 11.9684 11.2531 12.0631C11.3267 12.1684 11.3267 12.3158 11.232 12.4105ZM11.0636 10.8737C10.5478 10.8737 10.1267 10.4526 10.1267 9.93681C10.1267 9.42102 10.5478 8.99997 11.0636 8.99997C11.5794 8.99997 12.0004 9.42102 12.0004 9.93681C12.0004 10.4526 11.5794 10.8737 11.0636 10.8737Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_13676_82300">
                    <rect width="18" height="18" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <div
              id="tooltip-reddit"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
              Post on Reddit
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

            <div
              id="tooltip-save"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
              Save this article
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </aside>
      </div>
      <div className="mt-6">
        {/* @ts-expect-error hello */}
        <PortableText value={data.body} components={ptComponents} />
      </div>
    </article>
  );
}
