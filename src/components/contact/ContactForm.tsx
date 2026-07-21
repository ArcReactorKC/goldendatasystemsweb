"use client";

import { FormEvent, useState } from "react";

const interestOptions = [
  "Managed IT Support",
  "AI & Automation",
  "Cybersecurity",
  "Cloud Infrastructure",
  "Strategic Consulting",
  "Something else",
];

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center">
        <p className="font-semibold text-emerald-800">Thanks, your message is on its way.</p>
        <p className="mt-1 text-sm text-emerald-700">
          A member of our team will follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full min-h-[44px] rounded-md border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full min-h-[44px] rounded-md border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-navy-900">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-1.5 w-full min-h-[44px] rounded-md border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
        />
      </div>

      <div>
        <label htmlFor="interest" className="block text-sm font-semibold text-navy-900">
          What are you looking for?
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue=""
          className="mt-1.5 w-full min-h-[44px] rounded-md border border-navy-900/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
        >
          <option value="" disabled>
            Select an option
          </option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full min-h-[44px] rounded-md border border-navy-900/15 px-3.5 py-2.5 text-sm outline-none focus:border-gold-500"
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">
          Something went wrong sending your message. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
