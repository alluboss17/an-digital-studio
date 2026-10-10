"use client";

import { FormEvent, useMemo, useState } from "react";

type Props = {
  calUrl?: string | null;
};

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100";

export default function WebsiteReviewForm({ calUrl }: Props) {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const startedAt = useMemo(() => Date.now(), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.get("fullName"),
          businessName: data.get("businessName"),
          website: data.get("website"),
          email: data.get("email"),
          phone: data.get("phone"),
          trade: data.get("trade"),
          goal: data.get("goal"),
          consent: data.get("consent") === "on",
          companyFax: data.get("companyFax"),
          startedAt,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "We could not send your request. Please try again."
        );
      }

      setState("success");
      setMessage(
        "Thanks — your website review request has been sent to AN Digital Studio."
      );
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please email hello@andigitalstudio.com."
      );
    }
  }

  if (state === "success") {
    return (
      <div className="card-surface rounded-2xl p-6 sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-700">
          ✓
        </div>

        <h2 className="mt-5 text-2xl font-bold tracking-[-.03em] text-slate-950">
          Request received.
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {message} We will review the information you supplied and reply by
          email. Any paid work would be discussed separately.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              setState("idle");
              setMessage("");
            }}
            className="button-secondary button-small"
          >
            Send another request
          </button>

          {calUrl && (
            <a
              href={calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary button-small"
            >
              Book an intro call <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="card-surface overflow-hidden rounded-2xl">
      <div className="border-b border-slate-200 bg-white px-5 py-5 sm:px-7">
        <p className="text-sm font-bold text-slate-900">
          Website review request
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          A few useful details are enough to get started.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 sm:p-7"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-bold text-slate-700">
            Your name
            <input
              className={inputClass}
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Alex Morgan"
              maxLength={100}
              required
            />
          </label>

          <label className="text-xs font-bold text-slate-700">
            Business name
            <input
              className={inputClass}
              name="businessName"
              type="text"
              autoComplete="organization"
              placeholder="Example Roofing Ltd"
              maxLength={120}
              required
            />
          </label>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-bold text-slate-700">
            Website
            <input
              className={inputClass}
              name="website"
              type="text"
              inputMode="url"
              placeholder="https://example.co.uk"
              maxLength={240}
              required
            />
          </label>

          <label className="text-xs font-bold text-slate-700">
            Trade / business type
            <select
              className={inputClass}
              name="trade"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option>Builder / construction</option>
              <option>Roofing</option>
              <option>Renovation / refurbishment</option>
              <option>Plumbing / heating</option>
              <option>Electrical</option>
              <option>Landscaping</option>
              <option>Other local service business</option>
            </select>
          </label>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="text-xs font-bold text-slate-700">
            Email
            <input
              className={inputClass}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.co.uk"
              maxLength={160}
              required
            />
          </label>

          <label className="text-xs font-bold text-slate-700">
            Phone
            <span className="ml-1 font-medium text-slate-400">(optional)</span>
            <input
              className={inputClass}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+44 ..."
              maxLength={60}
            />
          </label>
        </div>

        <label className="mt-5 block text-xs font-bold text-slate-700">
          What would you most like the website to improve?
          <textarea
            className={`${inputClass} min-h-32 resize-y`}
            name="goal"
            placeholder="For example: make the site look more trustworthy, explain our services better, or generate more suitable quote enquiries."
            maxLength={1500}
            required
          />
        </label>

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-600">
            <input
              name="consent"
              type="checkbox"
              required
              className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600"
            />
            <span>
              I understand this request is for a free website review, not a free
              website build, and I am happy for AN Digital Studio to contact me
              about this request. I have read the privacy notice.
            </span>
          </label>
        </div>

        <div
          className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
          aria-hidden="true"
        >
          <label>
            Company fax
            <input
              name="companyFax"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="button-primary button-large mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting"
            ? "Sending request..."
            : "Request my free website review"}
          <span aria-hidden="true">↗</span>
        </button>

        <p className="mt-3 text-center text-[11px] leading-5 text-slate-500">
          No payment details are collected here. No website build is started by
          submitting this form.
        </p>

        <p
          className={`mt-4 text-center text-xs leading-5 ${
            state === "error" ? "text-red-700" : "text-slate-500"
          }`}
          aria-live="polite"
        >
          {message}
        </p>
      </form>
    </div>
  );
}
