import { Desk } from "@/components/desk";
import { Meteors } from "@/components/magicui/meteors";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 to-purple-100 px-4 dark:from-violet-950 dark:to-purple-950">
      <Meteors number={30} />

      <div className="z-10 mx-auto max-w-4xl text-center">
        <h1 className="mb-6 bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 bg-clip-text text-6xl font-bold text-transparent md:text-8xl dark:from-violet-200 dark:via-purple-300 dark:to-indigo-200">
          Miled Ameur
        </h1>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-violet-700 md:text-2xl dark:text-violet-300">
          Full-stack developer passionate about creating beautiful, functional
          web experiences. Building the future, one line of code at a time.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="h-2 w-2 animate-pulse rounded-full bg-violet-800 dark:bg-violet-300"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-purple-600 delay-75 dark:bg-purple-400"></div>
          <div className="h-2 w-2 animate-pulse rounded-full bg-indigo-700 delay-150 dark:bg-indigo-300"></div>
        </div>
      </div>

      <Desk />
    </div>
  );
}
