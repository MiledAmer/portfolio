"use client";
import { useTheme } from "next-themes";
import { Particles } from "./magicui/particles";
import { useEffect, useState } from "react";

export default function BackgroundParticles() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <>
      <Particles
        className="absolute inset-0 z-0 h-full w-[99vw]"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </>
  );
}
