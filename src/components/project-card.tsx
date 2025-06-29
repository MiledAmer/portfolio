"use client";
import type { Project } from "@/types";
import {
  Laravel,
  MySQL,
  NextJS,
  PostgreSQL,
  Sanity,
  TypeScript,
  VueJS,
} from "./tech-icons";
import { Cpu } from "lucide-react";
import { MagicCard } from "./magicui/magic-card";
import { useTheme } from "next-themes";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const typeColors = {
  Professional:
    "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
  Freelance:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

const techIcons: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; color: string }
> = {
  "Vue.js": { icon: VueJS, color: "text-green-500" },
  "Next.js": { icon: NextJS, color: "text-black dark:text-white" },
  Laravel: { icon: Laravel, color: "text-red-500" },
  TypeScript: { icon: TypeScript, color: "text-blue-600" },
  PostgreSQL: { icon: PostgreSQL, color: "text-blue-700" },
  mySQL: { icon: MySQL, color: "text-yellow-600" },
  sanity: { icon: Sanity, color: "text-purple-600" },
};

export default function ProjectCard({ project }: { project: Project }) {
  const { resolvedTheme } = useTheme();
  return (
    <Card className="group rounded-xl border-none bg-white/80 p-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-violet-900/50">
      <MagicCard
        gradientColor={resolvedTheme === "dark" ? "#262626" : "#D9D9D955"}
        className="h-full p-6"
      >
        <CardHeader>
          <CardTitle>
            <div className="mb-4 flex items-start justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${typeColors[project.type]}`}
              >
                {project.type}
              </span>
            </div>

            {/* Project Name */}
            <h3 className="mb-3 text-xl font-bold text-violet-900 transition-colors group-hover:text-violet-700 dark:text-violet-100 dark:group-hover:text-violet-200">
              {project.name}
            </h3>

            {/* Technologies - moved here */}
            <div className="mb-4 flex flex-wrap gap-3 ">
              {project.technologies.map((tech, techIndex) => {
                const techConfig = techIcons[tech] ?? {
                  icon: Cpu,
                  color: "text-gray-500",
                };
                const IconComponent = techConfig.icon;
                return (
                  <div
                    key={techIndex}
                    className="group/tech flex items-center gap-1 transition-transform duration-200 hover:scale-110"
                    title={tech}
                  >
                    <IconComponent
                      className={`h-5 w-5 ${techConfig.color} group-hover/tech:animate-pulse`}
                    />
                    <span className="absolute -bottom-6 left-1/2 z-10 -translate-x-1/2 transform rounded bg-violet-900 px-2 py-1 text-xs font-medium whitespace-nowrap text-violet-100  opacity-0 transition-opacity duration-200 group-hover/tech:opacity-100 dark:bg-violet-100 dark:text-violet-900">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardTitle>
        </CardHeader>
        <CardDescription>
          {/* Description */}
          <p className="mb-4 text-sm leading-relaxed text-violet-700 dark:text-violet-300">
            {project.description}
          </p>

          {/* Metrics */}
          {project.metrics && (
            <div className="mb-4">
              <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-600 dark:bg-violet-800 dark:text-violet-400">
                {project.metrics}
              </span>
            </div>
          )}
        </CardDescription>
      </MagicCard>
    </Card>
  );
}
