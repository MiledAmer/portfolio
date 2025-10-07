import { type Post } from "@/types/Post";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { type ImageValue, urlFor } from "@/sanity/sanity-utils";
import Link from "next/link";
import ImageModal from "./image-modal";

export const ptComponents = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return (
        <ImageModal
          src={urlFor(value).url()}
          alt={value.alt ?? ""}
          className="object-contain"
        />
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
      <p className="my-4 leading-7 text-justify">{children}</p>
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
              {format(data._createdAt, "MMMM d, yyyy, h:mm a")}
            </time>
          </span>
          <span className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-400"></span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {data.readTime} min read
          </span>
        </div>
      </div>
      <div className="mt-6">
        {/* @ts-expect-error hello */}
        <PortableText value={data.body} components={ptComponents} />
      </div>
    </article>
  );
}
