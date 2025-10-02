import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 px-4 py-12 dark:from-violet-950 dark:to-purple-950">
      <div className="mx-auto max-w-7xl">
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
        {children}
      </div>
    </div>
  );
}
