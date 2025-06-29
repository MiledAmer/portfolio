import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  Bike,
  Gamepad2,
  Film,
  Coffee,
  Heart,
} from "lucide-react";

const interests = [
  {
    icon: Bike,
    title: "Motorcycle Riding",
    description:
      "Love the freedom of the open road and the thrill of two wheels",
    color: "text-orange-500",
  },
  {
    icon: Gamepad2,
    title: "Action/Adventure Games",
    description: "Immersive storytelling and epic adventures are my escape",
    color: "text-blue-500",
  },
  {
    icon: Film,
    title: "Cinema",
    description: "Passionate about great storytelling through the art of film",
    color: "text-purple-500",
  },
];

export default function About() {
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
          <h1 className="mb-4 bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 bg-clip-text pb-2 text-4xl font-bold text-transparent md:text-6xl dark:from-violet-200 dark:via-purple-300 dark:to-indigo-200">
            My Projects
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-violet-700 dark:text-violet-300">
            A collection of projects I&apos;ve built and contributed to, ranging
            from enterprise CRM systems to SaaS platforms.
          </p>
        </div>

        <div className="space-y-12">
          {/* Professional Section */}
          <div className="rounded-2xl border border-violet-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-violet-100 p-3 dark:bg-violet-800">
                <Code2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold text-violet-900 dark:text-violet-100">
                The Developer
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-violet-700 dark:text-violet-300">
              <p>
                I&apos;m a passionate full-stack developer with over 2 years of
                experience building web applications that make a difference. My
                journey in tech started with curiosity and has evolved into a
                love for creating beautiful, functional experiences.
              </p>
              <p>
                I specialize in modern web technologies like Vue.js, TypeScript,
                and Laravel, and I&apos;ve had the privilege of working on
                everything from internal marketplaces to CRM systems that serve
                thousands of users. What drives me is the ability to solve real
                problems through code and see the impact of my work in the real
                world.
              </p>
              <p>
                When I&apos;m not coding, I believe in continuous learning and
                staying up-to-date with the latest technologies and best
                practices. The tech world moves fast, and I love being part of
                that evolution.
              </p>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="rounded-2xl border border-violet-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-xl bg-violet-100 p-3 dark:bg-violet-800">
                <Heart className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold text-violet-900 dark:text-violet-100">
                Beyond Code
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-white/40 p-6 text-center transition-transform duration-300 hover:scale-105 dark:bg-violet-800/20"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-white p-4 shadow-lg transition-shadow duration-300 group-hover:shadow-xl dark:bg-violet-800">
                      <interest.icon className={`h-8 w-8 ${interest.color}`} />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-violet-900 dark:text-violet-100">
                    {interest.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-violet-600 dark:text-violet-400">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="rounded-2xl border border-violet-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-violet-100 p-3 dark:bg-violet-800">
                <Coffee className="h-6 w-6 text-violet-600 dark:text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold text-violet-900 dark:text-violet-100">
                My Philosophy
              </h2>
            </div>
            <div className="leading-relaxed text-violet-700 dark:text-violet-300">
              <p>
                I believe that great software is built by people who understand
                that technology is ultimately about human connection. Whether
                I&apos;m debugging code at 2 AM, exploring winding mountain
                roads on my motorcycle, getting lost in an epic game narrative,
                or being moved by a powerful film, I&apos;m always seeking
                experiences that challenge me and broaden my perspective.
              </p>
              <p className="mt-4">
                These diverse interests fuel my creativity and problem-solving
                approach in development. The storytelling techniques I admire in
                games and cinema influence how I think about user experience,
                while the focus and precision required in motorcycle riding
                translates to writing clean, efficient code.
              </p>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-violet-200/50 bg-white/60 p-6 text-center backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
              <div className="mb-2 text-3xl font-bold text-violet-900 dark:text-violet-200">
                2+
              </div>
              <div className="text-violet-700 dark:text-violet-400">
                Years of Development
              </div>
            </div>
            <div className="rounded-2xl border border-violet-200/50 bg-white/60 p-6 text-center backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
              <div className="mb-2 text-3xl font-bold text-violet-900 dark:text-violet-200">
                ∞
              </div>
              <div className="text-violet-700 dark:text-violet-400">
                Passion for Learning
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">Let&apos;s Connect</h2>
            <p className="mb-6 opacity-90">
              Whether you want to discuss a project, share motorcycle routes,
              recommend a great game, or debate the best films of the year,
              I&apos;d love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-violet-600 transition-colors duration-200 hover:bg-violet-50"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
