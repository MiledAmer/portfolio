"use client";

import type React from "react";
import { useState } from "react";

interface FloatingObjectProps {
  children: React.ReactNode;
  label: string;
  href: string;
  className?: string;
  delay?: number;
  download?: boolean;
}

function FloatingObject({
  children,
  label,
  href,
  className = "",
  delay = 0,
  download = false,
}: FloatingObjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="group relative">
      <a
        href={href}
        className={`block cursor-pointer transition-all duration-500 ease-out ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animation: `float 4s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
        download={download ? href : undefined}
      >
        {children}
      </a>

      {/* Tooltip */}
      <div
        className={`absolute -top-12 left-1/2 z-20 -translate-x-1/2 transform rounded-md bg-violet-900 px-2 py-1 text-xs whitespace-nowrap text-violet-100 transition-all duration-300 dark:bg-violet-100 dark:text-violet-900 ${
          isHovered
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {label}
        <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-3 border-r-3 border-l-3 border-transparent border-t-violet-900 dark:border-t-violet-100"></div>
      </div>

      {/* Object Shadow */}
      <div
        className="absolute top-full left-1/2 h-2 w-8 -translate-x-1/2 transform rounded-full bg-violet-900/20 blur-sm transition-all duration-300 sm:h-2.5 sm:w-10 md:h-3 md:w-12 dark:bg-violet-100/20"
        style={{
          animation: `shadowFloat 4s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
}

export function FloatingObjects() {
  return (
    <>
      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-6px) rotate(1deg);
          }
          50% {
            transform: translateY(-10px) rotate(0deg);
          }
          75% {
            transform: translateY(-6px) rotate(-1deg);
          }
        }
        @media (min-width: 768px) {
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-8px) rotate(1deg);
            }
            50% {
              transform: translateY(-12px) rotate(0deg);
            }
            75% {
              transform: translateY(-8px) rotate(-1deg);
            }
          }
        }
        @keyframes shadowFloat {
          0%,
          100% {
            transform: translateX(-50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateX(-50%) scale(0.8);
            opacity: 0.1;
          }
        }
        @keyframes screenGlow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes steam {
          0% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-6px) scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-12px) scale(1.2);
            opacity: 0;
          }
        }
        @media (min-width: 768px) {
          @keyframes steam {
            0% {
              transform: translateY(0px) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-8px) scale(1.1);
              opacity: 0.3;
            }
            100% {
              transform: translateY(-16px) scale(1.2);
              opacity: 0;
            }
          }
        }
        @keyframes pageFlutter {
          0%,
          100% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(5deg);
          }
        }
        @keyframes warmGlow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
      `}</style>

      <div className="absolute bottom-4 left-1/2 w-full max-w-sm -translate-x-1/2 transform px-2 sm:bottom-6 sm:max-w-2xl sm:px-4 md:bottom-8 md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        <div className="relative flex items-end justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16">
          {/* Projects - Laptop */}
          <FloatingObject
            label="Projects"
            href="/projects"
            delay={0}
            className="hover:-translate-y-3 hover:scale-105 sm:hover:-translate-y-4 sm:hover:scale-110 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Laptop Base */}
              <div className="h-7 w-12 rounded-lg bg-gradient-to-b from-gray-300 to-gray-500 shadow-xl transition-all duration-300 group-hover:shadow-2xl sm:h-8 sm:w-14 md:h-10 md:w-16 dark:from-gray-600 dark:to-gray-800">
                {/* Laptop Screen */}
                <div className="absolute -top-6 left-1/2 h-6 w-10 -translate-x-1/2 transform rounded-t-lg border-2 border-gray-700 bg-gray-800 sm:-top-7 sm:h-7 sm:w-12 md:-top-8 md:h-9 md:w-14 dark:border-gray-600 dark:bg-gray-900">
                  {/* Screen Content */}
                  <div
                    className="m-0.5 h-full w-full rounded-sm bg-gradient-to-br from-violet-500 to-purple-600 p-0.5 sm:p-1 dark:from-violet-400 dark:to-purple-500"
                    style={{ animation: "screenGlow 3s ease-in-out infinite" }}
                  >
                    {/* Code Lines */}
                    <div className="space-y-0.5">
                      <div className="h-0.5 w-6 rounded bg-white/80 sm:w-8"></div>
                      <div className="h-0.5 w-4 rounded bg-white/60 sm:w-6"></div>
                      <div className="h-0.5 w-7 rounded bg-white/80 sm:w-10"></div>
                      <div className="h-0.5 w-3 rounded bg-white/60 sm:w-4"></div>
                    </div>
                  </div>
                </div>
                {/* Keyboard */}
                <div className="absolute top-1.5 left-1/2 grid h-4 w-9 -translate-x-1/2 transform grid-cols-6 gap-0.5 p-0.5 sm:top-2 sm:h-5 sm:w-10 sm:grid-cols-8 sm:p-1 md:h-6 md:w-12">
                  {[...Array<number>(12)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm bg-gray-400 opacity-80 dark:bg-gray-500"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </FloatingObject>

          {/* About Me - Coffee Cup */}
          <FloatingObject
            label="About"
            href="/about"
            delay={0.8}
            className="hover:-translate-y-3 hover:scale-105 sm:hover:-translate-y-4 sm:hover:scale-110 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Coffee Cup */}
              <div className="h-10 w-9 rounded-b-2xl border-2 border-purple-400 bg-gradient-to-b from-purple-200 to-purple-300 shadow-xl transition-all duration-300 group-hover:shadow-2xl sm:h-12 sm:w-10 md:h-14 md:w-12 dark:border-purple-500 dark:from-purple-300 dark:to-purple-400">
                {/* Coffee Liquid */}
                <div className="absolute top-1.5 right-0.5 left-0.5 h-6 rounded-b-xl bg-gradient-to-b from-purple-700 to-purple-800 sm:top-2 sm:right-1 sm:left-1 sm:h-7 md:h-8 dark:from-purple-600 dark:to-purple-700">
                  {/* Coffee Surface */}
                  <div className="absolute top-0 right-0 left-0 h-0.5 rounded-full bg-purple-600 opacity-80 sm:h-1 dark:bg-purple-500"></div>
                </div>

                {/* Cup Handle */}
                <div className="absolute top-3 right-0 h-3 w-2 rounded-r-full border-2 border-purple-400 sm:top-4 sm:h-4 sm:w-3 dark:border-purple-500"></div>

                {/* Steam Animation */}
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 transform space-x-0.5 sm:-top-4 sm:space-x-1">
                  <div
                    className="h-4 w-0.5 animate-pulse rounded-full bg-gradient-to-t from-gray-400 to-transparent opacity-60 sm:h-6"
                    style={{ animation: "steam 2s ease-in-out infinite" }}
                  ></div>
                  <div
                    className="h-3 w-0.5 animate-pulse rounded-full bg-gradient-to-t from-gray-400 to-transparent opacity-40 sm:h-5"
                    style={{
                      animation: "steam 2s ease-in-out infinite",
                      animationDelay: "0.3s",
                    }}
                  ></div>
                  <div
                    className="h-3 w-0.5 animate-pulse rounded-full bg-gradient-to-t from-gray-400 to-transparent opacity-50 sm:h-4"
                    style={{
                      animation: "steam 2s ease-in-out infinite",
                      animationDelay: "0.6s",
                    }}
                  ></div>
                </div>

                {/* Warm Glow */}
                <div
                  className="absolute inset-0 rounded-b-2xl bg-gradient-to-t from-purple-400/20 to-transparent"
                  style={{ animation: "warmGlow 3s ease-in-out infinite" }}
                ></div>
              </div>
            </div>
          </FloatingObject>

          {/* Resume - Document */}
          <FloatingObject
            download={true} 
            label="Resume"
            href="miled_resume.pdf"
            delay={1.6}
            className="hover:-translate-y-3 hover:scale-105 sm:hover:-translate-y-4 sm:hover:scale-110 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Document */}
              <div className="h-12 w-9 rounded-lg border border-gray-200 bg-white shadow-xl transition-all duration-300 group-hover:shadow-2xl sm:h-14 sm:w-10 md:h-16 md:w-12 dark:border-gray-300 dark:bg-gray-100">
                {/* Document Header */}
                <div className="space-y-0.5 p-1.5 sm:space-y-1 sm:p-2">
                  <div className="h-0.5 w-6 rounded bg-violet-600 sm:h-1 sm:w-8"></div>
                  <div className="h-0.5 w-4 rounded bg-gray-400 sm:w-6"></div>
                  <div className="h-0.5 w-5 rounded bg-gray-400 sm:w-7"></div>
                </div>
                {/* Document Lines */}
                <div className="space-y-0.5 px-1.5 sm:space-y-1 sm:px-2">
                  <div className="h-0.5 w-full rounded bg-gray-300"></div>
                  <div className="h-0.5 w-6 rounded bg-gray-300 sm:w-8"></div>
                  <div className="h-0.5 w-full rounded bg-gray-300"></div>
                  <div className="h-0.5 w-4 rounded bg-gray-300 sm:w-6"></div>
                </div>
                {/* Certificate Seal */}
                <div className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-yellow-300 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg sm:-top-1 sm:-right-1 sm:h-4 sm:w-4">
                  <div className="absolute inset-0.5 rounded-full bg-yellow-200 sm:inset-1"></div>
                </div>
              </div>
            </div>
          </FloatingObject>

          {/* Contact - Speech Bubble */}
          <FloatingObject
            label="Contact"
            href="/contact"
            delay={2.4}
            className="hover:-translate-y-3 hover:scale-105 sm:hover:-translate-y-4 sm:hover:scale-110 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Speech Bubble */}
              <div className="relative h-9 w-12 rounded-2xl bg-gradient-to-br from-violet-400 to-violet-600 shadow-xl transition-all duration-300 group-hover:shadow-2xl sm:h-10 sm:w-14 md:h-12 md:w-16 dark:from-violet-500 dark:to-violet-700">
                {/* Bubble Tail */}
                <div className="absolute -bottom-1.5 left-3 h-0 w-0 border-t-3 border-r-3 border-l-3 border-transparent border-t-violet-500 sm:-bottom-2 sm:left-4 sm:border-t-4 sm:border-r-4 sm:border-l-4 md:left-5 dark:border-t-violet-600"></div>
                {/* Message Dots */}
                <div className="flex h-full items-center justify-center space-x-0.5 sm:space-x-1">
                  <div className="h-1 w-1 animate-bounce rounded-full bg-white sm:h-1.5 sm:w-1.5"></div>
                  <div
                    className="h-1 w-1 animate-bounce rounded-full bg-white sm:h-1.5 sm:w-1.5"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-1 w-1 animate-bounce rounded-full bg-white sm:h-1.5 sm:w-1.5"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                {/* Notification Dot */}
                <div className="absolute -top-0.5 -right-0.5 h-2 w-2 animate-pulse rounded-full border-2 border-white bg-red-500 sm:-top-1 sm:-right-1 sm:h-3 sm:w-3">
                  <div className="absolute inset-0.5 rounded-full bg-red-400"></div>
                </div>
              </div>
            </div>
          </FloatingObject>

          {/* Blog - Open Book */}
          <FloatingObject
            label="Blog"
            href="/blog"
            delay={3.2}
            className="hover:-translate-y-3 hover:scale-105 sm:hover:-translate-y-4 sm:hover:scale-110 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Book Base */}
              <div className="h-9 w-12 rounded-lg bg-gradient-to-b from-amber-600 to-amber-800 shadow-xl transition-all duration-300 group-hover:shadow-2xl sm:h-10 sm:w-14 md:h-12 md:w-16 dark:from-amber-500 dark:to-amber-700">
                {/* Book Pages */}
                <div
                  className="absolute -top-0.5 left-0.5 h-7 w-11 rounded-sm bg-white shadow-md sm:-top-1 sm:left-1 sm:h-8 sm:w-12 md:h-10 md:w-14 dark:bg-gray-100"
                  style={{ animation: "pageFlutter 4s ease-in-out infinite" }}
                >
                  {/* Page Lines */}
                  <div className="space-y-0.5 p-1 sm:p-1.5">
                    <div className="h-0.5 w-7 rounded bg-gray-400 sm:w-8 md:w-10"></div>
                    <div className="h-0.5 w-6 rounded bg-gray-400 sm:w-7 md:w-8"></div>
                    <div className="h-0.5 w-8 rounded bg-gray-400 sm:w-9 md:w-11"></div>
                    <div className="h-0.5 w-7 rounded bg-gray-400 sm:w-8 md:w-9"></div>
                    <div className="h-0.5 w-7 rounded bg-gray-400 sm:w-8 md:w-10"></div>
                  </div>
                </div>
                {/* Book Spine */}
                <div className="absolute top-0 left-1/2 h-full w-0.5 bg-amber-800 dark:bg-amber-600"></div>
                {/* Magical Sparkles */}
                <div className="absolute -top-1.5 -right-0.5 h-0.5 w-0.5 animate-pulse rounded-full bg-yellow-300 sm:-top-2 sm:-right-1 sm:h-1 sm:w-1"></div>
                <div
                  className="absolute -top-0.5 left-0 h-0.5 w-0.5 animate-pulse rounded-full bg-yellow-400 sm:-top-1 sm:h-1 sm:w-1"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1.5 -right-1 h-0.5 w-0.5 animate-pulse rounded-full bg-yellow-200 sm:top-2 sm:-right-2 sm:h-1 sm:w-1"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </FloatingObject>
        </div>

        {/* Mobile Hint */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 transform sm:-top-20 md:hidden">
          <div className="animate-bounce rounded-full bg-violet-900 px-3 py-1.5 text-xs text-violet-100 sm:px-4 sm:py-2 sm:text-sm dark:bg-violet-100 dark:text-violet-900">
            Tap objects to navigate
          </div>
        </div>
      </div>
    </>
  );
}
