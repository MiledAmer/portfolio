import "@/styles/globals.css";
import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miled Ameur - Developer Portfolio",
  description:
    "Full-stack developer passionate about creating beautiful, functional web experiences.",
  icons: [{ rel: "icon", url: "/rocket.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Toaster position="top-right" />
          <Analytics />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
