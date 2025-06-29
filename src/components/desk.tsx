"use client";

import Link from "next/link";
import type React from "react";

import { useState } from "react";

interface DeskItemProps {
  children: React.ReactNode;
  label: string;
  href: string;
  className?: string;
  download?: boolean;
}

function DeskItem({
  children,
  label,
  href,
  className = "",
  download = false,
}: DeskItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative">
      {download ? (
        <a
          download
          href="/miled_resume.pdf"
          className={`block cursor-pointer transition-all duration-300 ease-out ${className}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          className={`block cursor-pointer transition-all duration-300 ease-out ${className}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {children}
        </Link>
      )}

      {/* Tooltip */}
      <div
        className={`absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-md bg-violet-900 px-2 py-1 text-xs whitespace-nowrap text-violet-100 transition-all duration-200 dark:bg-violet-100 dark:text-violet-900 ${
          isHovered
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {label}
        <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-4 border-r-4 border-l-4 border-transparent border-t-violet-900 dark:border-t-violet-100"></div>
      </div>
    </div>
  );
}

export function Desk() {
  return (
    <div className="absolute bottom-0 left-1/2 w-full max-w-4xl -translate-x-1/2 transform">
      {/* Desk Surface */}
      <div className="relative">
        {/* Desk Top */}
        <div className="perspective-1000 rotateX-5 h-4 transform rounded-t-lg bg-gradient-to-r from-violet-200 via-purple-100 to-violet-200 shadow-lg dark:from-violet-800 dark:via-purple-700 dark:to-violet-800"></div>

        {/* Desk Front */}
        <div className="h-16 bg-gradient-to-b from-violet-300 to-purple-400 shadow-xl dark:from-violet-700 dark:to-purple-900"></div>

        {/* Desk Items */}
        <div className="absolute -top-8 left-8 flex items-end space-x-6">
          {/* Laptop */}
          <DeskItem
            label="Projects"
            href="/projects"
            className="hover:-translate-y-2 hover:scale-110"
          >
            <div className="relative">
              <div className="h-10 w-16 origin-bottom -rotate-12 transform rounded-t-sm bg-violet-900 transition-all duration-300 group-hover:rotate-0 group-hover:shadow-lg group-hover:shadow-violet-500/30 dark:bg-violet-950"></div>
              <div className="h-1 w-16 rounded-b-sm bg-violet-700 transition-all duration-300 dark:bg-violet-800"></div>
              <div className="absolute top-1 left-1 h-8 w-14 rounded-sm bg-gradient-to-br from-violet-500 to-purple-600 opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-inner dark:from-violet-400 dark:to-purple-500"></div>
              {/* Screen glow effect */}
              <div className="absolute top-1 left-1 h-8 w-14 animate-pulse rounded-sm bg-gradient-to-br from-violet-400 to-purple-500 opacity-0 transition-all duration-300 group-hover:opacity-20"></div>
            </div>
          </DeskItem>

          {/* Coffee Cup */}
          <DeskItem
            label="About"
            href="/about"
            className="hover:-translate-y-1 hover:scale-110"
          >
            <div className="relative">
              <div className="h-8 w-6 rounded-b-full bg-violet-50 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-violet-300/50 dark:bg-violet-100"></div>
              <div className="absolute top-2 -right-1 h-3 w-2 rounded-r-full border-2 border-violet-50 transition-all duration-300 dark:border-violet-100"></div>
              <div className="absolute top-0 left-1 h-1 w-4 rounded-full bg-purple-800 transition-all duration-300 group-hover:bg-purple-600 dark:bg-purple-900"></div>
              {/* Steam animation */}
              <div className="absolute -top-2 left-2 opacity-0 transition-all duration-300 group-hover:opacity-60">
                <div className="h-3 w-0.5 animate-pulse rounded-full bg-violet-300"></div>
              </div>
              <div className="absolute -top-3 left-3 opacity-0 transition-all delay-100 duration-500 group-hover:opacity-40">
                <div className="h-2 w-0.5 animate-pulse rounded-full bg-violet-300"></div>
              </div>
            </div>
          </DeskItem>

          {/* Books */}
          <DeskItem
            label="Resume"
            href="/resume"
            download={true}
            className="hover:-translate-y-2 hover:scale-105"
          >
            <div className="flex transition-all duration-300 group-hover:space-x-1">
              <div className="h-8 w-2 rounded-l-sm bg-violet-600 transition-all duration-300 group-hover:h-9 group-hover:shadow-md group-hover:shadow-violet-500/30 dark:bg-violet-500"></div>
              <div className="h-7 w-2 bg-purple-700 transition-all duration-200 group-hover:h-8 group-hover:shadow-md group-hover:shadow-purple-500/30 dark:bg-purple-600"></div>
              <div className="h-9 w-2 rounded-r-sm bg-indigo-700 transition-all duration-100 group-hover:h-10 group-hover:shadow-md group-hover:shadow-indigo-500/30 dark:bg-indigo-600"></div>
            </div>
          </DeskItem>
        </div>

        {/* Desk Items Right Side */}
        <div className="absolute -top-6 right-8 flex items-end space-x-4">
          {/* Mouse */}
          <DeskItem
            label="Contact"
            href="/contact"
            className="hover:-translate-y-1 hover:scale-110"
          >
            <div className="h-6 w-4 rounded-full bg-violet-800 shadow-sm transition-all duration-300 group-hover:bg-violet-600 group-hover:shadow-lg group-hover:shadow-violet-500/40 dark:bg-violet-700">
              {/* Mouse click indicator */}
              <div className="absolute top-1 left-1/2 h-1 w-1 -translate-x-1/2 transform rounded-full bg-violet-300 opacity-0 transition-all duration-200 group-hover:animate-ping group-hover:opacity-100"></div>
            </div>
          </DeskItem>

          {/* Pen Holder */}
          <DeskItem
            label="Blog"
            href="/blog"
            className="hover:-translate-y-1 hover:scale-105"
          >
            <div className="relative">
              <div className="h-8 w-5 rounded-sm bg-violet-300 transition-all duration-300 group-hover:shadow-md dark:bg-violet-600"></div>
              <div className="absolute -top-2 left-1 h-4 w-1 rounded-full bg-violet-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-12 dark:bg-violet-400"></div>
              <div className="absolute -top-3 left-2 h-5 w-1 rounded-full bg-purple-600 transition-all duration-200 group-hover:-translate-y-1 group-hover:-rotate-6 dark:bg-purple-400"></div>
              <div className="absolute -top-1 left-3 h-3 w-1 rounded-full bg-indigo-600 transition-all duration-100 group-hover:-translate-y-0.5 group-hover:rotate-6 dark:bg-indigo-400"></div>
            </div>
          </DeskItem>
        </div>

        {/* Desk Legs */}
        <div className="absolute bottom-0 left-4 h-12 w-2 bg-violet-400 dark:bg-violet-600"></div>
        <div className="absolute right-4 bottom-0 h-12 w-2 bg-violet-400 dark:bg-violet-600"></div>
      </div>
    </div>
  );
}
