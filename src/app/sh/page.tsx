"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  getAboutInfo,
  getPersonalInfo,
  getProjects,
  getSocialLinks,
} from "@/lib/portfolio-data";

interface Command {
  input: string;
  output: string[];
}

const projects = getProjects();
const about = getAboutInfo();
const personalInfo = getPersonalInfo();
const socialLinks = getSocialLinks();

const portfolioData = {
  "/": {
    type: "directory",
    content: ["projects", "about", "contact", "resume"],
    description: "Miled Ameur's Portfolio - Root Directory",
  },
  "/projects": {
    type: "directory",
    content: projects.map((project) => project.filename),
    description: "My Development Projects",
  },
  "/about": {
    type: "directory",
    content: ["developer.txt", "interests.txt", "philosophy.txt"],
    description: "About Miled Ameur",
  },

  "/about/interests.txt": {
    type: "file",
    content: [
      "=== Beyond Code ===",
      "",
      "🏍️  Motorcycle Riding",
      "    Love the freedom of the open road and the thrill of two wheels",
      "",
      "🎮 Action/Adventure Games",
      "    Immersive storytelling and epic adventures are my escape",
      "",
      "🎬 Cinema",
      "    Passionate about great storytelling through the art of film",
      "",
      "These diverse interests fuel my creativity and problem-solving",
      "approach in development. The storytelling techniques I admire",
      "in games and cinema influence how I think about user experience,",
      "while the focus and precision required in motorcycle riding",
      "translates to writing clean, efficient code.",
    ],
  },
  "/contact": {
    type: "directory",
    content: ["info.txt", "availability.txt"],
    description: "Contact Information",
  },
  "/contact/info.txt": {
    type: "file",
    content: [
      "=== Contact Information ===",
      "",
      `📧 Email: ${personalInfo.email}`,
      "📍 Location: Tunisia",
      "⏱️  Response Time: Within 24 hours",
      "💬 Preferred Contact: Email",
      "",
      "🔗 Social Links:",
      ...(
        socialLinks && typeof socialLinks === "object"
          ? Object.entries(socialLinks).map(
              ([name, href]) => `   - ${name}: ${href}`,
            )
          : []
      ),
      "",
      "📞 Available for:",
      "   - Project discussions",
      "   - Collaboration opportunities",
      "   - Technical consultations",
      "   - Freelance work",
      "   - Full-time positions",
    ],
  },
  "/contact/availability.txt": {
    type: "file",
    content: [
      "=== Current Availability ===",
      "",
      "🟢 Status: Available for new projects",
      "",
      "I'm open to new opportunities and interesting projects.",
      "Whether it's freelance work, full-time positions, or",
      "collaborations, let's talk!",
      "",
      "Response Times:",
      "- Email: Within 24 hours",
      "- Urgent projects: Same day response",
      "- Weekend availability: For urgent matters",
      "",
      "Project Preferences:",
      "- Both small focused projects and larger applications",
      "- Long-term partnerships preferred",
      "- Ongoing support and maintenance available",
    ],
  },
  "/resume": {
    type: "directory",
    content: ["summary.txt", "experience.txt", "education.txt"],
    description: "Professional Resume",
  },
};

// @ts-expect-error: This is a known issue with TypeScript and Next.js, where it doesn't recognize dynamic keys in an object.
portfolioData["/about/developer.txt"] = {
  type: "file",
  content: [
    `=== ${about.developer.title} ===`,
    "",
    about.developer.content?.join("\n"),
  ],
};

// @ts-expect-error: This is a known issue with TypeScript and Next.js, where it doesn't recognize dynamic keys in an object.
portfolioData["/about/philosophy.txt"] = {
  type: "file",
  content: [
    `=== ${about.philosophy.title} ===`,
    "",
    about.philosophy.content?.join("\n"),
  ],
};

projects.forEach((project) => {
  const filePath = `/projects/${project.filename}`;
  // @ts-expect-error: This is a known issue with TypeScript and Next.js, where it doesn't recognize dynamic keys in an object.
  portfolioData[filePath] = {
    type: "file",
    content: [
      `=== ${project.name} ===`,
      "",
      project.description,
      "",
      "Technologies Used:",
      ...project.technologies.map((tech) => `- ${tech}`),
      "",
      project.metrics ? `Metrics: ${project.metrics}` : "",
    ],
  };
});

export default function Terminal() {
  const [currentPath, setCurrentPath] = useState("/");
  const [commandHistory, setCommandHistory] = useState<Command[]>([
    {
      input: "Welcome to Miled's Portfolio Terminal",
      output: [
        "Type 'help' for available commands",
        "Type 'ls' to list directory contents",
        "Type 'cd <directory>' to navigate",
        "",
      ],
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [commandHistory]);

  const executeCommand = (command: string) => {
    const parts = command.trim().split(" ");
    const cmd = (parts[0] ?? "").toLowerCase();
    const args = parts.slice(1);

    let output: string[] = [];

    switch (cmd) {
      case "help":
        output = [
          "Available commands:",
          "  ls                 - list directory contents",
          "  cd <directory>     - change directory",
          "  cat <file>         - display file contents",
          "  pwd                - show current directory",
          "  clear              - clear terminal",
          "  help               - show this help message",
          "",
        ];
        break;

      case "ls":
        const currentDir =
          portfolioData[currentPath as keyof typeof portfolioData];
        if (currentDir && currentDir.type === "directory") {
          output = [
            `Contents of ${currentPath}:`,
            "",
            ...currentDir.content.map((item) => {
              const fullPath =
                currentPath === "/" ? `/${item}` : `${currentPath}/${item}`;
              const itemData =
                portfolioData[fullPath as keyof typeof portfolioData];
              const type = itemData?.type === "directory" ? "📁" : "📄";
              return `${type} ${item}`;
            }),
            "",
          ];
        } else {
          output = ["Error: Not a directory"];
        }
        break;

      case "cd":
        if (args.length === 0) {
          setCurrentPath("/");
          output = ["Changed to root directory"];
        } else {
          const targetDir = args[0];
          let newPath: string;

          if (targetDir === "..") {
            if (currentPath === "/") {
              output = ["Already at root directory"];
            } else {
              const pathParts = currentPath.split("/").filter((p) => p);
              pathParts.pop();
              newPath =
                pathParts.length === 0 ? "/" : "/" + pathParts.join("/");
              setCurrentPath(newPath);
              output = [`Changed to ${newPath}`];
            }
          } else if (targetDir === "/") {
            setCurrentPath("/");
            output = ["Changed to root directory"];
          } else {
            newPath =
              currentPath === "/"
                ? `/${targetDir}`
                : `${currentPath}/${targetDir}`;
            const targetData =
              portfolioData[newPath as keyof typeof portfolioData];

            if (targetData && targetData.type === "directory") {
              setCurrentPath(newPath);
              output = [`Changed to ${newPath}`];
            } else {
              output = [`cd: ${targetDir}: No such directory`];
            }
          }
        }
        break;

      case "cat":
        if (args.length === 0) {
          output = ["cat: missing file name"];
        } else {
          const fileName = args[0];
          const filePath =
            currentPath === "/" ? `/${fileName}` : `${currentPath}/${fileName}`;
          const fileData =
            portfolioData[filePath as keyof typeof portfolioData];

          if (fileData && fileData.type === "file") {
            output = fileData.content;
          } else {
            output = [`cat: ${fileName}: No such file`];
          }
        }
        break;

      case "pwd":
        output = [currentPath];
        break;

      case "clear":
        setCommandHistory([]);
        return;

      case "":
        output = [];
        break;

      default:
        output = [
          `Command not found: ${cmd}`,
          "Type 'help' for available commands",
        ];
    }

    const newCommand: Command = {
      input: `${currentPath}$ ${command}`,
      output,
    };

    setCommandHistory((prev) => [...prev, newCommand]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      executeCommand(currentInput);
      setCurrentInput("");
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 font-mono text-green-400">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-400 transition-colors duration-200 hover:text-green-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <div className="text-green-300">
            Miled&apos;s Portfolio Terminal v1.0
          </div>
        </div>
        <div className="text-sm text-green-600">
          Type &apos;help&apos; for commands
        </div>
      </div>

      {/* Terminal */}
      <div
        className="h-[calc(100vh-120px)] cursor-text overflow-y-auto rounded-lg bg-gray-900 p-4"
        onClick={handleTerminalClick}
        ref={terminalRef}
      >
        {/* Command History */}
        {commandHistory.map((cmd, index) => (
          <div key={index} className="mb-2">
            {cmd.input && <div className="text-green-300">{cmd.input}</div>}
            {cmd.output.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="whitespace-pre-wrap text-green-400"
              >
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Current Input */}
        <div className="flex items-center">
          <span className="mr-2 text-green-300">{currentPath}$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-none bg-transparent font-mono text-green-400 outline-none"
            autoFocus
          />
          <span className="animate-pulse text-green-400">█</span>
        </div>
      </div>
    </div>
  );
}
