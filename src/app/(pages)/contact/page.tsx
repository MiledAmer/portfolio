import {
  ArrowLeft,
  Mail,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop me a line anytime",
    value: "m.miled@yahoo.fr",
    href: "mailto:m.miled@yahoo.fr",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in",
    value: "Monastir, Tunisia",
    href: "#",
    color: "text-red-500",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "I typically respond within",
    value: "24 hours",
    href: "#",
    color: "text-purple-500",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/MiledAmer",
    color: "text-gray-700 dark:text-gray-300",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-miled-b7b561287/",
    color: "text-blue-600",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 px-4 py-12 dark:from-violet-950 dark:to-purple-950">
      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-violet-600 transition-colors duration-200 hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 bg-clip-text text-4xl font-bold text-transparent md:text-6xl dark:from-violet-200 dark:via-purple-300 dark:to-indigo-200">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-violet-700 dark:text-violet-300">
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-violet-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg bg-violet-100 p-2 dark:bg-violet-800">
                <Send className="h-5 w-5 text-violet-600 dark:text-violet-400" />
              </div>
              <h2 className="text-2xl font-bold text-violet-900 dark:text-violet-100">
                Send a Message
              </h2>
            </div>

            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="rounded-2xl border border-violet-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
              <h2 className="mb-6 text-2xl font-bold text-violet-900 dark:text-violet-100">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group flex items-start gap-4">
                    <div className="rounded-lg bg-white p-3 shadow-sm transition-shadow duration-200 group-hover:shadow-md dark:bg-violet-800">
                      <method.icon className={`h-5 w-5 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-violet-900 dark:text-violet-100">
                        {method.title}
                      </h3>
                      <p className="mb-1 text-sm text-violet-600 dark:text-violet-400">
                        {method.description}
                      </p>
                      {method.href.startsWith("mailto:") ||
                      method.href === "#" ? (
                        <span className="font-medium text-violet-700 dark:text-violet-300">
                          {method.value}
                        </span>
                      ) : (
                        <a
                          href={method.href}
                          className="font-medium text-violet-700 transition-colors duration-200 hover:text-violet-900 dark:text-violet-300 dark:hover:text-violet-100"
                        >
                          {method.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-violet-200/50 bg-white/60 p-8 backdrop-blur-sm dark:border-violet-700/50 dark:bg-violet-900/30">
              <h2 className="mb-6 text-2xl font-bold text-violet-900 dark:text-violet-100">
                Connect With Me
              </h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-md dark:bg-violet-800"
                    title={social.name}
                  >
                    <social.icon
                      className={`h-5 w-5 ${social.color} transition-transform duration-200 group-hover:scale-110`}
                    />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-violet-600 dark:text-violet-400">
                Follow me for updates on my latest projects and tech insights.
              </p>
            </div>

            {/* Availability */}
            <div className="rounded-2xl bg-gradient-to-r from-violet-500 to-purple-600 p-6 text-white">
              <h3 className="mb-2 text-lg font-semibold">
                Currently Available
              </h3>
              <p className="mb-4 text-violet-100">
                I&apos;m open to new opportunities and interesting projects.
                Whether it&apos;s freelance work, full-time positions, or
                collaborations, let&apos;s talk!
              </p>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
                <span className="text-sm font-medium">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
