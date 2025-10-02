export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 px-4 py-12 dark:from-violet-950 dark:to-purple-950">
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
}
