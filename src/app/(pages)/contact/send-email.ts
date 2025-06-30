"use server";

import { Resend } from "resend";
import ContactMe from "@/email-template/contact-me";
import { env } from "@/env";

export async function send(
  email: string,
  content: string,
  name: string,
  subject: string,
) {
  const resend = new Resend(env.RESEND_EMAIL_API_KEY);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "midou.slm8@gmail.com",
    subject: "Someone contacted you via portfolio",
    react: ContactMe({ email, content, name, subject }),
  });
}
