import type React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { getProjects } from "@/lib/portfolio-data";


export default function Projects() {
  const projects = getProjects();
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 px-4 py-12 dark:from-violet-950 dark:to-purple-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-violet-600 transition-colors duration-200 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="pb-2 mb-4 bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 bg-clip-text text-4xl font-bold text-transparent md:text-6xl dark:from-violet-200 dark:via-purple-300 dark:to-indigo-200">
            My Projects
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-violet-700 dark:text-violet-300">
            A collection of projects I&apos;ve built and contributed to, ranging
            from enterprise CRM systems to SaaS platforms.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard project={project}  key={index}/>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="rounded-xl bg-white/60 p-6 text-center backdrop-blur-sm dark:bg-violet-900/30">
            <div className="text-3xl font-bold text-violet-900 dark:text-violet-200">
              7+
            </div>
            <div className="text-violet-700 dark:text-violet-400">
              Projects Delivered
            </div>
          </div>
          <div className="rounded-xl bg-white/60 p-6 text-center backdrop-blur-sm dark:bg-violet-900/30">
            <div className="text-3xl font-bold text-violet-900 dark:text-violet-200">
              15K+
            </div>
            <div className="text-violet-700 dark:text-violet-400">
              Users Reached
            </div>
          </div>
          <div className="rounded-xl bg-white/60 p-6 text-center backdrop-blur-sm dark:bg-violet-900/30">
            <div className="text-3xl font-bold text-violet-900 dark:text-violet-200">
              70%
            </div>
            <div className="text-violet-700 dark:text-violet-400">
              Performance Boost
            </div>
          </div>
          <div className="rounded-xl bg-white/60 p-6 text-center backdrop-blur-sm dark:bg-violet-900/30">
            <div className="text-3xl font-bold text-violet-900 dark:text-violet-200">
              2+
            </div>
            <div className="text-violet-700 dark:text-violet-400">
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
