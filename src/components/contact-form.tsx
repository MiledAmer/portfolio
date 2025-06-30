"use client";

import { send } from "@/app/(pages)/contact/send-email";
import { LoaderCircle, Send } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
export default function ContactForm() {
  const [pending, transition] = useTransition();

  async function submit(formData: FormData) {
    transition(async () => {
      await send(
        formData.get("email") as string,
        formData.get("message") as string,
        formData.get("name") as string,
        formData.get("subject") as string,
      );
      toast.success("Message sent successfully!");
    });
  }
  return (
    <form className="space-y-6" action={submit}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-violet-700 dark:text-violet-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded-lg border border-violet-200 bg-white/50 px-4 py-3 text-violet-900 placeholder-violet-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-violet-500 dark:border-violet-700 dark:bg-violet-800/50 dark:text-violet-100 dark:placeholder-violet-400"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-violet-700 dark:text-violet-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full rounded-lg border border-violet-200 bg-white/50 px-4 py-3 text-violet-900 placeholder-violet-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-violet-500 dark:border-violet-700 dark:bg-violet-800/50 dark:text-violet-100 dark:placeholder-violet-400"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-violet-700 dark:text-violet-300"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full rounded-lg border border-violet-200 bg-white/50 px-4 py-3 text-violet-900 placeholder-violet-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-violet-500 dark:border-violet-700 dark:bg-violet-800/50 dark:text-violet-100 dark:placeholder-violet-400"
          placeholder="What's this about?"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-violet-700 dark:text-violet-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full resize-none rounded-lg border border-violet-200 bg-white/50 px-4 py-3 text-violet-900 placeholder-violet-500 transition-colors focus:border-transparent focus:ring-2 focus:ring-violet-500 dark:border-violet-700 dark:bg-violet-800/50 dark:text-violet-100 dark:placeholder-violet-400"
          placeholder="Tell me about your project, idea, or just say hello..."
          required
        />
      </div>

      <button
        disabled={pending}
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:from-violet-600 hover:to-purple-700"
      >
        <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        Send Message
        {pending && <LoaderCircle className="animate-spin" />}
      </button>
    </form>
  );
}
