"use client"

import type React from "react"
import { useState } from "react"

interface FloatingObjectProps {
  children: React.ReactNode
  label: string
  href: string
  className?: string
  delay?: number
}

function FloatingObject({ children, label, href, className = "", delay = 0 }: FloatingObjectProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group">
      <a
        href={href}
        className={`block transition-all duration-500 ease-out cursor-pointer ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animation: `float 4s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        {children}
      </a>

      {/* Tooltip */}
      <div
        className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-violet-900 dark:bg-violet-100 text-violet-100 dark:text-violet-900 text-xs rounded-md whitespace-nowrap transition-all duration-300 z-20 ${
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-t-violet-900 dark:border-t-violet-100"></div>
      </div>

      {/* Object Shadow */}
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2 w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3 bg-violet-900/20 dark:bg-violet-100/20 rounded-full blur-sm transition-all duration-300"
        style={{
          animation: `shadowFloat 4s ease-in-out infinite`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  )
}

export function FloatingObjects() {
  return (
    <>
      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
          75% { transform: translateY(-6px) rotate(-1deg); }
        }
        @media (min-width: 768px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-8px) rotate(1deg); }
            50% { transform: translateY(-12px) rotate(0deg); }
            75% { transform: translateY(-8px) rotate(-1deg); }
          }
        }
        @keyframes shadowFloat {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.2; }
          50% { transform: translateX(-50%) scale(0.8); opacity: 0.1; }
        }
        @keyframes screenGlow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes steam {
          0% { transform: translateY(0px) scale(1); opacity: 0.6; }
          50% { transform: translateY(-6px) scale(1.1); opacity: 0.3; }
          100% { transform: translateY(-12px) scale(1.2); opacity: 0; }
        }
        @media (min-width: 768px) {
          @keyframes steam {
            0% { transform: translateY(0px) scale(1); opacity: 0.6; }
            50% { transform: translateY(-8px) scale(1.1); opacity: 0.3; }
            100% { transform: translateY(-16px) scale(1.2); opacity: 0; }
          }
        }
        @keyframes pageFlutter {
          0%, 100% { transform: rotateY(0deg); }
          50% { transform: rotateY(5deg); }
        }
        @keyframes warmGlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
      `}</style>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl px-2 sm:px-4">
        <div className="relative flex justify-center items-end space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-16">
          {/* Projects - Laptop */}
          <FloatingObject
            label="Projects"
            href="/projects"
            delay={0}
            className="hover:scale-105 sm:hover:scale-110 hover:-translate-y-3 sm:hover:-translate-y-4 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Laptop Base */}
              <div className="w-12 h-7 sm:w-14 sm:h-8 md:w-16 md:h-10 bg-gradient-to-b from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-800 rounded-lg shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                {/* Laptop Screen */}
                <div className="absolute -top-6 sm:-top-7 md:-top-8 left-1/2 transform -translate-x-1/2 w-10 h-6 sm:w-12 sm:h-7 md:w-14 md:h-9 bg-gray-800 dark:bg-gray-900 rounded-t-lg border-2 border-gray-700 dark:border-gray-600">
                  {/* Screen Content */}
                  <div
                    className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-600 dark:from-violet-400 dark:to-purple-500 rounded-sm p-0.5 sm:p-1 m-0.5"
                    style={{ animation: "screenGlow 3s ease-in-out infinite" }}
                  >
                    {/* Code Lines */}
                    <div className="space-y-0.5">
                      <div className="w-6 sm:w-8 h-0.5 bg-white/80 rounded"></div>
                      <div className="w-4 sm:w-6 h-0.5 bg-white/60 rounded"></div>
                      <div className="w-7 sm:w-10 h-0.5 bg-white/80 rounded"></div>
                      <div className="w-3 sm:w-4 h-0.5 bg-white/60 rounded"></div>
                    </div>
                  </div>
                </div>
                {/* Keyboard */}
                <div className="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-9 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6 grid grid-cols-6 sm:grid-cols-8 gap-0.5 p-0.5 sm:p-1">
                  {[...Array<number>(12)].map((_, i) => (
                    <div key={i} className="bg-gray-400 dark:bg-gray-500 rounded-sm opacity-80"></div>
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
            className="hover:scale-105 sm:hover:scale-110 hover:-translate-y-3 sm:hover:-translate-y-4 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Coffee Cup */}
              <div className="w-9 h-10 sm:w-10 sm:h-12 md:w-12 md:h-14 bg-gradient-to-b from-purple-200 to-purple-300 dark:from-purple-300 dark:to-purple-400 rounded-b-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl border-2 border-purple-400 dark:border-purple-500">
                {/* Coffee Liquid */}
                <div className="absolute top-1.5 sm:top-2 left-0.5 sm:left-1 right-0.5 sm:right-1 h-6 sm:h-7 md:h-8 bg-gradient-to-b from-purple-700 to-purple-800 dark:from-purple-600 dark:to-purple-700 rounded-b-xl">
                  {/* Coffee Surface */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-purple-600 dark:bg-purple-500 rounded-full opacity-80"></div>
                </div>

                {/* Cup Handle */}
                <div className="absolute right-0 top-3 sm:top-4 w-2 h-3 sm:w-3 sm:h-4 border-2 border-purple-400 dark:border-purple-500 rounded-r-full"></div>

                {/* Steam Animation */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 flex space-x-0.5 sm:space-x-1">
                  <div
                    className="w-0.5 h-4 sm:h-6 bg-gradient-to-t from-gray-400 to-transparent rounded-full opacity-60 animate-pulse"
                    style={{ animation: "steam 2s ease-in-out infinite" }}
                  ></div>
                  <div
                    className="w-0.5 h-3 sm:h-5 bg-gradient-to-t from-gray-400 to-transparent rounded-full opacity-40 animate-pulse"
                    style={{ animation: "steam 2s ease-in-out infinite", animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="w-0.5 h-3 sm:h-4 bg-gradient-to-t from-gray-400 to-transparent rounded-full opacity-50 animate-pulse"
                    style={{ animation: "steam 2s ease-in-out infinite", animationDelay: "0.6s" }}
                  ></div>
                </div>

                {/* Warm Glow */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-purple-400/20 to-transparent rounded-b-2xl"
                  style={{ animation: "warmGlow 3s ease-in-out infinite" }}
                ></div>
              </div>
            </div>
          </FloatingObject>

          {/* Resume - Document */}
          <FloatingObject
            label="Resume"
            href="/resume"
            delay={1.6}
            className="hover:scale-105 sm:hover:scale-110 hover:-translate-y-3 sm:hover:-translate-y-4 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Document */}
              <div className="w-9 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16 bg-white dark:bg-gray-100 rounded-lg shadow-xl border border-gray-200 dark:border-gray-300 transition-all duration-300 group-hover:shadow-2xl">
                {/* Document Header */}
                <div className="p-1.5 sm:p-2 space-y-0.5 sm:space-y-1">
                  <div className="w-6 sm:w-8 h-0.5 sm:h-1 bg-violet-600 rounded"></div>
                  <div className="w-4 sm:w-6 h-0.5 bg-gray-400 rounded"></div>
                  <div className="w-5 sm:w-7 h-0.5 bg-gray-400 rounded"></div>
                </div>
                {/* Document Lines */}
                <div className="px-1.5 sm:px-2 space-y-0.5 sm:space-y-1">
                  <div className="w-full h-0.5 bg-gray-300 rounded"></div>
                  <div className="w-6 sm:w-8 h-0.5 bg-gray-300 rounded"></div>
                  <div className="w-full h-0.5 bg-gray-300 rounded"></div>
                  <div className="w-4 sm:w-6 h-0.5 bg-gray-300 rounded"></div>
                </div>
                {/* Certificate Seal */}
                <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-300 shadow-lg">
                  <div className="absolute inset-0.5 sm:inset-1 bg-yellow-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </FloatingObject>

          {/* Contact - Speech Bubble */}
          <FloatingObject
            label="Contact"
            href="/contact"
            delay={2.4}
            className="hover:scale-105 sm:hover:scale-110 hover:-translate-y-3 sm:hover:-translate-y-4 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Speech Bubble */}
              <div className="w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12 bg-gradient-to-br from-violet-400 to-violet-600 dark:from-violet-500 dark:to-violet-700 rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl relative">
                {/* Bubble Tail */}
                <div className="absolute -bottom-1.5 sm:-bottom-2 left-3 sm:left-4 md:left-5 w-0 h-0 border-l-3 border-r-3 border-t-3 sm:border-l-4 sm:border-r-4 sm:border-t-4 border-transparent border-t-violet-500 dark:border-t-violet-600"></div>
                {/* Message Dots */}
                <div className="flex justify-center items-center h-full space-x-0.5 sm:space-x-1">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-bounce"></div>
                  <div
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                {/* Notification Dot */}
                <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full border-2 border-white animate-pulse">
                  <div className="absolute inset-0.5 bg-red-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </FloatingObject>

          {/* Blog - Open Book */}
          <FloatingObject
            label="Blog"
            href="/blog"
            delay={3.2}
            className="hover:scale-105 sm:hover:scale-110 hover:-translate-y-3 sm:hover:-translate-y-4 md:hover:-translate-y-6"
          >
            <div className="relative">
              {/* Book Base */}
              <div className="w-12 h-9 sm:w-14 sm:h-10 md:w-16 md:h-12 bg-gradient-to-b from-amber-600 to-amber-800 dark:from-amber-500 dark:to-amber-700 rounded-lg shadow-xl transition-all duration-300 group-hover:shadow-2xl">
                {/* Book Pages */}
                <div
                  className="absolute -top-0.5 sm:-top-1 left-0.5 sm:left-1 w-11 h-7 sm:w-12 sm:h-8 md:w-14 md:h-10 bg-white dark:bg-gray-100 rounded-sm shadow-md"
                  style={{ animation: "pageFlutter 4s ease-in-out infinite" }}
                >
                  {/* Page Lines */}
                  <div className="p-1 sm:p-1.5 space-y-0.5">
                    <div className="w-7 sm:w-8 md:w-10 h-0.5 bg-gray-400 rounded"></div>
                    <div className="w-6 sm:w-7 md:w-8 h-0.5 bg-gray-400 rounded"></div>
                    <div className="w-8 sm:w-9 md:w-11 h-0.5 bg-gray-400 rounded"></div>
                    <div className="w-7 sm:w-8 md:w-9 h-0.5 bg-gray-400 rounded"></div>
                    <div className="w-7 sm:w-8 md:w-10 h-0.5 bg-gray-400 rounded"></div>
                  </div>
                </div>
                {/* Book Spine */}
                <div className="absolute left-1/2 top-0 w-0.5 h-full bg-amber-800 dark:bg-amber-600"></div>
                {/* Magical Sparkles */}
                <div className="absolute -top-1.5 sm:-top-2 -right-0.5 sm:-right-1 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-300 rounded-full animate-pulse"></div>
                <div
                  className="absolute -top-0.5 sm:-top-1 left-0 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="absolute top-1.5 sm:top-2 -right-1 sm:-right-2 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-yellow-200 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </FloatingObject>
        </div>

        {/* Mobile Hint */}
        <div className="absolute -top-16 sm:-top-20 left-1/2 transform -translate-x-1/2 md:hidden">
          <div className="bg-violet-900 dark:bg-violet-100 text-violet-100 dark:text-violet-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm animate-bounce">
            Tap objects to navigate
          </div>
        </div>
      </div>
    </>
  )
}
