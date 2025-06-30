
import BackgroundParticles from "@/components/background-particles";
import { ThemeToggle } from "@/components/theme-toggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="relative w-full">
      <BackgroundParticles />

      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>
      {children}
    </span>
  );
}
