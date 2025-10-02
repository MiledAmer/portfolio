"use client";

import React from "react";
import { type Post } from "@/types/Post";
import { type Category } from "@/types/Category";
import ArticleCard from "./ArticleCard";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const TabsContainer = ({
  posts,
  categories,
  currentCategory,
}: {
  posts: Post[];
  categories: Category[];
  currentCategory: string;
}) => {
  const router = useRouter();
  const selectCategory = (category: string) => {
    router.push(`?category=${category}`);
  };
  return (
    <div className="container mx-auto px-4" id="posts">
      <div className="flex gap-4 overflow-x-auto">
        <Button
          variant="outline"
          onClick={() => {
            selectCategory("");
          }}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.slug}
            variant="outline"
            className={
              currentCategory === category.slug ? "bg-primary text-white" : ""
            }
            onClick={() => {
              selectCategory(category.slug);
            }}
          >
            {category.title}
          </Button>
        ))}
      </div>
      {posts.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex h-48 w-full items-center justify-center text-center text-2xl font-bold text-gray-500">
          {"No posts found :("}
        </div>
      )}
    </div>
  );
};

export default TabsContainer;
