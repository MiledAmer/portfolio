"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Command {
  input: string;
  output: string[];
}

const portfolioData = {
  "/": {
    type: "directory",
    content: ["projects", "about", "contact", "blog", "resume"],
    description: "Miled Ameur's Portfolio - Root Directory",
  },
  "/projects": {
    type: "directory",
    content: [
      "atoll-marketplace.txt",
      "creditwiin-crm.txt",
      "batigo-crm.txt",
      "shelfsuccess-blog.txt",
      "tictacpneu-ecommerce.txt",
      "invoice-saas.txt",
      "stock-tracking.txt",
    ],
    description: "My Development Projects",
  },
  "/projects/atoll-marketplace.txt": {
    type: "file",
    content: [
      "=== Atoll Palme's Internal Marketplace ===",
      "",
      "Type: Professional",
      "Technologies: Vue.js, Laravel, TypeScript",
      "",
      "Description:",
      "Led the development of an internal marketplace platform with",
      "advanced functionality and seamless user experience.",
      "",
      "Key Features:",
      "- Advanced search and filtering",
      "- User role management",
      "- Real-time notifications",
      "- Responsive design",
    ],
  },
  "/projects/creditwiin-crm.txt": {
    type: "file",
    content: [
      "=== CreditWiin / 2lCourtage CRM ===",
      "",
      "Type: Professional",
      "Technologies: TypeScript, Laravel, Vue.js, PostgreSQL",
      "Metrics: 40% reduction in runtime errors",
      "",
      "Description:",
      "Developed a comprehensive CRM system with role-based permissions",
      "and dynamic document generation capabilities.",
      "",
      "Achievements:",
      "- Implemented TypeScript for better code quality",
      "- Built dynamic document generation system",
      "- Created role-based permission system",
      "- Reduced runtime errors by 40%",
    ],
  },
  "/projects/batigo-crm.txt": {
    type: "file",
    content: [
      "=== Batigo CRM Enhancement ===",
      "",
      "Type: Professional",
      "Technologies: Vue.js, Laravel",
      "Metrics: 70% performance improvement",
      "",
      "Description:",
      "Enhanced legacy CRM system, improving functionality and user",
      "experience while boosting performance significantly.",
      "",
      "Key Improvements:",
      "- Database query optimization",
      "- Frontend performance enhancements",
      "- User interface modernization",
      "- Code refactoring and cleanup",
    ],
  },
  "/projects/shelfsuccess-blog.txt": {
    type: "file",
    content: [
      "=== ShelfSuccess Blog ===",
      "",
      "Type: Freelance",
      "Technologies: Next.js, TypeScript, Sanity",
      "Metrics: 10K+ monthly visitors, 1K+ subscribers",
      "",
      "Description:",
      "Built and launched a successful blog platform with newsletter",
      "integration and content management system.",
      "",
      "Features:",
      "- SEO-optimized blog posts",
      "- Newsletter subscription system",
      "- Content management with Sanity CMS",
      "- Responsive design",
      "- Social media integration",
    ],
  },
  "/projects/tictacpneu-ecommerce.txt": {
    type: "file",
    content: [
      "=== Tictacpneu E-commerce ===",
      "",
      "Type: Freelance",
      "Technologies: Vue.js, Laravel, PostgreSQL",
      "Metrics: 5K+ monthly users, 1K+ products",
      "",
      "Description:",
      "Contributed to a large-scale e-commerce platform supporting",
      "thousands of users and extensive product catalog.",
      "",
      "Contributions:",
      "- Product catalog management",
      "- Shopping cart functionality",
      "- Payment integration",
      "- Order management system",
      "- User account management",
    ],
  },
  "/projects/invoice-saas.txt": {
    type: "file",
    content: [
      "=== Invoice & Quote SaaS ===",
      "",
      "Type: SaaS",
      "Technologies: TypeScript, Next.js, PostgreSQL",
      "Metrics: 50+ clients, 1K+ documents monthly",
      "",
      "Description:",
      "Built a comprehensive SaaS tool for automated document",
      "generation with flexible template system.",
      "",
      "Features:",
      "- Automated invoice generation",
      "- Customizable templates",
      "- Client management",
      "- Payment tracking",
      "- Multi-currency support",
      "- PDF export functionality",
    ],
  },
  "/projects/stock-tracking.txt": {
    type: "file",
    content: [
      "=== Real-time Stock Tracking ===",
      "",
      "Type: SaaS",
      "Technologies: TypeScript, Next.js, PostgreSQL",
      "",
      "Description:",
      "Implemented a custom stock management system with real-time",
      "updates across delivery and inventory operations.",
      "",
      "Features:",
      "- Real-time inventory tracking",
      "- Delivery management",
      "- Stock alerts and notifications",
      "- Reporting and analytics",
      "- Multi-location support",
    ],
  },
  "/about": {
    type: "directory",
    content: ["developer.txt", "interests.txt", "philosophy.txt"],
    description: "About Miled Ameur",
  },
  "/about/developer.txt": {
    type: "file",
    content: [
      "=== The Developer ===",
      "",
      "I'm a passionate full-stack developer with over 2 years of",
      "experience building web applications that make a difference.",
      "My journey in tech started with curiosity and has evolved",
      "into a love for creating beautiful, functional experiences.",
      "",
      "I specialize in modern web technologies like Vue.js,",
      "TypeScript, and Laravel, and I've had the privilege of",
      "working on everything from internal marketplaces to CRM",
      "systems that serve thousands of users.",
      "",
      "What drives me is the ability to solve real problems through",
      "code and see the impact of my work in the real world.",
      "",
      "When I'm not coding, I believe in continuous learning and",
      "staying up-to-date with the latest technologies and best",
      "practices. The tech world moves fast, and I love being",
      "part of that evolution.",
    ],
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
  "/about/philosophy.txt": {
    type: "file",
    content: [
      "=== My Philosophy ===",
      "",
      "I believe that great software is built by people who understand",
      "that technology is ultimately about human connection.",
      "",
      "Whether I'm debugging code at 2 AM, exploring winding mountain",
      "roads on my motorcycle, getting lost in an epic game narrative,",
      "or being moved by a powerful film, I'm always seeking experiences",
      "that challenge me and broaden my perspective.",
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
      "📧 Email: miled.ameur@example.com",
      "📍 Location: Tunisia",
      "⏱️  Response Time: Within 24 hours",
      "💬 Preferred Contact: Email",
      "",
      "🔗 Social Links:",
      "   GitHub: https://github.com/miledameur",
      "   LinkedIn: https://linkedin.com/in/miledameur",
      "   Twitter: https://twitter.com/miledameur",
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
        <div className="text-sm text-green-600">Type &apos;help&apos; for commands</div>
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
