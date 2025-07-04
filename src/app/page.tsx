import { FloatingObjects } from "@/components/floating-objects";
import { Meteors } from "@/components/magicui/meteors";
import { ThemeToggle } from "@/components/theme-toggle";
import { getPersonalInfo } from "@/lib/portfolio-data";

export default function HomePage() {
  const personalInfo = getPersonalInfo();
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 to-purple-100 px-4 dark:from-violet-950 dark:to-purple-950">
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      <Meteors number={30} />

      <div className="z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 bg-clip-text text-6xl font-bold text-transparent md:text-8xl dark:from-violet-200 dark:via-purple-300 dark:to-indigo-200">
          {personalInfo.name}
        </h1>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-violet-700 md:text-2xl dark:text-violet-300">
          {personalInfo.title}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="h-2 w-2 animate-pulse rounded-full bg-violet-800 dark:bg-violet-300"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-purple-600 delay-75 dark:bg-purple-400"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-700 delay-150 dark:bg-indigo-300"></div>
        </div>
      </div>

      <FloatingObjects />
    </div>
  );
}
