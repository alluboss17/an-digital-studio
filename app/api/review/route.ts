import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ReviewPayload = {
  fullName?: unknown;
  businessName?: unknown;
  website?: unknown;
  email?: unknown;
  phone?: unknown;
  trade?: unknown;
  goal?: unknown;
  consent?: unknown;
  companyFax?: unknown;
  startedAt?: unknown;
};

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normaliseWebsite(value: string) {
  const candidate = /^https?:\/\//i.test(value)
    ? value
    : `https://${value}`;

  try {
    const url = new URL(candidate);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ReviewPayload;

    const fullName = text(body.fullName, 100);
    const businessName = text(body.businessName, 120);
    const websiteInput = text(body.website, 240);
    const email = text(body.email, 160).toLowerCase();
    const phone = text(body.phone, 60);
    const trade = text(body.trade, 100);
    const goal = text(body.goal, 1500);
    const companyFax = text(body.companyFax, 160);
    const consent = body.consent === true;
    const startedAt =
      typeof body.startedAt === "number" ? body.startedAt : 0;

    // Honeypot: quietly accept obvious bot submissions without sending email.
    if (companyFax) {
      return NextResponse.json({ ok: true });
    }

    // Very fast submissions are commonly automated.
    if (startedAt && Date.now() - startedAt < 1800) {
      return NextResponse.json({ ok: true });
    }

    const website = normaliseWebsite(websiteInput);

    if (
      !fullName ||
      !businessName ||
      !website ||
      !validEmail(email) ||
      !trade ||
      !goal ||
      !consent
    ) {
      return NextResponse.json(
        {
          error:
            "Please complete the required fields and check the confirmation box.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail =
      process.env.REVIEW_TO_EMAIL || "hello@andigitalstudio.com";
    const fromEmail =
      process.env.REVIEW_FROM_EMAIL ||
      "AN Digital Studio <reviews@mail.andigitalstudio.com>";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        {
          error:
            "The review form is temporarily unavailable. Please email hello@andigitalstudio.com.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const safe = {
      fullName: escapeHtml(fullName),
      businessName: escapeHtml(businessName),
      website: escapeHtml(website),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "Not supplied"),
      trade: escapeHtml(trade),
      goal: escapeHtml(goal).replaceAll("\n", "<br />"),
    };

    const internal = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Website review request — ${businessName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;color:#101b32;line-height:1.6">
          <h1 style="font-size:24px;margin:0 0 20px">New website review request</h1>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;font-weight:700">Name</td><td>${safe.fullName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Business</td><td>${safe.businessName}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Website</td><td>${safe.website}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Trade</td><td>${safe.trade}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Email</td><td>${safe.email}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Phone</td><td>${safe.phone}</td></tr>
          </table>
          <h2 style="font-size:18px;margin:24px 0 8px">What they want to improve</h2>
          <p style="margin:0">${safe.goal}</p>
          <hr style="border:0;border-top:1px solid #e2e8f0;margin:28px 0" />
          <p style="font-size:12px;color:#64748b;margin:0">
            Submitted through the AN Digital Studio website review form.
          </p>
        </div>
      `,
    });

    if (internal.error) {
      console.error("Resend internal email error:", internal.error);
      return NextResponse.json(
        {
          error:
            "We could not send your request. Please email hello@andigitalstudio.com.",
        },
        { status: 500 }
      );
    }

    // Acknowledgement email. Its failure should not lose the main enquiry.
    const confirmation = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "We received your website review request",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;color:#101b32;line-height:1.65">
          <h1 style="font-size:24px;margin:0 0 16px">Thanks, ${safe.fullName}.</h1>
          <p>We received your website review request for <strong>${safe.businessName}</strong>.</p>
          <p>We will review the information you supplied and reply by email. This request is for a free website review only; no website build or paid work starts from this submission.</p>
          <p style="margin-top:28px">AN Digital Studio<br /><a href="mailto:hello@andigitalstudio.com">hello@andigitalstudio.com</a></p>
        </div>
      `,
    });

    if (confirmation.error) {
      console.warn("Resend confirmation email error:", confirmation.error);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Website review form error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please email hello@andigitalstudio.com.",
      },
      { status: 500 }
    );
  }
}
