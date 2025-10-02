"use client"

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
    <div className="container px-4 mx-auto" id="posts">
      <div className="flex overflow-x-auto gap-4">
        <Button
          variant="outline"
          
          onClick={() => {
            selectCategory("")
          }}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.slug}
            variant="outline"
            className={currentCategory === category.slug ? "bg-primary text-white" : ""}
            onClick={() => {
              selectCategory(category.slug);
            }}
          >
            {category.title}
          </Button>
        ))}
      </div>    
      {posts.length > 0 ? (
      <div className="grid mt-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        )) }
      </div>
      ) : (
        <div className="text-center font-bold text-2xl w-full h-48 flex items-center justify-center  text-gray-500">
          {"No posts found :("}
        </div>
      )}
    </div>
  );
};

export default TabsContainer;
