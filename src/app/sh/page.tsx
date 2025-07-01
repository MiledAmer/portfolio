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
      ...(socialLinks && typeof socialLinks === "object"
        ? Object.entries(socialLinks).map(
            ([name, href]) => `   - ${name}: ${href}`,
          )
        : []),
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
    type: "file",
    content: ["summary.txt", "experience.txt", "education.txt"],
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
          } else if (targetDir === "resume") {
            // Special case: trigger resume download
            const link = document.createElement("a");
            link.href = "/miled_resume.pdf";
            link.download = "Miled_Ameur_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            output = [
              "📄 Downloading resume...",
              "Resume download initiated: Miled_Ameur_Resume.pdf",
              "",
              "Thank you for your interest in my profile!",
            ];
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
    <div className="min-h-screen bg-black p-4 font-mono text-green-400 ">
      <style jsx>{`
        @keyframes flicker {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.98;
          }
        }

        @keyframes scanlines {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(97vh);
          }
        }

        @keyframes textGlow {
          0%,
          100% {
            text-shadow:
              0 0 5px rgba(34, 197, 94, 0.5),
              0 0 10px rgba(34, 197, 94, 0.3);
          }
          50% {
            text-shadow:
              0 0 8px rgba(34, 197, 94, 0.8),
              0 0 15px rgba(34, 197, 94, 0.5);
          }
        }

        @keyframes waveDistortion {
          0%,
          100% {
            transform: translateX(0px);
          }
          25% {
            transform: translateX(1px);
          }
          50% {
            transform: translateX(-1px);
          }
          75% {
            transform: translateX(0.5px);
          }
        }

        .crt-screen {
          animation:
            flicker 0.15s infinite linear alternate,
            waveDistortion 0.1s infinite linear;
          background:
            radial-gradient(
              ellipse at center,
              transparent 0%,
              rgba(0, 0, 0, 0.1) 100%
            ),
            linear-gradient(90deg, transparent 50%, rgba(34, 197, 94, 0.03) 50%);
          background-size:
            100% 100%,
            4px 4px;
        }

        .crt-screen::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            transparent 50%,
            rgba(34, 197, 94, 0.05) 50%
          );
          background-size: 100% 4px;
          pointer-events: none;
          z-index: 1;
        }

        .crt-screen::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(34, 197, 94, 0.8),
            transparent
          );
          animation: scanlines 2s linear infinite;
          pointer-events: none;
          z-index: 2;
        }

        .crt-text {
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        .terminal-content {
          animation: waveDistortion 0.08s infinite linear;
        }
      `}</style>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-green-400 transition-colors duration-200 hover:text-green-300 "
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
        className="h-[calc(100vh-120px)] cursor-text overflow-y-auto rounded-lg p-4 crt-text crt-screen"
        onClick={handleTerminalClick}
        ref={terminalRef}
      >
        {/* Command History */}
        {commandHistory.map((cmd, index) => (
          <div key={index} className="mb-2">
            {cmd.input && <div className="text-green-300 crt-text">{cmd.input}</div>}
            {cmd.output.map((line, lineIndex) => (
              <div
                key={lineIndex}
                className="whitespace-pre-wrap text-green-400 crt-text"
              >
                {line}
              </div>
            ))}
          </div>
        ))}

        {/* Current Input */}
        <div className="flex items-center">
          <span className="mr-2 text-green-300 crt-text">{currentPath}$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border-none bg-transparent font-mono text-green-400 outline-none crt-text"
            placeholder="Enter command..."
            autoFocus
          />
          <span className="animate-pulse text-green-400">█</span>
        </div>
      </div>
    </div>
  );
}
