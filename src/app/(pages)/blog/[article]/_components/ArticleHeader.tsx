import type { Category } from "@/types/Category";

export default function ArticleHeader({
  title,
  categories,
  backgroundImageUrl,
  description,
}: {
  title: string;
  backgroundImageUrl: string;
  categories: Category[];
  description: string;
}) {
  return (
    <header
      className={`relative h-[460px] w-full bg-cover bg-center bg-no-repeat xl:h-[537px]`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute top-20 left-1/2 mx-auto w-full max-w-screen-xl -translate-x-1/2 px-4 xl:top-1/2 xl:-translate-y-1/2 xl:px-0 ml-5">
        <span className="mb-4 block text-gray-300">
          Published in{" "}
          {categories.map((category) => (
            <a
              href={`/?category=${category.slug}`}
              className="font-semibold text-white hover:underline"
              key={category._id}
            >
              {category.title}
            </a>
          ))}
        </span>
        <h1 className="mb-4 max-w-4xl text-2xl leading-none font-extrabold text-white sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <p className="text-lg font-normal text-gray-300">{description}</p>
      </div>
    </header>
  );
}
