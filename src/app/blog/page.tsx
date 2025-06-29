import {
  ArrowLeft,
  PenTool,
  Calendar,
  Rocket,
  Code2,
  Coffee,
} from "lucide-react";
import Link from "next/link";

const upcomingTopics = [
  {
    icon: Code2,
    title: "Vue.js Deep Dives",
    description: "Advanced patterns and best practices",
  },
  {
    icon: Rocket,
    title: "Project Case Studies",
    description: "Behind-the-scenes of my development process",
  },
  {
    icon: Coffee,
    title: "Developer Life",
    description: "Balancing code, motorcycles, and cinema",
  },
];

export default function Blog() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-50 to-purple-100 px-4 dark:from-violet-950 dark:to-purple-950">
      <div className="mx-auto max-w-4xl text-center">
        {/* Back Button */}
        <div className="absolute top-6 left-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-violet-600 transition-colors duration-200 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="rounded-full bg-violet-100 p-6 shadow-lg dark:bg-violet-900">
                <PenTool className="h-12 w-12 text-violet-600 dark:text-violet-400" />
              </div>
            </div>

            <h1 className="bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 bg-clip-text text-4xl font-bold text-transparent md:text-6xl dark:from-violet-200 dark:via-purple-300 dark:to-indigo-200">
              Blog Coming Soon
            </h1>

            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-violet-700 dark:text-violet-300">
              I&apos;m working on something special! A place where I&apos;ll
              share insights about web development, project stories, and the
              intersection of code and creativity.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-violet-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
            <div className="mb-4 flex items-center gap-4">
              <Rocket className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              <h2 className="text-xl font-semibold text-violet-900 dark:text-violet-100">
                Development Progress
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm text-violet-700 dark:text-violet-300">
                <span>Blog Platform Setup</span>
                <span>75%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-violet-200 dark:bg-violet-800">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-500 ease-out"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-violet-900 dark:text-violet-100">
              What to Expect
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {upcomingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="group rounded-xl border border-violet-200/50 bg-white/60 p-6 backdrop-blur-sm transition-transform duration-300 hover:scale-105 dark:border-violet-700/50 dark:bg-violet-900/30"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-lg bg-violet-100 p-3 transition-transform duration-200 group-hover:scale-110 dark:bg-violet-800">
                      <topic.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-violet-900 dark:text-violet-100">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-violet-600 dark:text-violet-400">
                    {topic.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-violet-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
            <div className="mb-6 flex items-center gap-3">
              <Calendar className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              <h2 className="text-xl font-semibold text-violet-900 dark:text-violet-100">
                Launch Timeline
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="flex-1">
                  <div className="font-medium text-violet-900 dark:text-violet-100">
                    Platform Setup
                  </div>
                  <div className="text-sm text-violet-600 dark:text-violet-400">
                    Completed
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 animate-pulse rounded-full bg-violet-500"></div>
                <div className="flex-1">
                  <div className="font-medium text-violet-900 dark:text-violet-100">
                    Content Creation
                  </div>
                  <div className="text-sm text-violet-600 dark:text-violet-400">
                    In Progress
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-3 w-3 rounded-full bg-violet-300 dark:bg-violet-700"></div>
                <div className="flex-1">
                  <div className="font-medium text-violet-900 dark:text-violet-100">
                    First Articles
                  </div>
                  <div className="text-sm text-violet-600 dark:text-violet-400">
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Message */}
          <div className="text-center">
            <p className="text-violet-600 italic dark:text-violet-400">
              &quot;Great things take time. In the meantime, feel free to check
              out my projects or get in touch!&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
